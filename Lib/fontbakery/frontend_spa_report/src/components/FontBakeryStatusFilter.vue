<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useFontBakeryData } from '@/stores/useFontBakeryData';
import formatFontBakeryStatus from '@/utils/formatFontBakeryStatus.js';
import getFontBakeryStatuses from '@/utils/getFontBakeryStatuses';
import getFontBakeryStatusEmoji from '@/utils/getFontBakeryStatusEmoji';

const fontBakeryDataStore = useFontBakeryData();
const { result: fontBakeryResults } = storeToRefs(fontBakeryDataStore);
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
                        v-model="fontBakeryDataStore.filters.status"
                    />
                    {{ ` ` }}
                    <span v-html="getFontBakeryStatusEmoji(fontBakeryStatusOption)" />
                    {{ ` ` }}
                    {{ formatFontBakeryStatus(fontBakeryStatusOption) }}
                    {{ ` ` }}
                    <span class="ikon">({{ fontBakeryResults[fontBakeryStatusOption] }})</span>
                </label>
            </li>
        </template>
    </ul>
</template>

<style scoped></style>
