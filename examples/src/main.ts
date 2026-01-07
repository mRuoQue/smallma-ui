import { createApp } from "vue";

import App from "./app.vue";

import smallmaUI from "../../packages/index";
const app = createApp(App);

app.use(smallmaUI).mount("#app");
