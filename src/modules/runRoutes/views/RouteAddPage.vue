<script setup lang="ts">
import Button from "@/core/components/Button.vue";
</script>

<template>
  <section class="bg-green-50">
    <div class="container m-auto max-w-2xl py-24">
      <div
        class="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0"
      >
        <form>
          <h2 class="text-3xl text-center font-semibold mb-6">Add Route</h2>

          <div class="mb-4">
            <label for="type" class="block text-gray-700 font-bold mb-2"
              >Route Type</label
            >
            <select
              id="type"
              name="type"
              class="border rounded w-full py-2 px-3"
              required
            >
              <option value="Full-Time">Road</option>
              <option value="Part-Time">Trail</option>
            </select>
          </div>

          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2">Route Name</label>
            <input
              type="text"
              id="name"
              name="name"
              class="border rounded w-full py-2 px-3 mb-2"
              placeholder="eg. Taman Botani Kuala Lumpur"
              required
            />
          </div>
          <div class="mb-4">
            <label for="description" class="block text-gray-700 font-bold mb-2"
              >Description</label
            >
            <textarea
              id="description"
              name="description"
              class="border rounded w-full py-2 px-3"
              rows="4"
              placeholder="Add route description"
            ></textarea>
          </div>

          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2"> Location </label>
            <input
              type="text"
              id="location"
              name="location"
              class="border rounded w-full py-2 px-3 mb-2"
              placeholder="Route Location"
              required
            />
          </div>

          <div>
            <Button
              class="bg-green-500 hover:bg-green-600 py-2 px-4 w-full"
              type="submit"
            >
              Add Job
            </Button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
