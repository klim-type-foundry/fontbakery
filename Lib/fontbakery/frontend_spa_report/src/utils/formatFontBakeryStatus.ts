import { capitalize } from 'vue';

export default function formatFontBakeryStatus(status: FontBakeryStatus) {
    return capitalize(status.toLowerCase());
}
