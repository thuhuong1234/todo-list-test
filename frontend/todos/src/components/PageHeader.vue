<template>
    <div class="action-toolbar">
        <div class="toolbar-title">
            {{ title }}
        </div>
        <div class="toolbar-buttons">
            <slot name="btn" />
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        required: true,
    },
});
</script>

<style scoped lang="scss">
.action-toolbar {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 10px 40px;
    gap: 16px;

    .toolbar-title {
        font-size: 20px;
        font-weight: bold;
    }

    .search-box {
        display: flex;
        align-items: center;
        border: 1px solid #ccc;
        border-radius: 6px;
        padding: 6px 10px;
        background-color: #fff;
        width: 100%;
        max-width: 300px;

        .search-icon {
            color: #666;
            margin-right: 8px;
        }

        input {
            border: none;
            outline: none;
            flex: 1;
            font-size: 14px;
        }
    }

    .toolbar-buttons {
        display: flex;
        gap: 12px;
        flex-wrap: wrap;
    }
}
</style>
