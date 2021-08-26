import { createRouter, createWebHistory } from "vue-router";
import MerchantList from "../views/MerchantList.vue";

const routes = [
  {
    path: "/",
    name: "MerchantList",
    component: MerchantList,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
