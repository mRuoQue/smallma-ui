<script setup lang="ts">
import { computed, ref } from "vue";
// import Icon from "../icon/icon.vue";
import type { CollapseItemProps } from "./types";

defineOptions({
  name: "MfCollapseItem",
});

const props = withDefaults(defineProps<CollapseItemProps>(), {
  title: "",
  name: "",
  disabled: false,
});

const isActived = ref(true);

const toggle = () => {
  if (props.disabled) return;
  isActived.value = !isActived.value;

  props.onClick?.(props.name);
};
</script>
<template>
  <div class="mf-collapse-item">
    <div class="mf-collapse-item-title" @click="toggle">
      <slot name="title">{{ title }}</slot>
      <Icon name="icon-home" type="svg" size="large" color="#1890ff" />
    </div>
    <div
      class="mf-collapse-item-content"
      :class="{
        'is-active': isActived,
        'is-inactive': !isActived,
      }"
    >
      <slot />
    </div>
  </div>
</template>
