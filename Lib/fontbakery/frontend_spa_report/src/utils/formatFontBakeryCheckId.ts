export default function formatFontBakeryCheckId(key: FontBakeryKey) {
    if (!key[1]) {
        return '';
    }
    const formattedCheckId = key[1].replace('<FontBakeryCheck:', '');
    return formattedCheckId.substring(0, formattedCheckId.length - 1);
}
