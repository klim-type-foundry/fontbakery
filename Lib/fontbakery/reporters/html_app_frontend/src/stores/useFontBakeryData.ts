import { defineStore } from 'pinia';
import devFontBakeryData from '@/data/dev-american-grotesk-ufo';
import getFontBakerySectionKeys from '@/utils/getFontBakerySectionKeys';
import { FontBakeryLogLevels } from '@/Settings';
import getFontTypeFromFilePath from '@/utils/getFontTypeFromFilePath';

export const useFontBakeryData = defineStore('fontBakeryData', {
    state: (): FontBakeryData => ({
        datetime: '',
        outputFile: '',
        result: {},
        sections: [],
        allFontTypes: [],
        fontTypeCheckCounts: {
            DESIGNSPACE: 0,
            OTF: 0,
            TTF: 0,
            UFO: 0,
            WOFF2: 0,
            'Whole family': 0,
        },
        filters: {
            status: [],
            sectionKey: [],
            fontType: [],
        },
    }),
    // getters: {
    //     sectionByKey: (state) => (key: string) =>
    //         state.sections.find((section) => section.key[0] === key),
    // },
    actions: {
        resetSectionKeyFilter() {
            this.filters.sectionKey = getFontBakerySectionKeys(this.sections);
        },
        setSectionKeyFilter(sectionKeys: string[]) {
            this.filters.sectionKey = sectionKeys;
        },
        resetStatusFilter() {
            this.filters.status = FontBakeryLogLevels;
        },
        setStatusFilter(statuses: FontBakeryStatus[]) {
            this.filters.status = statuses;
        },
        resetFontTypeFilter() {
            this.filters.fontType = this.allFontTypes;
        },
        setFontTypeFilter(fontTypes: FontBakeryFontType[]) {
            this.filters.fontType = fontTypes;
        },
        fetchFontBakeryData() {
            console.log('FSDFDSFDSFDSFDSF', import.meta.env);
            if (import.meta.env.DEV) {
                // In development, load the imported test data
                this.result = devFontBakeryData.result;
                this.sections = devFontBakeryData.sections;
                this.outputFile = devFontBakeryData.outputFile;
                console.log('DFSLKFDKSFLDKSFLDSK', devFontBakeryData.datetime);
                this.datetime = devFontBakeryData.datetime;
            } else {
                // Check whether we've already fetched the data
                if (this.sections.length > 0) {
                    return;
                }
                // In production, load from the window object (as set by Font Bakery's build process)
                this.result = window.fontBakeryData.result;
                this.sections = window.fontBakeryData.sections;
                this.outputFile = window.fontBakeryData.outputFile;
                this.datetime = window.fontBakeryData.datetime;
            }
            // // Sort all the result statuses
            // this.sections.forEach((section) => {
            //   section.result
            // })
            // Populate the font types that are present in this report
            this.sections.forEach((section) => {
                section.checks.forEach((check) => {
                    const fontType = getFontTypeFromFilePath(check.filename);
                    if (!this.allFontTypes.includes(fontType)) {
                        this.allFontTypes.push(fontType);
                    }
                    this.fontTypeCheckCounts[fontType] += 1;
                });
            });
            this.allFontTypes.sort();
            // Default to showing all statuses, font types and sections
            this.resetSectionKeyFilter();
            this.resetStatusFilter();
            this.resetFontTypeFilter();
        },
    },
});
