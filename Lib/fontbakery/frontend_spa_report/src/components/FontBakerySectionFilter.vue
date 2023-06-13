<script setup lang="ts">
import { storeToRefs } from 'pinia';
import type { Events } from 'vue';
import { useFontBakeryData } from '@/stores/useFontBakeryData';
import formatFontBakeryKey from '@/utils/formatFontBakeryKey';
import FontBakeryResultStatuses from '@/components/FontBakeryResultStatuses.vue';
import formatHtmlIdFromFontBakeryKey from '@/utils/formatHtmlIdFromFontBakeryKey';

const fontBakeryDataStore = useFontBakeryData();
const { sections: fontBakerySections, filters: fontBakeryFilters } =
    storeToRefs(fontBakeryDataStore);

function toggleSelection(event: Events['onClick']) {
    event.preventDefault();
    if (
        fontBakeryFilters.value.sectionKey.length === Object.keys(fontBakerySections.value).length
    ) {
        fontBakeryDataStore.setSectionKeyFilter([]);
    } else {
        fontBakeryDataStore.setSectionKeyFilter(
            fontBakerySections.value.map((fontBakerySection) => fontBakerySection.key[0]),
        );
    }
}
</script>

<template>
    <h3>Sections</h3>
    <ul>
        <template v-for="fontBakerySection in fontBakerySections" :key="fontBakerySection.key[0]">
            <li>
                <input
                    type="checkbox"
                    :value="fontBakerySection.key[0]"
                    v-model="fontBakeryDataStore.filters.sectionKey"
                />{{ ` ` }}
                <a :href="`#${formatHtmlIdFromFontBakeryKey(fontBakerySection.key)}`">{{
                    formatFontBakeryKey(fontBakerySection.key)
                }}</a
                ><br />
                <FontBakeryResultStatuses :statuses="fontBakerySection.result" />
            </li>
        </template>
        <li class="toggleSelection"><button @click="toggleSelection">Toggle all</button></li>
    </ul>
</template>

<style scoped></style>
