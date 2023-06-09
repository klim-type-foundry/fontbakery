<script setup lang="ts">
import FontBakeryCheckLog from '@/components/FontBakeryCheckLog.vue';
import formatFontBakeryStatus from '../utils/formatFontBakeryStatus';

defineProps<{
    check: FontBakeryCheck;
}>();
</script>

<template>
    <li>
        <code
            >{{ check.filename ? check.filename : 'Family check' }} —
            {{ formatFontBakeryStatus(check.result) }}</code
        >
    </li>
    <!--    <p v-if="check.rationale">{{ check.rationale }}</p>-->
    <!--    <FontBakeryCheckLog-->
    <!--        v-for="logEntry in check.logs"-->
    <!--        :log-entry="logEntry"-->
    <!--        :key="logEntry.message"-->
    <!--    />-->
</template>
