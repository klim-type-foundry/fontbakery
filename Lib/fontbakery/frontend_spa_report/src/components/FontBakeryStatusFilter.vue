<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useFontBakeryData } from '@/stores/useFontBakeryData';
import formatFontBakeryStatus from '@/utils/formatFontBakeryStatus.js';
import getFontBakeryStatuses from '@/utils/getFontBakeryStatuses';
import getFontBakeryStatusEmoji from '@/utils/getFontBakeryStatusEmoji';
import type { Events } from 'vue';

const fontBakeryDataStore = useFontBakeryData();
const { result: fontBakeryResults, filters: fontBakeryFilters } = storeToRefs(fontBakeryDataStore);

function toggleSelection(event: Events['onClick']) {
    event.preventDefault();
    if (fontBakeryFilters.value.status.length === Object.keys(fontBakeryResults.value).length) {
        fontBakeryDataStore.setStatusFilter([]);
    } else {
        fontBakeryDataStore.setStatusFilter(
            Object.keys(fontBakeryResults.value) as FontBakeryStatus[],
        );
    }
}
</script>

<template>
    <h3>Statuses</h3>
    <ul>
        <template
            v-for="fontBakeryStatusOption in getFontBakeryStatuses(fontBakeryResults)"
            :key="fontBakeryStatusOption"
        >
            <li v-if="fontBakeryStatusOption in fontBakeryResults">
                <label>
                    <input
                        type="checkbox"
                        :value="fontBakeryStatusOption"
                        v-model="fontBakeryFilters.status"
                    />
                    {{ ` ` }}
                    <span v-html="getFontBakeryStatusEmoji(fontBakeryStatusOption)" />
                    {{ ` ` }}
                    {{ formatFontBakeryStatus(fontBakeryStatusOption) }}
                    {{ ` ` }}
                    <span class="count">{{
                        (fontBakeryResults[fontBakeryStatusOption] || 0).toLocaleString()
                    }}</span>
                </label>
            </li>
        </template>
        <li class="toggleSelection"><button @click="toggleSelection">Toggle all</button></li>
    </ul>
</template>

<style scoped></style>
