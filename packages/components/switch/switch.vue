<template>
  <div
    class="mf-switch"
    :class="{
      [`mf-switch--${size}`]: size,
      'is-diabled': disabled,
      'is-checked': checked,
    }"
    @click="changeSwitch"
    :id="id"
  >
    <input type="checkbox" role="switch" class="mf-switch-input" />
    <span class="mf-switch-label" v-if="label">{{ props?.label }}</span>
    <div class="mf-switch-core">
      <div class="mf-switch-core-inner">
        <span> </span>
      </div>
      <div class="mf-switch-core-action"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed } from "vue";
import type { SwitchProps, SwitchEmits } from "./types";
defineOptions({ name: "MfSwitch" });
const props = withDefaults(defineProps<SwitchProps>(), {
  activeValue: true,
  inactiveValue: false,
});

const innerValue = ref(props.modelValue);
const emit = defineEmits<SwitchEmits>();
// 是否处于选中状态
const checked = computed(() => innerValue.value === props.activeValue);

const changeSwitch = () => {
  if (props.disabled) return;
  const newValue = checked.value ? props.inactiveValue : props.activeValue;
  innerValue.value = newValue;
  emit("update:modelValue", newValue);
  emit("change", newValue);
};
</script>
