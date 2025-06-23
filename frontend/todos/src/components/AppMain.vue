<template>
    <div class="container">
        <div class="sessions-header">
            <span class="sessions-title">Danh sách công việc</span>
            <div class="sessions-menu">
                <div class="search-input"> <input type="text" placeholder="Tìm kiếm"> </div>
                <div class="add-btn"> + Thêm công việc </div>
            </div>
        </div>
        <div class="line"></div>
        <div class="session-list"> </div>

    </div>

</template>

<script setup>
import { onMounted, ref } from "vue";
import axios from "@/configs/axios.js";
const todos = ref([]);
const getTodos = async () => {
    try {
        const response = await axios.get("/todos");
        todos.value = response.data.todos;
    } catch (error) {
        console.error(error);
    }
}
onMounted(() => {
    getTodos();
})
</script>

<style lang="scss" scoped>
.sessions-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 8px 40px;

    .sessions-menu {
        display: flex;
        align-items: center;
        gap: 10px;

        .search-input {
            input {
                border: 1px solid #cbcbcb;
                border-radius: 7px;
                padding: 8px;
                font-size: 13px;
            }
        }

        .add-btn {
            border: 1px solid #cbcbcb;
            border-radius: 7px;
            padding: 8px;
            font-weight: bold;
            font-size: 13px;
            cursor: pointer;
        }
    }
}

</style>