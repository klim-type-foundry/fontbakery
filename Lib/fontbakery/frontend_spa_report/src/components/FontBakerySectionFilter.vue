<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useFontBakeryData } from '@/stores/useFontBakeryData';
import formatFontBakeryKey from '@/utils/formatFontBakeryKey';
import FontBakeryResultStatuses from '@/components/FontBakeryResultStatuses.vue';

const fontBakeryDataStore = useFontBakeryData();
const { sections: fontBakerySections } = storeToRefs(fontBakeryDataStore);
</script>

<template>
    <h3>Sections</h3>
    <ul>
        <template v-for="fontBakerySection in fontBakerySections" :key="fontBakerySection.key[0]">
            <li>
                <label>
                    <input
                        type="checkbox"
                        :value="fontBakerySection.key[0]"
                        v-model="fontBakeryDataStore.filters.sectionKey"
                    />
                    {{ formatFontBakeryKey(fontBakerySection.key) }}<br />
                    <FontBakeryResultStatuses :statuses="fontBakerySection.result" />
                </label>
            </li>
        </template>
    </ul>
</template>

<style scoped></style>
