import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "@/components/HomePage.vue";
import QuizeView from "@/components/QuizeView.vue";
import NotFoundView from "@/components/NotFoundView.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      // ":" used to be dynamic
      path: "/quiz/:id",
      name: "quiz",
      component: QuizeView,
    },

    {
      path: "/:catchall(.*)*",
      name: "Not Found",
      component: NotFoundView,
    },
  ],
});

export default router;
