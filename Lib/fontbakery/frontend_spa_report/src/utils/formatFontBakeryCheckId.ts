export default function formatFontBakeryCheckId(key: FontBakeryKey | string) {
    const rawCheckId = typeof key === 'string' ? key : key[1];
    if (!rawCheckId) {
        return '';
    }
    const formattedCheckId = rawCheckId.replace('<FontBakeryCheck:', '');
    return formattedCheckId.substring(0, formattedCheckId.length - 1);
}
