<script setup lang="ts">
import getFontBakeryStatusEmoji from '@/utils/getFontBakeryStatusEmoji';

defineProps<{
    logEntry: FontBakeryLog;
}>();
</script>

<template>
    <li>
        <span v-html="getFontBakeryStatusEmoji(logEntry.status)" />{{ ` ` }}{{ logEntry.message }}
    </li>
</template>

<style scoped></style>
