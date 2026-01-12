import Collapse from "./collapse.vue";
import CollapseItem from "./collapseItem.vue";

// @ts-ignore
import { installComponent } from "../../utils";
const MfCollapse = installComponent(Collapse);
const MfCollapseItem = installComponent(CollapseItem);
export { MfCollapseItem };
export default MfCollapse;

export * from "./types";
