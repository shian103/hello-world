<template>
  <div class="login-container">
    <el-form>
      <h3>账号登录</h3>
      <el-form-item>
        <el-input v-model="username" placeholder="请输入账号" />
      </el-form-item>
      <el-form-item>
        <el-input v-model="password" type="password" placeholder="请输入密码" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { reactive, toRefs } from "@vue/reactivity";
export default {
  setup() {
    const user = reactive({
      username: "",
      password: "",
    });
    return { ...toRefs(user) };
  },
};
</script>

<style scoped></style>
