<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    todos: {
        type: Array,
        required: true
    }
})
const formatDate = (date) => new Date(date).toLocaleDateString();
const emit = defineEmits(['edit', 'delete']);
</script>

<template>
    <div class="todo-list">
        <div class="todo-grid">
            <div v-for="todo in todos" :key="todo.id" class="todo-card" :class="{ done: todo.is_completed }">
                <div class="todo-header">
                    <span class="status" :class="todo.is_completed ? 'completed' : 'pending'">
                        {{ todo.is_completed ? 'Đã hoàn thành' : 'Chưa hoàn thành' }}
                    </span>
                    <div class="actions">
                        <button class="btn btn-edit" @click="$emit('edit', todo.id)">
                            <img src="@/assets/images/32-edit-3.svg" alt="Edit"></button>
                        <button class="btn btn-delete" @click="$emit('delete', todo.id)">
                            <img src=" @/assets/images/32-trash-can-3.svg" alt="Delete"></button>
                    </div>
                </div>
                <p class="title" :class="{ completed: todo.is_completed, pending: !todo.is_completed }">Công việc: {{
                    todo.title ||
                    'Không có mô tả' }}</p>
                <p class="description">{{ todo.description || 'Không có mô tả' }}</p>
                <div class="dates">
                    <p class="due-date" :class="{ completed: todo.is_completed, pending: !todo.is_completed }">Hạn: {{
                        formatDate(todo.due_date) }}</p>
                    <p class="updated-at">
                        Cập nhật: {{ formatDate(todo.updated_at) }}
                    </p>
                </div>


            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.todo-list {
    padding: 2rem;

    .todo-title {
        font-size: 24px;
        font-weight: 700;
        margin-bottom: 1.5rem;
        color: #003DA1;
    }

    .todo-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 20px;
    }

    .todo-card {
        background: #fff;
        border-radius: 12px;
        padding: 1.2rem;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
        border-left: 6px solid #ee3672;
        transition: all 0.3s ease;

        &.done {
            border-color: #4caf50;
        }

        .todo-header {
            display: flex;
            justify-content: space-between;
            align-items: center;

            h3 {
                font-size: 18px;
                margin: 0;
            }

            .status {
                padding: 4px 10px;
                border-radius: 999px;
                font-size: 12px;
                font-weight: 600;

                &.completed {
                    background: #d4edda;
                    color: #2e7d32;
                }

                &.pending {
                    background: #ffdede;
                    color: #c62828;
                }
            }
        }

        .title {
            color: #555;
            font-weight: 600;
            margin: 0.5rem 0;
            cursor: pointer;

            &:hover {
                text-decoration: underline;
            }

            &.completed:hover {
                color: #2e7d32;

                i {
                    color: #2e7d32;
                }
            }

            &.pending:hover {
                color: #c62828;

                i {
                    color: #c62828;
                }
            }
        }

        .description {
            margin: 0.5rem 0;
            color: #555;
            font-style: italic;
            font-size: 17px;
        }

        .dates {
            display: flex;
            justify-content: space-between;
            margin-bottom: 0;

            .due-date {
                font-size: 14px;
                color: #888;
                font-weight: 600;

                &.completed {
                    color: #2e7d32;
                }

                &.pending {
                    color: #c62828;
                }
            }

            .updated-at {
                font-size: 14px;
                color: #888;
            }
        }


        .actions {
            display: flex;
            align-items: center;
            justify-items: flex-end;
            gap: 10px;

            .btn {
                flex: 1;
                padding: 6px 10px;
                border-radius: 8px;
                font-weight: bold;
                font-size: 14px;
                cursor: pointer;
                transition: background 0.3s;
                border: #1976d2 1px solid;
                background-color: transparent;

                &:hover {
                    background: #F0F0F0;
                }
            }
        }
    }
}
</style>
