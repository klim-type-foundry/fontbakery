<script setup lang="ts">
import FontBakeryCheckLog from '@/components/FontBakeryCheckLog.vue';
import getFontBakeryStatusEmoji from '@/utils/getFontBakeryStatusEmoji';
import { useFontBakeryData } from '@/stores/useFontBakeryData';
import { storeToRefs } from 'pinia';

const fontBakeryDataStore = useFontBakeryData();
const { filters: fontBakeryFilters } = storeToRefs(fontBakeryDataStore);

defineProps<{
    check: FontBakeryCheck;
}>();
</script>

<template>
    <details>
        <summary>
            <span v-html="getFontBakeryStatusEmoji(check.result)" />{{ ` ` }}
            <span class="filename">{{ check.filename ? check.filename : 'Whole family' }} </span>
        </summary>
        <ul>
            <FontBakeryCheckLog
                v-for="logEntry in check.logs.filter((log) =>
                    fontBakeryFilters.status.includes(log.status),
                )"
                :log-entry="logEntry"
                :key="logEntry.message"
            />
        </ul>
    </details>
</template>
