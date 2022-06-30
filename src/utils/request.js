import axios from "axios";
import { Message } from "element-plus";
import router from "@/router";
import store from "@/store";

// 创建axios实例
const service = axios.create({
  // 如果不存在跨域问题，并且在.env.xxx文件中有配置的话baseURL的值可以直接使用：process.env.BASE_API；
  // 如果使用proxy做了代理配置，那么baseURL的值直接写'/'就可以了。
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 15000, // 请求超时时间
  headers: {
    // 主要进行相关请求头信息配置
    "Content-Type": "application/json;charset=UTF-8",
    token: "xxxxxxxxx",
  },
});

// 数据请求拦截 [注入token] 是在axios请求发出之前给每一个接口携带token去后端校验身份
service.interceptors.request.use(
  (config) => {
    // 一定要retutn config,否则请求会被挂起
    if (store.getters.token) {
      //  如果token存在 注入token
      config.headers["token"] = "${store.getters.token}";
    }
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

// 返回响应数据拦截 [集中的错误处理，数据处理] 是在axios请求发出之后
service.interceptors.response.use(
  (response) => {
    // 一定要return data,否则无法获取到数据
    const { code, message, data } = response.data;
    if (code === 200) {
      return data;
    } else {
      Message.error(message); // 提示错误信息
      return Promise.reject(new Error(message));
    }
  },
  (error) => {
    // error信息里面 response的对象
    if (
      error.response &&
      error.response.data &&
      error.response.data.code === 10002
    ) {
      // 当等于10002的时候 表示后端告诉我token超时了
      store.dispatch("user/logout"); // 登出action 删除token
      router.push("/login");
      Message.error("token过期,重新登录");
    } else {
      Message.error(error.message); // 提示错误信息
    }
    return Promise.reject(error);
  }
);

export default service;
