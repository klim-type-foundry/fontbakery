import kebabCase from 'lodash/kebabCase';
export default function formatHtmlIdFromFontBakeryKey(key: FontBakeryKey) {
    return kebabCase(`${key[0]}${key[1] || ''}`);
}
