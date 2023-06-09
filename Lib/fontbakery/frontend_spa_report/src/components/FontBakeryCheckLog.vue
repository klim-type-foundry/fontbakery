<script setup lang="ts">
import formatFontBakeryStatus from '@/utils/formatFontBakeryStatus';

defineProps<{
    logEntry: FontBakeryLog;
}>();
</script>

<template>
    <li>{{ logEntry.message }} — {{ formatFontBakeryStatus(logEntry.status) }}</li>
</template>

<style scoped></style>
