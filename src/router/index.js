import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/modules/homepage/views/HomePage.vue";
import RouteListsPage from "@/modules/runRoutes/views/RouteListsPage.vue";
import RouteDetailPage from "@/modules/runRoutes/views/RouteDetailPage.vue";
import RouteAddPage from "@/modules/runRoutes/views/RouteAddPage.vue";

const routes = [
  { path: "/", component: HomePage },
  {
    path: "/routes",
    children: [
      { path: "", component: RouteListsPage },
      { path: ":id", component: RouteDetailPage },
      { path: "add", component: RouteAddPage },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
