<script setup>
import { useField } from 'vee-validate';

const emit = defineEmits(['save', 'cancel']);

const { value: title, errorMessage: titleError } = useField('title');
const { value: dueDate, errorMessage: dueDateError } = useField('due_date');
const { value: description } = useField('description');
const { value: isCompleted } = useField('is_completed');
</script>

<template>
    <div class="todo-form">
        <div class="title">
            <img width="20px" src="@/assets/images/32-c-warning-3.svg" alt="Add" />
            Thêm công việc
        </div>

        <form @submit.prevent="emit('save')">
            <div class="form-grid">
                <div class="form-group">
                    <label>Tiêu đề công việc *</label>
                    <input type="text" v-model="title" placeholder="Nhập tiêu đề công việc" />
                    <span class="error" v-if="titleError">{{ titleError }}</span>
                </div>

                <div class="form-group">
                    <label>Ngày hết hạn *</label>
                    <input type="date" v-model="dueDate" />
                    <span class="error" v-if="dueDateError">{{ dueDateError }}</span>
                </div>

                <div class="form-group">
                    <label>Mô tả</label>
                    <textarea v-model="description" placeholder="Mô tả công việc..."></textarea>
                </div>

                <div class="form-group">
                    <label>Trạng thái</label>
                    <select v-model="isCompleted">
                        <option :value="0">Chưa hoàn thành</option>
                        <option :value="1">Hoàn thành</option>
                    </select>
                </div>
            </div>

            <div class="form-actions">
                <button type="submit" class="btn btn-primary">Lưu</button>
                <button type="button" class="btn btn-cancel" @click="$emit('cancel')">Hủy</button>
            </div>
        </form>
    </div>
</template>

<style scoped lang="scss">
.todo-form {
    background: #fff;
    padding: 8px 40px;
    margin: 8px 40px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

    .title {
        font-size: 1.4rem;
        margin-bottom: 1.5rem;
        color: black;
        font-weight: 700;
        display: flex;
        align-items: center;
        justify-content: start;
    }

    .form-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;

        .form-group {
            display: flex;
            flex-direction: column;
            color: #616161;

            label {
                font-weight: 600;
                margin-bottom: 6px;
                font-size: 19px;
                color: #333;
            }

            input,
            textarea,
            select {
                padding: 8px 12px;
                border-radius: 6px;
                border: 1px solid #ccc;
                font-size: 18px;
                color: #616161;

                &:focus {
                    border-color: #1976d2;
                    outline: none;
                }
            }

            textarea {
                resize: vertical;
                min-height: 60px;
                font-size: 18px;
                color: #616161;
            }

            .error {
                color: #c62828;
                font-size: 15px;
                margin-top: 4px;
            }

            &.full {
                grid-column: span 2;
            }
        }
    }

    .form-actions {
        display: flex;
        justify-content: center;
        gap: 12px;
        margin-top: 2rem;

        .btn {
            padding: 10px 20px;
            font-size: 14px;
            border-radius: 8px;
            border: none;
            cursor: pointer;
            transition: 0.2s ease-in-out;

            &.btn-primary {
                background-color: #1976d2;
                color: white;

                &:hover {
                    background-color: #0d47a1;
                }
            }

            &.btn-cancel {
                background-color: #e0e0e0;
                color: #333;

                &:hover {
                    background-color: #bdbdbd;
                }
            }
        }
    }
}
</style>
