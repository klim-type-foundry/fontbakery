import { CheckStatusEmoji } from '@/Settings';
import formatFontBakeryStatus from '@/utils/formatFontBakeryStatus';

export default function getFontBakeryStatusEmoji(status: FontBakeryStatus): string {
    return status in CheckStatusEmoji
        ? `<span class="emo" title="${formatFontBakeryStatus(status)}">${
              CheckStatusEmoji[status]
          }</span>`
        : '';
}
