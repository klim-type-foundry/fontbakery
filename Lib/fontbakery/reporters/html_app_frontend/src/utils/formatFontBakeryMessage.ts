export default function formatFontBakeryMessage(message: string): string {
    return message
        .trim()
        .replace(/\n( ){8}/g, '\n')
        .replace(/\u23ce\n/g, '\n');
}
