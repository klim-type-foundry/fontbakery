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
    <AppContent />
    <AppNav />
</template>

<style scoped></style>
