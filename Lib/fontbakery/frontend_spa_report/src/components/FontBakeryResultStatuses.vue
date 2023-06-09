<script setup lang="ts">
import formatFontBakeryStatus from '@/utils/formatFontBakeryStatus.js';
import getFontBakeryStatusEmoji from '@/utils/getFontBakeryStatusEmoji';

defineProps<{
    statuses: FontBakeryResultStatuses;
}>();
</script>

<template>
    <template v-for="(sectionResultStatus, statusKey) in statuses" :key="statusKey">
        <span v-html="getFontBakeryStatusEmoji(statusKey)" />
        {{ ` ` }}
        {{ formatFontBakeryStatus(statusKey) }}
        <span class="ikon">({{ sectionResultStatus }})</span>{{ ` ` }}
    </template>
</template>

<style scoped></style>
