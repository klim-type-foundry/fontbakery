export default function formatFontBakeryKey(key: FontBakeryKey) {
    const formattedKey = key[0].replace('<Section: ', '');
    return formattedKey.substring(0, formattedKey.length - 1);
}
