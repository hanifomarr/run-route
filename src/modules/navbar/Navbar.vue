<script setup>
import { RouterLink, useRoute } from "vue-router";

const navItems = [
  { name: "home", link: "/", Label: "Home" },
  { name: "routes", link: "/routes", Label: "Running Routes" },
  { name: "add", link: "/addRoute", Label: "Add Route" },
];

const isActive = (routePath) => {
  const route = useRoute();
  return route.path === routePath;
};
</script>

<template>
  <nav class="bg-green-700 border-b border-green-500">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="flex h-20 items-center justify-between">
        <div
          class="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
        >
          <RouterLink class="flex flex-shrink-0 items-center mr-4" to="/">
            <span class="hidden md:block text-white text-2xl font-bold ml-2"
              >RunRoute</span
            >
          </RouterLink>
          <div class="md:ml-auto">
            <div class="flex space-x-2">
              <RouterLink
                v-for="item in navItems"
                :key="item.name"
                :to="item.link"
                :class="[
                  isActive(item.link)
                    ? 'bg-green-900 '
                    : 'hover:bg-gray-900 hover:text-white',
                  'text-white   rounded-md px-3 py-2',
                ]"
              >
                {{ item.Label }}</RouterLink
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
