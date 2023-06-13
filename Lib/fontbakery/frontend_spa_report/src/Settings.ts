// For Söhne Ikon
export enum IkonType {
    /*
     * To determine character mapping, you can use the 'Font Book' app or this
     * link: `https://wakamaifondue.com/`
     */
    CROSS = '×',
    PLUS = '+',
    DOWNLOAD = '⤓',
    RADIO_UNCHECKED = '○',
    RADIO_CHECKED = '◉',
    RADIO_INDETERMINATE = '⊖',
    CHECKBOX_UNCHECKED = '□',
    CHECKBOX_CHECKED = '☑',
    CHECKBOX_INDETERMINATE = '⊟',
    ARROW_UP = '↑',
    ARROW_RIGHT = '→',
    CHEVRON_DOWN = '▼',
    CHEVRON_UP = '▲',
    CHEVRON_RIGHT = '▶',
    CHEVRON_LEFT = '◀',
    THEME_TOGGLE = '◑',
    EXTERNAL_LINK = '⇗',
    RESET = '⭯',
    BUILD_TIME = '⭍',
    JUMP_BACK = '⤴',
}

/**
 * TODO: Use log levels from Font Bakery??
 *  Would have to output them to the HTML as a JS var.
 */
export const FontBakeryLogLevels: FontBakeryStatus[] = ['WARN', 'ERROR', 'FAIL'];

// This array also determines the order in which statuses will show
export const CheckStatusEmoji: Record<FontBakeryStatus, string> = {
    ERROR: '💥',
    FAIL: '🔥',
    WARN: '⚠️',
    INFO: 'ℹ️',
    SKIP: '⏩',
    PASS: '✅',
    DEBUG: '🔎',
};
export const CheckStatusSortOrder: FontBakeryStatus[] = Object.keys(
    CheckStatusEmoji,
) as FontBakeryStatus[];
