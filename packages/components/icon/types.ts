// 定义属性
export interface IconProps {
  /** 图标名称 */
  name: string;
  /** 图标类型: svg | font | image */
  type?: "svg" | "font" | "image";
  /** 图标大小: small | medium | large | xlarge 或具体数值 */
  size?: "small" | "medium" | "large" | "xlarge" | number;
  /** 自定义CSS类名 */
  class?: string;
  /** 图标颜色 */
  color?: string;
  /** 是否旋转动画 */
  spin?: boolean;
  /** 自定义样式 */
  style?: Record<string, string | number>;
  /** 图片图标时的替代文本 */
  alt?: string;
  /** SVG图标视图盒 */
  viewBox?: string;
}
