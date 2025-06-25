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
            <div class="toolbar">
                <div class="search-bar"> <img width="20px" src="@/assets/images/32-zoom-3.svg" alt="Search">
                    <input type="text" v-model="search" @input="handleSearchInput" placeholder="Tìm kiếm..." />
                </div>
                <select v-model="isCompleted" @change="page = 1; getTodos()">
                    <option selected value="">Tất cả</option>
                    <option value="0">Chưa hoàn thành</option>
                    <option value="1">Đã hoàn thành</option>
                </select>
            </div>
            <todo-list :todos="todos" @edit="handleEdit" @delete="handleDelete" />
            <div class="pagination">
                <button :disabled="page === 1" @click="page--; getTodos()"><img src='@/assets/images/24-left-arrow.svg'
                        alt="Previous"></button>
                <span>Trang {{ page }} / {{ totalPages }}</span>
                <button :disabled="page >= totalPages" @click="page++; getTodos()"><img
                        src='@/assets/images/24-right-arrow.svg' alt="Previous"></button>
            </div>
        </div>
    </default-layout>
</template>

<script setup>
import DefaultLayout from '@/DefaultLayout.vue';
import PageHeader from '@/components/PageHeader.vue';
import TodoList from '@/views/components/TodoList.vue';
import { onMounted, ref, computed, watch } from 'vue';
import axios from '@/configs/axios';
import { useRouter } from 'vue-router';
import { showToast, showConfirmDialog } from '@/helpers/sweetalertHelper.js';
import { debounce } from 'lodash';
const router = useRouter();

const todos = ref([]);
const total = ref(0);
const page = ref(1);
const limit = ref(6);
const search = ref("");
const totalPages = computed(() => Math.ceil(total.value / limit.value));
const isCompleted = ref("");
const getTodos = async () => {
    try {
        const response = await axios.get("/todos", {
            params: {
                page: page.value,
                limit: limit.value,
                search: search.value,
                is_completed: isCompleted.value
            }
        });
        todos.value = response.data.todos;
        total.value = response.data.total;
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
const handleSearchInput = debounce(() => {
    page.value = 1;
    getTodos();
}, 100);

watch([page, limit], () => {
    getTodos();
});
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

.pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;

    button {
        padding: 6px 12px;
        border-radius: 5px;
        border: 1px solid #ccc;
        background: white;
        cursor: pointer;

        &:disabled {
            opacity: 0.4;
            cursor: not-allowed;
        }
    }

    span {
        color: white;
        font-weight: bold;
    }
}

.toolbar {
    padding: 10px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .search-bar {
        display: flex;
        align-items: center;
        gap: 10px;
        background-color: #FFFFFF;
        border-radius: 6px;
        max-width: 300px;
        padding: 2px 10px;
    }

    input {
        width: 100%;
        padding: 10px;
        border: none;
    }

    select {
        padding: 10px;
        border: none;
        border-radius: 6px;
    }
}
</style>