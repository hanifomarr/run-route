<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";

import Hero from "../components/Hero.vue";
import RouteList from "../components/RouteList.vue";
import Button from "@/core/components/Button.vue";

import routesData from "@/routes.json";

const routes = ref(routesData);
</script>

<template>
  <Hero />
  <section class="bg-green-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
        Browse Running Route
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <RouteList v-for="route in routes" :key="route" :route="route" />
      </div>
    </div>
  </section>
  <section class="m-auto max-w-lg my-10 px-6">
    <RouterLink to="/routes">
      <Button class="w-full bg-black py-4 px-6 hover:bg-gray-700">
        See More</Button
      >
    </RouterLink>
  </section>
</template>
