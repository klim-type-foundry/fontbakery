<script setup lang="ts">
import getFontBakeryStatusEmoji from '@/utils/getFontBakeryStatusEmoji';
import formatFontBakeryMessage from '@/utils/formatFontBakeryMessage';

defineProps<{
    logEntry: FontBakeryLog;
}>();
</script>

<template>
    <li
        class="fontBakeryMessage"
        v-html="
            `${getFontBakeryStatusEmoji(logEntry.status)} ${formatFontBakeryMessage(
                logEntry.message,
            )}`
        "
    />
</template>

<style scoped></style>
