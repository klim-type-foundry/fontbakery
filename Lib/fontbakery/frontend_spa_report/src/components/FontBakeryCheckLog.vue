<script setup lang="ts">
import formatFontBakeryStatus from '@/utils/formatFontBakeryStatus';

defineProps<{
    logEntry: FontBakeryLog;
}>();
</script>

<template>
    <h4>{{ logEntry.message }} — {{ formatFontBakeryStatus(logEntry.status) }}</h4>
</template>

<style scoped></style>
