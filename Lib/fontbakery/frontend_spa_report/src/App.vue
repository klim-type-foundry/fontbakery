<script setup lang="ts">
import { onServerPrefetch, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useFontBakeryData } from '@/stores/useFontBakeryData';
import CheckStatusFilter from '@/components/CheckStatusFilter.vue';

const fontBakeryDataStore = useFontBakeryData();
const { result: fontBakeryResults, sections: fontBakerySections } =
    storeToRefs(fontBakeryDataStore);

const loadFontBakeryData = async () => {
    await fontBakeryDataStore.fetchFontBakeryData();
};
onServerPrefetch(loadFontBakeryData);
onMounted(() => {
    loadFontBakeryData();
});
</script>

<template>
    <header>
        <div class="wrapper">
            <div>
                <h1>Font Bakery report</h1>
                <div class="ikon">× + ⤓ ○ ◉ ⊖ □ ☑ ⊟ ↑ → ▼ ▲ ◑ ⇗ ⭯ ⭍</div>
                <CheckStatusFilter />
                <h3>{{ fontBakerySections }}</h3>
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
