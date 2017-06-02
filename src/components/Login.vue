<template>
  <div id="page-login">
    <div class="login-container">
      <div class="login-title">系统</div>
      <div class="login-name">
        <input type="text" v-model="login.name" placeholder="用户名"/>
      </div>
      <div class="login-password" v-model="login.password">
        <input type="text" v-model="login.password" placeholder="密码"/>
      </div>
      <div><button class="h-btn h-btn-green h-btn-block" @click="submit">登录</button></div>
    </div>
  </div>
</template>
<script>

import Login from 'model/login/Login';

export default {
  data() {
    return {
      login: Login.parse({})
    }
  },
  methods: {
    submit() {
      log(R);
      R.Login.login(Login.dispose(this.login)).then(resp=>{
        if(resp.status == 200){
          window.location = '/';
        }
      });
    }
  }
}
</script>
