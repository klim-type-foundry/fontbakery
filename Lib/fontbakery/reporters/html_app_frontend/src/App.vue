<script setup lang="ts">
import { onServerPrefetch, onMounted } from 'vue';
import { useFontBakeryData } from '@/stores/useFontBakeryData';
import AppNav from '@/components/AppNav.vue';
import AppContent from '@/components/AppContent.vue';

// Load the initial Font Bakery data into the store
const fontBakeryDataStore = useFontBakeryData();
onServerPrefetch(fontBakeryDataStore.fetchFontBakeryData);
onMounted(fontBakeryDataStore.fetchFontBakeryData);
</script>

<template>
    <!--
    We have a separate container for the background,
    as .gridContainer is baseline-aligned, but we want
    the nav background to go all the way to the top of
    the viewport.
    -->
    <div class="backgroundContainer">
        <div />
        <div class="backgroundNav" />
    </div>
    <div class="gridContainer">
        <AppContent />
        <AppNav />
    </div>
</template>

<style scoped></style>
