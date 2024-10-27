<script setup>
const props = defineProps({
  class: { type: String, default: "" },
});
</script>

<template>
  <div :class="[props.class, 'bg-white rounded-xl shadow-md relative']">
    <slot></slot>
  </div>
</template>
