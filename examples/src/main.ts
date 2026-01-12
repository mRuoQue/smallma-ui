import { createApp } from "vue";

import App from "./App.vue";

// 开发测试
import mafirmUI from "../../packages/index";
import "../../packages/styles/index.css";
const app = createApp(App);
app.use(mafirmUI).mount("#app");

// 打包测试
// import mafirmUI from "../../dist/es/mafirmUI.js";
// import "../../dist/es/mafirmUI.css";
// const app = createApp(App);
// app.use(mafirmUI).mount("#app");
