import { defineStore } from 'pinia';
import devFontBakeryData from '@/data/dev-american-grotesk';
import getFontBakerySectionKeys from '@/utils/getFontBakerySectionKeys';
import { FontBakeryLogLevels } from '@/Settings';

export const useFontBakeryData = defineStore('fontBakeryData', {
    state: (): FontBakeryData => ({
        result: {},
        sections: [],
        filters: {
            status: [],
            sectionKey: [],
        },
    }),
    getters: {
        sectionByKey: (state) => (key: string) =>
            state.sections.find((section) => section.key[0] === key),
    },
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
        fetchFontBakeryData() {
            if (import.meta.env.DEV) {
                // In development, load the imported test data
                this.result = devFontBakeryData.result;
                this.sections = devFontBakeryData.sections;
            } else {
                // In production, load from the window object (as set by Font Bakery's build process)
                // @ts-ignore TODO: fix window.fontBakeryData TS
                this.result = window.fontBakeryData.result;
                // @ts-ignore TODO: fix window.fontBakeryData TS
                this.sections = window.fontBakeryData.sections;
            }
            // // Sort all the result statuses
            // this.sections.forEach((section) => {
            //   section.result
            // })
            // Default to showing all statuses and sections
            this.resetSectionKeyFilter();
            this.resetStatusFilter();
        },
    },
});
