<script setup lang="ts">
import formatFontBakeryStatus from '@/utils/formatFontBakeryStatus';

defineProps<{
    statuses: FontBakeryResultStatuses;
}>();
</script>

<template>
    <template v-for="(sectionResultStatus, statusKey) in statuses" :key="statusKey">
        {{ formatFontBakeryStatus(statusKey) }}
        <span class="ikon">({{ sectionResultStatus }})</span>{{ ` ` }}
    </template>
</template>

<style scoped></style>
