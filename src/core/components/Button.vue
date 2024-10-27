<script setup>
import { computed, defineProps, defineEmits } from "vue";

const props = defineProps({
  variant: { type: String, default: "primary" },
  size: { type: String, default: "medium" },
  disabled: { type: Boolean, default: false },
  class: { type: String, default: "" },
});

const emit = defineEmits(["click"]);

function onClick(event) {
  if (!props.disabled) {
    emit("click", event);
  }
}

const computedClasses = computed(() => {
  const baseClasses =
    "inline-flex items-center justify-center font-medium rounded-md focus:outline-none transition";

  const variantClasses = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
  };

  const sizeClasses = {
    small: "px-3 py-1 text-sm",
    medium: "px-4 py-2 text-md",
    large: "px-5 py-3 text-lg",
  };

  return `${baseClasses} ${
    variantClasses[props.variant] || variantClasses.primary
  } ${sizeClasses[props.size] || sizeClasses.medium}`;
});

const customClass = computed(() => props.class);
</script>

<template>
  <button
    :class="[computedClasses, customClass]"
    :disabled="disabled"
    @click="onClick"
  >
    <slot></slot>
  </button>
</template>
