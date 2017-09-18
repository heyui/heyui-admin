<template>
  <div id="page-login">
    <div class="login-container">
      <div class="login-title">管理系统</div>
      <div class="login-name">
        <input type="text" v-model="login.username" placeholder="用户名"/>
      </div>
      <div class="login-password">
        <input type="password" v-model="login.password" placeholder="密码" @keyup.enter="submit"/>
      </div>
      <div class="buttonDiv">
        <p @click="submit" ><i class="h-loading" v-if="loading"></i>登录</p>
      </div>
    </div>
  </div>
</template>
<script>

import Login from 'model/login/Login';

export default {
  data() {
    return {
      login: Login.parse({}),
      loading: false
    }
  },
  methods: {
    submit() {
      this.loading = true;
      R.Login.login(Login.dispose(this.login)).then(resp=>{
        if(resp.ok){
          let msg = resp.body;
          Utils.saveLocal("token", msg.value);
          this.$router.replace('/');
        }
        this.loading = false;
      });
    }
  }
}
</script>
