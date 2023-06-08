import { defineStore } from 'pinia';
import devFontBakeryData from '@/data/dev-american-grotesk';
import { FontBakeryStatusOptions } from '@/Settings';

export const useFontBakeryData = defineStore('fontBakeryData', {
    state: (): FontBakeryData => ({
        result: {},
        sections: [],
        filters: {
            status: FontBakeryStatusOptions,
            sectionKey: [],
        },
    }),
    getters: {
        sectionByKey: (state) => (key: string) =>
            state.sections.find((section) => section.key[0] === key),
    },
    actions: {
        clearSectionKeyFilter() {
            this.filters.sectionKey = [];
        },
        setSectionKeyFilter(sectionKeys: string[]) {
            this.filters.sectionKey = sectionKeys;
        },
        clearStatusFilter() {
            this.filters.status = [];
        },
        setStatusFilter(statuses: FontBakeryStatus[]) {
            this.filters.status = statuses;
        },
        async fetchFontBakeryData() {
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
        },
    },
});
