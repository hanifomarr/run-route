<script setup lang="ts">
import { ref } from "vue";
import RouteList from "@/modules/homepage/components/RouteList.vue";

import routesData from "@/routes.json";

const routes = ref(routesData);
</script>

<template>
  <section class="bg-green-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
        Browse Jobs
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <RouteList v-for="route in routes" :key="route" :route="route" />
      </div>
    </div>
  </section>
</template>
