<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useFontBakeryData } from '@/stores/useFontBakeryData';
import type { Events } from 'vue';

const fontBakeryDataStore = useFontBakeryData();
const {
    filters: fontBakeryFilters,
    allFontTypes,
    fontTypeCheckCounts,
} = storeToRefs(fontBakeryDataStore);

function toggleSelection(event: Events['onClick']) {
    event.preventDefault();
    if (fontBakeryFilters.value.fontType.length === allFontTypes.value.length) {
        fontBakeryDataStore.setFontTypeFilter([]);
    } else {
        fontBakeryDataStore.setFontTypeFilter(allFontTypes.value);
    }
}
</script>

<template>
    <div class="filterContainer">
        <h3>Font types</h3>
        <ul class="filterList">
            <template v-for="fontType in allFontTypes" :key="fontType">
                <li>
                    <label :title="`Toggle ${fontType} visibility`">
                        <input
                            type="checkbox"
                            :value="fontType"
                            v-model="fontBakeryFilters.fontType"
                        />
                        {{ ` ` }}
                        {{ fontType }}
                        {{ ` ` }}
                        <span class="count">{{
                            fontTypeCheckCounts[fontType].toLocaleString()
                        }}</span>
                    </label>
                </li>
            </template>
            <li class="toggleSelection"><button @click="toggleSelection">Toggle all</button></li>
        </ul>
    </div>
</template>

<style scoped></style>
