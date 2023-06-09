/// <reference types="vite/client" />
type FontBakeryStatus = 'ERROR' | 'FAIL' | 'PASS' | 'WARN' | 'INFO' | 'SKIP' | 'DEBUG';

type FontBakeryKey = [string, string | null, [[string, number]] | null];

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
}

interface FontBakerySection {
    key: FontBakeryKey;
    checks: FontBakeryCheck[];
    result: FontBakeryResultStatuses;
}

interface FontBakeryData {
    result: FontBakeryResultStatuses;
    sections: FontBakerySection[];
    filters: {
        status: FontBakeryStatus[];
        sectionKey: string[];
    };
}

declare global {
    interface Window {
        fontBakeryData: FontBakeryData;
    }
}
