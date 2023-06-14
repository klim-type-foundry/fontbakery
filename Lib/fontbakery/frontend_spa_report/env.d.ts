/// <reference types="vite/client" />
type FontBakeryStatus = 'ERROR' | 'FAIL' | 'PASS' | 'WARN' | 'INFO' | 'SKIP' | 'DEBUG';

type FontBakeryFontType = 'OTF' | 'TTF' | 'UFO' | 'WOFF2' | 'DESIGNSPACE' | 'Whole family';

type FontBakeryKey = [string, string | null, [[string, number]] | [] | null];

interface FontBakeryResultStatuses {
    ERROR?: number;
    FAIL?: number;
    PASS?: number;
    WARN?: number;
    INFO?: number;
    SKIP?: number;
    DEBUG?: number;
}

interface FontBakeryLog {
    message: string;
    status: FontBakeryStatus;
    traceback: null | unknown;
}

interface FontBakeryCheck {
    description: string;
    filename?: string;
    key: FontBakeryKey;
    logs: FontBakeryLog[];
    result: FontBakeryStatus;
    rationale?: string;
    severity?: number;
}

interface FontBakerySection {
    key: FontBakeryKey;
    checks: FontBakeryCheck[];
    result: FontBakeryResultStatuses;
}

interface FontBakeryData {
    outputFile: string;
    result: FontBakeryResultStatuses;
    sections: FontBakerySection[];
    allFontTypes: FontBakeryFontType[];
    fontTypeCheckCounts: Record<FontBakeryFontType, number>;
    filters: {
        status: FontBakeryStatus[];
        sectionKey: string[];
        fontType: FontBakeryFontType[];
    };
}

declare global {
    interface Window {
        fontBakeryData: FontBakeryData;
    }
}
