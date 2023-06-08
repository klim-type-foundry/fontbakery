<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useFontBakeryData } from '@/stores/useFontBakeryData';
import { FontBakeryStatusOptions } from '@/Settings';

const fontBakeryDataStore = useFontBakeryData();
const { result: fontBakeryResults, filters: fontBakeryFilters } = storeToRefs(fontBakeryDataStore);
</script>

<template>
    <h2>Result statuses</h2>
    <ul>
        <template
            v-for="fontBakeryStatusOption in FontBakeryStatusOptions"
            :key="fontBakeryStatusOption"
        >
            <li v-if="fontBakeryStatusOption in fontBakeryResults">
                <label>
                    <input
                        type="checkbox"
                        :value="fontBakeryStatusOption"
                        v-model="fontBakeryDataStore.filters.status"
                    />
                    {{ fontBakeryStatusOption }}: {{ fontBakeryResults[fontBakeryStatusOption] }}
                </label>
            </li>
        </template>
    </ul>
    {{ fontBakeryFilters.status }}
</template>

<style scoped></style>
