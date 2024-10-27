<script setup lang="ts">
import Button from "@/core/components/Button.vue";
import Card from "@/core/components/Card.vue";

defineProps({
  route: Object,
});
</script>

<template>
  <Card>
    <div class="p-4">
      <div class="mb-6">
        <div class="text-gray-600 my-2">{{ route.location }}</div>
        <h3 class="text-xl font-bold">{{ route.name }}</h3>
      </div>

      <div class="mb-5">
        {{ route.description }}
      </div>

      <h3 class="text-green-500 mb-2">{{ route.distance_km }} KM</h3>

      <div class="border border-gray-100 mb-5"></div>

      <div class="flex flex-col lg:flex-row justify-between mb-4">
        <div class="text-orange-700 mb-3">
          <i class="fa-solid fa-location-dot text-lg"></i>
          {{ route.difficulty }}
        </div>
        <RouterLink to="`/routes`">
          <Button
            variant="primary"
            size="medium"
            class="bg-green-500 hover:bg-green-600"
            >See More</Button
          >
        </RouterLink>
      </div>
    </div>
  </Card>
</template>
