export type SwitchValueType = boolean | string | number;
export interface SwitchEmits {
  (e: "change", value: SwitchValueType): void;
  (e: "update:modelValue", value: SwitchValueType): void;
}

export interface SwitchProps {
  modelValue?: SwitchValueType;
  disabled?: boolean;
  activeText?: string;
  inactiveText?: string;
  activeColor?: string;
  inactiveColor?: string;
  activeValue?: SwitchValueType;
  inactiveValue?: SwitchValueType;
  id?: string;
  size?: "small" | "large";
  inlinePrompt?: boolean;
  label: string;
  onChange?: (value: SwitchValueType) => void;
}
