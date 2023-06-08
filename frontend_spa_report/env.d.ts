/// <reference types="vite/client" />
type FontBakeryStatus = 'PASS' | 'WARN' | 'INFO' | 'ERROR' | 'FAIL';

type FontBakeryKey = [string, string | null, [[string, number]] | null];

interface FontBakeryResultStatuses {
    ERROR?: number;
    FAIL?: number;
    PASS?: number;
    WARN?: number;
    INFO?: number;
}

interface FontBakeryLog {
    message: string;
    status: FontBakeryStatus;
    traceback: null | unknown;
}

interface FontBakeryCheck {
    description: string;
    filename: string;
    key: FontBakeryKey;
    logs: FontBakeryLog[];
    result: FontBakeryStatus;
    rationale?: string;
}

interface FontBakeryData {
    result: FontBakeryResultStatuses;
    sections: {
        key: FontBakeryKey;
        checks: FontBakeryCheck[];
        result: FontBakeryResultStatuses;
    }[];
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
