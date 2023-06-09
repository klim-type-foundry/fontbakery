<script setup lang="ts">
import FontBakeryCheckLog from '@/components/FontBakeryCheckLog.vue';
import getFontBakeryStatusEmoji from '@/utils/getFontBakeryStatusEmoji';
import { useFontBakeryData } from '@/stores/useFontBakeryData';
import { storeToRefs } from 'pinia';
import { FontBakeryLogLevels } from '@/Settings';

const fontBakeryDataStore = useFontBakeryData();
const { filters: fontBakeryFilters } = storeToRefs(fontBakeryDataStore);

defineProps<{
    check: FontBakeryCheck;
}>();
</script>

<template>
    <li>
        <span v-html="getFontBakeryStatusEmoji(check.result)" />{{ ` ` }}
        <code>{{ check.filename ? check.filename : 'Family check' }} </code>
        <ul v-if="FontBakeryLogLevels.includes(check.result)">
            <FontBakeryCheckLog
                v-for="logEntry in check.logs.filter((log) =>
                    fontBakeryFilters.status.includes(log.status),
                )"
                :log-entry="logEntry"
                :key="logEntry.message"
            />
        </ul>
    </li>
</template>
