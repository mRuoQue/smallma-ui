export type type =
  | "normal"
  | "primary"
  | "success"
  | "warning"
  | "danger"
  | "info";
export type size = "small" | "medium" | "large";
export interface ButtonProps {
  type?: type;
  size?: size;
  disabled?: boolean;
  plain: boolean;
  round: boolean;
  circle: boolean;
  onClick?: (event: MouseEvent) => void;
}
