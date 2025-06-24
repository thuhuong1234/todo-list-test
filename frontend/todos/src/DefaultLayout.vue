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
    height: 100vh;
    background: linear-gradient(#003DA1, #a2d6ec);
}
</style>
