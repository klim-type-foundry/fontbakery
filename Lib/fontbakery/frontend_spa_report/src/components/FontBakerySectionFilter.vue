<script setup lang="ts">
import { storeToRefs } from 'pinia';
import type { Events } from 'vue';
import { useFontBakeryData } from '@/stores/useFontBakeryData';
import formatFontBakeryKey from '@/utils/formatFontBakeryKey';
import FontBakeryResultStatuses from '@/components/FontBakeryResultStatuses.vue';
import formatHtmlIdFromFontBakeryKey from '@/utils/formatHtmlIdFromFontBakeryKey';
import { IkonType } from '@/Settings';

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
    <div class="filterContainer">
        <h3>Sections</h3>
        <ul class="filterList sectionFilter">
            <template
                v-for="fontBakerySection in fontBakerySections"
                :key="fontBakerySection.key[0]"
            >
                <li>
                    <label title="Toggle section visibility">
                        <input
                            type="checkbox"
                            :value="fontBakerySection.key[0]"
                            v-model="fontBakeryDataStore.filters.sectionKey"
                        />{{ ` ` }}{{ formatFontBakeryKey(fontBakerySection.key) }}</label
                    >{{ ` ` }}
                    <a
                        :href="`#${formatHtmlIdFromFontBakeryKey(fontBakerySection.key)}`"
                        :title="`Jump to section: ${formatFontBakeryKey(fontBakerySection.key)}`"
                        class="ikon"
                        >{{ IkonType.JUMP_BACK }}</a
                    ><br />
                    <FontBakeryResultStatuses :statuses="fontBakerySection.result" />
                </li>
            </template>
            <li class="toggleSelection"><button @click="toggleSelection">Toggle all</button></li>
        </ul>
    </div>
</template>

<style scoped></style>
