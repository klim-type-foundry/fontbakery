<script setup lang="ts">
import { onServerPrefetch, onMounted } from 'vue';
import { useFontBakeryData } from '@/stores/useFontBakeryData';
import FontBakeryStatusFilter from '@/components/FontBakeryStatusFilter.vue';
import FontBakerySectionFilter from '@/components/FontBakerySectionFilter.vue';
import FontBakeryReport from '@/components/FontBakeryReport.vue';

// Load the initial Font Bakery data into the store
const fontBakeryDataStore = useFontBakeryData();
onServerPrefetch(fontBakeryDataStore.fetchFontBakeryData);
onMounted(fontBakeryDataStore.fetchFontBakeryData);
</script>

<template>
    <main>
        <FontBakeryReport />
    </main>

    <nav>
        <FontBakeryStatusFilter />
        <FontBakerySectionFilter />
    </nav>
</template>

<style scoped></style>
