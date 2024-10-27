<script setup lang="ts">
import Button from "@/core/components/Button.vue";
import Card from "@/core/components/Card.vue";
import { RouterLink } from "vue-router";
</script>

<template>
  <section class="bg-green-50">
    <div class="container m-auto py-10 px-6">
      <div class="grid grid-cols-1 md:grid-cols-[7fr_3fr] w-full gap-6">
        <main>
          <Card class="p-6 text-center md:text-left">
            <div class="text-gray-500 mb-4">title</div>
            <h1 class="text-3xl font-bold mb-4">name</h1>
            <div
              class="text-gray-500 mb-4 flex align-middle justify-center md:justify-start"
            >
              <i
                class="fa-solid fa-location-dot text-lg text-orange-700 mr-2"
              ></i>
              <p class="text-orange-700">location</p>
            </div>
          </Card>

          <Card class="p-6 mt-6">
            <h3 class="text-green-800 text-lg font-bold mb-6">
              Route Description
            </h3>
            <p class="mb-4">description</p>
          </Card>
        </main>

        <aside>
          <Card class="p-6">
            <h3 class="text-xl font-bold mb-6">Route Info</h3>
            <p class="my-2">map</p>
            <hr class="my-4" />
            <h3 class="text-xl">Details:</h3>
            <p class="my-2 bg-green-100 p-2 font-bold"></p>
          </Card>

          <Card class="p-6 mt-6">
            <h3 class="text-xl font-bold mb-6">Manage Route</h3>
            <RouterLink to="/">
              <Button class="w-full bg-green-500 hover:bg-green-600"
                >Edit Route</Button
              >
            </RouterLink>
            <RouterLink to="/">
              <Button class="w-full bg-red-500 hover:bg-red-600 mt-4">
                Delete Route
              </Button>
            </RouterLink>
          </Card>
        </aside>
      </div>
    </div>
  </section>
</template>
