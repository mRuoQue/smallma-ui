<script setup lang="ts">
import type { ButtonProps } from "./types";
defineOptions({ name: "SmButton" });
withDefaults(defineProps<ButtonProps>(), {
  nativeType: "button", // 按钮原生的 type 属性默认值
});
</script>

<template>
  <button
    class="sm-button"
    :class="{
      [`sm-button--${type}`]: type,
      [`sm-button--${size}`]: size,
      'is-disabled': disabled,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
    }"
    :autofocus="autofocus"
    :nativeType="nativeType"
    :disabled="disabled"
  >
    <span><slot>button</slot></span>
  </button>
</template>
<style></style>
