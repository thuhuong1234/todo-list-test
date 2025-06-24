<template>
    <default-layout>
        <div class="container">
            <page-header title="Danh sách công việc">
                <template #btn>
                    <div class="btn"> <img src="@/assets/images/32-reload-3.svg" alt="Reload"></div>
                    <div class="btn"> <img src="@/assets/images/32-c-add-3.svg" alt="Add"> Thêm công việc</div>
                </template>
            </page-header>
        </div>
    </default-layout>
</template>

<script setup>
import DefaultLayout from '@/DefaultLayout.vue';
import PageHeader from '@/components/PageHeader.vue';
</script>

<style lang="scss" scoped>
.btn {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #cbcbcb;
    background-color: #FFFFFF;
    color: #2f6ab7;
    border-radius: 7px;
    padding: 8px;
    font-weight: bold;
    font-size: 14px;
    gap: 10px;
    cursor: pointer;
}

</style>