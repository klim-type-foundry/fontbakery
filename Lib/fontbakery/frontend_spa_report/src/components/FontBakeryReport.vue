<script setup lang="ts">
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useFontBakeryData } from '@/stores/useFontBakeryData';
import formatFontBakeryKey from '@/utils/formatFontBakeryKey';
import FontBakeryResultStatuses from '@/components/FontBakeryResultStatuses.vue';
import FontBakeryCheckResult from '@/components/FontBakeryCheckResult.vue';

const fontBakeryDataStore = useFontBakeryData();
const { sections: fontBakerySections, filters: fontBakeryFilters } =
    storeToRefs(fontBakeryDataStore);

const filteredSections = computed(() => {
    return [...fontBakerySections.value].filter((section) =>
        fontBakeryFilters.value.sectionKey.includes(section.key[0]),
    );
});
</script>

<template>
    <h1>Font Bakery report</h1>
    <template v-for="fontBakerySection in filteredSections" :key="fontBakerySection.key">
        <h2>{{ formatFontBakeryKey(fontBakerySection.key) }}</h2>
        <FontBakeryResultStatuses :statuses="fontBakerySection.result" />
        <div class="check-contents">
            <FontBakeryCheckResult
                v-for="fontBakeryCheck in fontBakerySection.checks"
                :check="fontBakeryCheck"
                :key="fontBakeryCheck.key"
            />
        </div>
    </template>
</template>

<style scoped>
.check-contents {
    padding-left: 2rem;
}
</style>
