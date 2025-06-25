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
      path: "/new-todo",
      name: "new-todo",
      component: () => import("@/views/NewTodo.vue"),
    },
  ],
});

export default router;
