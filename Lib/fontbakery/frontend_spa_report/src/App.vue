<script setup lang="ts">
import { onServerPrefetch, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useFontBakeryData } from '@/stores/useFontBakeryData';
import CheckStatusFilter from '@/components/CheckStatusFilter.vue';

// Load the initial Font Bakery data into the store
const fontBakeryDataStore = useFontBakeryData();
onServerPrefetch(fontBakeryDataStore.fetchFontBakeryData);
onMounted(fontBakeryDataStore.fetchFontBakeryData);

// Debug output
const { sections: fontBakerySections } = storeToRefs(fontBakeryDataStore);
</script>

<template>
    <header>
        <div class="wrapper">
            <div>
                <h1>Font Bakery report</h1>
                <div class="ikon">× + ⤓ ○ ◉ ⊖ □ ☑ ⊟ ↑ → ▼ ▲ ◑ ⇗ ⭯ ⭍</div>
                <CheckStatusFilter />
                <pre>{{ fontBakerySections }}</pre>
            </div>
        </div>
    </header>

    <main>TODO</main>
</template>

<style scoped>
header {
    line-height: 1.5;
}

@media (min-width: 1024px) {
    header {
        display: flex;
        place-items: center;
        padding-right: calc(var(--section-gap) / 2);
    }

    header .wrapper {
        display: flex;
        place-items: flex-start;
        flex-wrap: wrap;
    }
}
</style>
