export default function getFontBakeryStatuses(
    resultStatuses: FontBakeryResultStatuses,
): FontBakeryStatus[] {
    return Object.keys(resultStatuses) as FontBakeryStatus[];
}
