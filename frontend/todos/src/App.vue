<script setup>
import AppHeader from "@/components/Header.vue";
import AppMain from "@/components/AppMain.vue";
</script>

<template>
  <div class="todo-list-dashboard">
    <AppHeader />
    <AppMain />
  </div>

</template>

<style lang="scss" scoped>
.todo-list-dashboard {
  width: 100%;
  height: 100vh;
  background: linear-gradient(#003DA1, #a2d6ec);
}
</style>
