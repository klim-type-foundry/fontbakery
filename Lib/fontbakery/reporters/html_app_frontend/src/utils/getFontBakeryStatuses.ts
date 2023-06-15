import sortCheckStatusesByReferenceOrder from '@/utils/sortCheckStatusesByReferenceOrder';

export default function getFontBakeryStatuses(
    resultStatuses: FontBakeryResultStatuses,
): FontBakeryStatus[] {
    return (Object.keys(resultStatuses) as FontBakeryStatus[]).sort(
        sortCheckStatusesByReferenceOrder,
    );
}
