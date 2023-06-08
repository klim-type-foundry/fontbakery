<script setup lang="ts">
defineProps<{
    msg: string;
}>();
</script>

<template>
    <div class="greetings">
        <h1 class="green">{{ msg }}</h1>
        <h2>Söhne</h2>
        <h3>Söhne</h3>
        <div class="ikon">× + ⤓ ○ ◉ ⊖ □ ☑ ⊟ ↑ → ▼ ▲ ◑ ⇗ ⭯ ⭍</div>
    </div>
</template>

<style scoped>
.greetings h1,
.greetings h3 {
    text-align: center;
}

.ikon {
    font-family: SoehneIkon;
}

@media (min-width: 1024px) {
    .greetings h1,
    .greetings h3 {
        text-align: left;
    }
}
</style>
