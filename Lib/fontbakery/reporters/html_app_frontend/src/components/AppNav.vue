<script setup lang="ts">
import FontBakerySectionFilter from '@/components/FontBakerySectionFilter.vue';
import FontBakeryStatusFilter from '@/components/FontBakeryStatusFilter.vue';
import FontBakeryFontTypeFilter from '@/components/FontBakeryFontTypeFilter.vue';
</script>

<template>
    <nav>
        <FontBakeryStatusFilter />
        <FontBakeryFontTypeFilter />
        <FontBakerySectionFilter />
    </nav>
</template>

<style scoped></style>
