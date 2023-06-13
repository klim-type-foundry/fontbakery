<script setup lang="ts">
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useFontBakeryData } from '@/stores/useFontBakeryData';
import formatFontBakeryKey from '@/utils/formatFontBakeryKey';
import FontBakeryResultStatuses from '@/components/FontBakeryResultStatuses.vue';
import formatHtmlIdFromFontBakeryKey from '@/utils/formatHtmlIdFromFontBakeryKey';
import FontBakeryChecks from '@/components/FontBakeryChecks.vue';

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
        <h2 :id="formatHtmlIdFromFontBakeryKey(fontBakerySection.key)">
            {{ formatFontBakeryKey(fontBakerySection.key) }}
        </h2>
        <FontBakeryResultStatuses :statuses="fontBakerySection.result" />
        <FontBakeryChecks
            :checks="
                fontBakerySection.checks.filter((check) =>
                    fontBakeryFilters.status.includes(check.result),
                )
            "
        />
        <hr />
    </template>
</template>

<style scoped></style>
