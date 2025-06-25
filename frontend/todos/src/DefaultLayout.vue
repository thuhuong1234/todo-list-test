<script setup>
import AppHeader from '@/components/Header.vue';
import AppFooter from '@/components/Footer.vue';
</script>

<template>
    <div class="default-layout">
        <app-header />
        <main class="app-main">
            <slot />
        </main>
        <app-footer />
    </div>

</template>

<style lang="scss" scoped>
.default-layout {
    width: 100%;
    background: linear-gradient(#003DA1, #a2d6ec);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    .app-main {
        flex: 1;
    }
}
</style>
