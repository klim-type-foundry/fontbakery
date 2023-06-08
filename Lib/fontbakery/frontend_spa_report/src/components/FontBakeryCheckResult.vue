<script setup lang="ts">
import formatFontBakeryCheckId from '@/utils/formatFontBakeryCheckId';
import formatFontBakeryStatus from '@/utils/formatFontBakeryStatus';
import FontBakeryCheckLog from '@/components/FontBakeryCheckLog.vue';

defineProps<{
    check: FontBakeryCheck;
}>();
</script>

<template>
    <div class="check-result">
        <h3>{{ check.description }} — {{ formatFontBakeryStatus(check.result) }}</h3>
        <code>{{ formatFontBakeryCheckId(check.key) }}</code>
        <p>{{ check.filename }}</p>
        <p v-if="check.rationale">{{ check.rationale }}</p>
        <FontBakeryCheckLog
            v-for="logEntry in check.logs"
            :log-entry="logEntry"
            :key="logEntry.message"
        />
        <hr />
    </div>
</template>

<style scoped>
hr {
    margin: 1rem 0;
}
</style>
