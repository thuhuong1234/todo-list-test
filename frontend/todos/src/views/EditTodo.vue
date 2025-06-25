<template>
    <default-layout>
        <div class="container">
            <page-header title="Chỉnh sửa công việc">
                <template #btn>
                    <div class="btn" @click="goBack">
                        <img src="@/assets/images/32-circle-arrow-left-3.svg" alt="Back"> Trở về
                    </div>
                </template>
            </page-header>

            <todo-form :todo="values" :errors="errors" @save="onSubmit" @cancel="goBack" :isEdit="true" />
        </div>
    </default-layout>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from '@/configs/axios';
import { useForm } from 'vee-validate';
import * as yup from 'yup';
import { showToast } from '@/helpers/sweetalertHelper.js';

import DefaultLayout from '@/DefaultLayout.vue';
import PageHeader from '@/components/PageHeader.vue';
import TodoForm from '@/views/components/TodoForm.vue';

const route = useRoute();
const router = useRouter();
const todoId = route.params.id;

const schema = yup.object({
    title: yup.string().required('Tiêu đề không được để trống'),
    due_date: yup
        .date()
        .transform((value, originalValue) => (originalValue === '' ? null : value))
        .required('Ngày hết hạn không được để trống')
        .typeError('Ngày hết hạn không hợp lệ'),
});

const { handleSubmit, setValues, values, errors } = useForm({
    validationSchema: schema,
    initialValues: {
        title: '',
        description: '',
        due_date: '',
        is_completed: 0
    }
});
const goBack = () => router.back();

const onSubmit = handleSubmit(async (formValues) => {
    try {
        await axios.put(`/todos/${todoId}`, formValues);
        showToast('Cập nhật thành công', 'success');
    } catch (error) {
        showToast('Cập nhật thất bại', 'error');
    }
});

onMounted(async () => {
    try {
        const res = await axios.get(`/todos/${todoId}`);
        const todo = res.data[0];
        setValues({
            title: todo.title,
            due_date: todo.due_date?.substring(0, 10),
            description: todo.description,
            is_completed: todo.is_completed,
        });
    } catch (e) {
        showToast('Không tìm thấy công việc', 'error');
        router.push('/');
    }
});
</script>

<style scoped lang="scss">
.btn {
    display: flex;
    align-items: center;
    border: 1px solid #cbcbcb;
    background-color: #fff;
    color: #2f6ab7;
    border-radius: 7px;
    padding: 8px;
    font-weight: bold;
    font-size: 14px;
    gap: 10px;
    cursor: pointer;
}
</style>
