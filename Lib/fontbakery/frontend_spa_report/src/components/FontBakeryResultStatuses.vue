<script setup lang="ts">
import formatFontBakeryStatus from '@/utils/formatFontBakeryStatus.js';
import getFontBakeryStatusEmoji from '@/utils/getFontBakeryStatusEmoji';
import { CheckStatusSortOrder } from '@/Settings';
import { useFontBakeryData } from '@/stores/useFontBakeryData';
import { storeToRefs } from 'pinia';

defineProps<{
    statuses: FontBakeryResultStatuses;
}>();

const fontBakeryDataStore = useFontBakeryData();
const { filters: fontBakeryFilters } = storeToRefs(fontBakeryDataStore);
</script>

<template>
    <!-- Display the statuses sorted by the reference sort order -->
    <template v-for="referenceStatus in CheckStatusSortOrder" :key="referenceStatus">
        <span
            v-if="Object.keys(statuses).includes(referenceStatus)"
            :class="{ statusHidden: !fontBakeryFilters.status.includes(referenceStatus) }"
            :title="!fontBakeryFilters.status.includes(referenceStatus) ? 'Hidden' : undefined"
        >
            <span v-html="getFontBakeryStatusEmoji(referenceStatus)" />
            {{ ` ` }}
            {{ formatFontBakeryStatus(referenceStatus) }}
            <span class="count">{{ statuses[referenceStatus].toLocaleString() }}</span
            >{{ ` ` }}
        </span>
    </template>
</template>

<style scoped></style>
