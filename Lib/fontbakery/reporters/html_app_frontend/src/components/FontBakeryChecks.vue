<script setup lang="ts">
import FontBakeryCheckResult from '@/components/FontBakeryCheckResult.vue';
import { computed } from 'vue';
import formatFontBakeryCheckId from '../utils/formatFontBakeryCheckId';
import sortChecksByFilename from '@/utils/sortChecksByFilename';
import formatFontBakeryMessage from '@/utils/formatFontBakeryMessage';

const props = defineProps<{
    checks: FontBakeryCheck[];
}>();

interface ChecksById {
    id: string;
    description: string;
    rationale?: string;
    checks: FontBakeryCheck[];
}

const checksById = computed(() => {
    const groupedChecks: ChecksById[] = [];
    props.checks.forEach((check) => {
        const checkId = check.key[1] || 'N/A';
        // Check if there's already an entry for this check ID
        let checksGroup: ChecksById | undefined = groupedChecks.find(
            (groupedCheck) => groupedCheck.id === checkId,
        );
        const needToAppend = checksGroup === undefined;
        if (!checksGroup) {
            checksGroup = {
                id: checkId,
                description: check.description,
                rationale: check.rationale?.trim(),
                checks: [],
            };
        }
        // Add check
        checksGroup.checks.push(check);
        // Append if needed
        if (needToAppend) {
            groupedChecks.push(checksGroup);
        }
    });
    // Sort checks by filename
    groupedChecks.forEach((groupedCheck) => groupedCheck.checks.sort(sortChecksByFilename));
    return groupedChecks;
});
</script>

<template>
    <template v-for="checkById in checksById" :key="checkById.id">
        <h3>{{ checkById.description }}</h3>
        <p>
            <code>ID: {{ formatFontBakeryCheckId(checkById.id) }}</code>
        </p>
        <details v-if="checkById.rationale" class="fontBakeryMessage rationale">
            <summary>Rationale</summary>
            <div v-html="formatFontBakeryMessage(checkById.rationale)"></div>
        </details>
        <FontBakeryCheckResult
            v-for="fontBakeryCheck in checkById.checks"
            :check="fontBakeryCheck"
            :key="fontBakeryCheck.key[0]"
        />
    </template>
</template>

<style scoped></style>
