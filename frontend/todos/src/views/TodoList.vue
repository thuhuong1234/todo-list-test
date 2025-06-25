<template>
    <default-layout>
        <div class="container">
            <page-header title="Danh sách công việc">
                <template #btn>
                    <div class="btn" @click="reload"> <img src="@/assets/images/32-reload-3.svg" alt="Reload"></div>
                    <div class="btn" @click="createTodo"> <img src="@/assets/images/32-c-add-3.svg" alt="Add"> Thêm công
                        việc</div>
                </template>
            </page-header>
            <div class="line"> </div>
            <todo-list :todos="todos" @edit="handleEdit" @delete="handleDelete" />
        </div>
    </default-layout>
</template>

<script setup>
import DefaultLayout from '@/DefaultLayout.vue';
import PageHeader from '@/components/PageHeader.vue';
import TodoList from '@/views/components/TodoList.vue';
import { onMounted, ref } from 'vue';
import axios from '@/configs/axios';
import { useRouter } from 'vue-router';
import { showToast, showConfirmDialog } from '@/helpers/sweetalertHelper.js';

const router = useRouter();

const todos = ref([]);
const getTodos = async () => {
    try {
        const response = await axios.get("/todos");
        todos.value = response.data.todos;
    } catch (error) {
        console.error("Lỗi:", error);
    }
}
const reload = () => window.location.reload();
const createTodo = () => router.push({ name: "new-todo" });
const handleEdit = (id) => router.push({ name: "edit-todo", params: { id } });
const handleDelete = async (id) => {
    try {
        const confirm = await showConfirmDialog("Xóa", "Bạn có chắc chắn muốn xóa");
        if (!confirm) return;
        await axios.delete(`/todos/${id}`);
        showToast("Xóa công việc", "success");
        getTodos();
    } catch (error) {
        console.error("Lỗi:", error);
    }
}
onMounted(() => {
    getTodos();
})
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

.line {
    width: 100%;
    height: 3px;
    background-color: white;
}
</style>