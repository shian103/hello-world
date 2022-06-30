import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import App from "./App.vue";
import createStore from "./store/index";
// import store from "./store";
import router from "./router/index";

const app = createApp(App);
// 挂方法
app.use(createStore);
app.use(ElementPlus, { locale: zhCn });
app.use(router);
// 挂app节点
app.mount("#app");
// createApp(App).mount("#app");
