<template>
  <default-layout>
    <div class="container">
      <page-header title="Thêm công việc">
        <template #btn>
          <div class="btn" @click="reload"> <img src="@/assets/images/32-reload-3.svg" alt="Reload">
          </div>
          <div class="btn" @click="back"> <img src="@/assets/images/32-circle-arrow-left-3.svg" alt="Back">Trở về
          </div>
        </template>
      </page-header>
      <todo-form :todo="values" @save="onSubmit" :errors="errors" @cancel="resetForm" />

    </div>
  </default-layout>
</template>

<script setup>
import DefaultLayout from '@/DefaultLayout.vue';
import PageHeader from '@/components/PageHeader.vue';
import TodoForm from '@/views/components/TodoForm.vue';
import axios from '@/configs/axios';
import * as yup from 'yup';
import { useForm } from 'vee-validate';

const schema = yup.object({
  title: yup.string().required('Tiêu đề không được để trống'),
  due_date: yup.date().
    transform((value, originalValue) => {
      return originalValue === '' ? null : value;
    })
    .required('Ngày hết hạn không được để trống')
    .typeError('Ngày hết hạn không hợp lệ'),
})
const { handleSubmit, resetForm, values, errors } = useForm({
  validationSchema: schema,
  initialValues: {
    title: '',
    description: '',
    due_date: '',
    is_completed: 0
  }
});
const onSubmit = handleSubmit(async (values) => {
  try {
    console.log(values);

    const response = await axios.post("/todos", values);
    if (response.data) {
      console.log("Todo created successfully");
    }
    resetForm();
  } catch (error) {
    console.error("Lỗi:", error);
  }
});

const reload = () => window.location.reload();
const back = () => window.history.back();

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