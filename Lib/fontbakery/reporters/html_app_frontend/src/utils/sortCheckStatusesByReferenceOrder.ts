import { CheckStatusSortOrder } from '@/Settings';

export default function sortCheckStatusesByReferenceOrder(
    a: FontBakeryStatus,
    b: FontBakeryStatus,
) {
    return CheckStatusSortOrder.indexOf(a) - CheckStatusSortOrder.indexOf(b);
}
