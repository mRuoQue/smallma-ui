<!-- components/Icon.vue -->
<template>
  <i
    :class="['icon', iconClass, size ? `mf-icon--${size}` : '', { 'icon--spin': spin }]"
    :style="computedStyle"
    v-bind="$attrs"
  >
    <!-- SVG 图标 -->
    <svg
      v-if="type === 'svg'"
      :width="svgSize"
      :height="svgSize"
      :viewBox="viewBox"
      aria-hidden="true"
    >
      <use :xlink:href="`#${name}`" />
    </svg>

    <!-- 字体图标 -->
    <component v-else-if="type === 'font'" :is="iconComponent" :name="name" />

    <!-- 图片图标 -->
    <img
      v-else-if="type === 'image'"
      :src="name"
      :alt="alt || 'icon'"
      :style="{ width: svgSize, height: svgSize }"
    />
  </i>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { IconProps } from "./types";
defineOptions({
  name: "MfIcon",
});
const props = withDefaults(defineProps<IconProps>(), {
  type: "svg",
  size: "medium",
  viewBox: "0 0 1024 1024",
  spin: false,
});

// 计算图标类名
const iconClass = computed(() => {
  if (props.type === "font") {
    return `${props.name} ${props.class || ""}`;
  }
  return props.class || "";
});

// 计算尺寸值
const svgSize = computed(() => {
  if (typeof props.size === "number") {
    return `${props.size}px`;
  }

  const sizeMap: Record<string, string> = {
    small: "16px",
    medium: "20px",
    large: "24px",
    xlarge: "32px",
  };

  return sizeMap[props.size] || sizeMap.medium;
});

// 计算样式
const computedStyle = computed(() => ({
  color: props.color,
  ...props.style,
}));

// 动态导入字体图标组件（如果需要）
const iconComponent = computed(() => {
  // 这里可以根据项目实际使用的图标库动态返回组件
  // 例如：return resolveComponent(props.name)
  return "span"; // 默认返回空组件
});
</script>
