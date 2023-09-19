import { createRouter, createWebHistory } from 'vue-router'
import TodoList from "../components/TodoList.vue";
import About from "../components/About.vue";

const routes = [
    { path: '/', component: TodoList },
    { path: '/about', component: About },
    { path: '/cabinet', component: () => import(/* webpackChunkName: "about" */ '../components/Cabinet.vue') },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
