<script setup lang="ts">
import type { ButtonProps } from "./types";
defineProps<ButtonProps>();
defineOptions({ name: "SmButton" });
</script>

<template>
  <button
    class="sm-button"
    :class="{
      [`sm-button--${type}`]: type,
      'is-disabled': disabled,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
    }"
  >
    <span><slot>button</slot></span>
  </button>
</template>
<style>
.sm-button {
  color: blue;
}
</style>
