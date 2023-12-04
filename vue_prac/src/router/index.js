import { createRouter, createWebHistory } from "vue-router";

// 라우터 설계
const routes = [{ path: "/", component: import("@/views/HomeView.vue") }];

// 라우터 생성
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 라우터 추출 (main.js에서 import)
export { router };
