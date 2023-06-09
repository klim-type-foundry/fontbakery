<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useFontBakeryData } from '@/stores/useFontBakeryData';
import formatFontBakeryKey from '@/utils/formatFontBakeryKey';
import FontBakeryResultStatuses from '@/components/FontBakeryResultStatuses.vue';
import formatHtmlIdFromFontBakeryKey from '@/utils/formatHtmlIdFromFontBakeryKey';

const fontBakeryDataStore = useFontBakeryData();
const { sections: fontBakerySections } = storeToRefs(fontBakeryDataStore);
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
    </ul>
</template>

<style scoped></style>
