import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "default",
      component: () => import("@/views/TodoList.vue"),
    },
    {
      path: "/todos/new",
      name: "new-todo",
      component: () => import("@/views/NewTodo.vue"),
    },
    {
      path: "/todos/:id/edit",
      name: "edit-todo",
      component: () => import("@/views/EditTodo.vue"),
    },
  ],
});

export default router;
