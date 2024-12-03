import { createRouter, createWebHistory } from 'vue-router'
import Login from "@/components/Login.vue";
import ProtectedPage from "@/components/ProtectedPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/login', component: Login},
    {path: '/protected', component: ProtectedPage}
  ],
})

export default router
