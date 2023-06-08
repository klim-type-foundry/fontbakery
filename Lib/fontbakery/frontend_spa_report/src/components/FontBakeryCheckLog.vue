<script setup lang="ts">
import formatFontBakeryStatus from '@/utils/formatFontBakeryStatus';

defineProps<{
    logEntry: FontBakeryLog;
}>();
</script>

<template>
    <div class="check-log">
        <h4>{{ logEntry.message }} — {{ formatFontBakeryStatus(logEntry.status) }}</h4>
    </div>
</template>

<style scoped></style>
