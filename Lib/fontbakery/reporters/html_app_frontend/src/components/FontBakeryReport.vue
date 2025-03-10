<script setup lang="ts">
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useFontBakeryData } from '@/stores/useFontBakeryData';
import formatFontBakeryKey from '@/utils/formatFontBakeryKey';
import FontBakeryResultStatuses from '@/components/FontBakeryResultStatuses.vue';
import formatHtmlIdFromFontBakeryKey from '@/utils/formatHtmlIdFromFontBakeryKey';
import FontBakeryChecks from '@/components/FontBakeryChecks.vue';
import getFontTypeFromFilePath from '@/utils/getFontTypeFromFilePath';
import formatOutputFileToTitle from '@/utils/formatOutputFileToTitle';
import formatIsoDateTime from '@/utils/formatIsoDateTime';

const fontBakeryDataStore = useFontBakeryData();
const {
    sections: fontBakerySections,
    filters: fontBakeryFilters,
    outputFile,
    datetime: reportDateTime,
} = storeToRefs(fontBakeryDataStore);

const filteredSections = computed(() => {
    return [...fontBakerySections.value].filter((section) =>
        fontBakeryFilters.value.sectionKey.includes(section.key[0]),
    );
});
const formattedDate = computed(() => formatIsoDateTime(reportDateTime.value));
</script>

<template>
    <h1>{{ formatOutputFileToTitle(outputFile) }}</h1>
    <div class="reportDateTime" :title="`Report generated ${formattedDate}`">
        Generated {{ formattedDate }}
    </div>
    <template v-for="fontBakerySection in filteredSections" :key="fontBakerySection.key">
        <h2 :id="formatHtmlIdFromFontBakeryKey(fontBakerySection.key)">
            {{ formatFontBakeryKey(fontBakerySection.key) }}
        </h2>
        <FontBakeryResultStatuses :statuses="fontBakerySection.result" />
        <FontBakeryChecks
            :checks="
                fontBakerySection.checks.filter(
                    (check) =>
                        fontBakeryFilters.status.includes(check.result) &&
                        fontBakeryFilters.fontType.includes(
                            getFontTypeFromFilePath(check.filename),
                        ),
                )
            "
        />
        <hr />
    </template>
</template>

<style scoped></style>
