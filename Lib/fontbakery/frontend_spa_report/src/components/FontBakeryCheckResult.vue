<script setup lang="ts">
import FontBakeryCheckLog from '@/components/FontBakeryCheckLog.vue';
import formatFontBakeryStatus from '../utils/formatFontBakeryStatus';

defineProps<{
    check: FontBakeryCheck;
}>();
</script>

<template>
    <li>
        <code
            >{{ check.filename ? check.filename : 'Family check' }} —
            {{ formatFontBakeryStatus(check.result) }}</code
        >
        <!--
          TODO: Use log levels from Font Bakery??
           Would have to output them to the HTML as a JS var.
        -->
        <ul v-if="['INFO', 'WARN', 'ERROR', 'FAIL'].includes(check.result)">
            <FontBakeryCheckLog
                v-for="logEntry in check.logs"
                :log-entry="logEntry"
                :key="logEntry.message"
            />
        </ul>
    </li>
</template>
