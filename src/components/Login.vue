<template>
  <div id="page-login">
    <div class="login-container">
      <div class="login-title">CTI电话管理系统</div>
      <div class="login-name">
        <input type="text" v-model="login.agentNo" placeholder="用户名"/>
      </div>
      <div class="login-password" v-model="login.password">
        <input type="password" v-model="login.password" placeholder="密码" @keyup.enter="submit"/>
      </div>
      <div><Button :block="true" color="green" @click.native="submit" :loading="loading">登录</Button></div>
    </div>
  </div>
</template>
<script>

import Login from 'model/login/Login';

export default {
  data() {
    return {
      login: Login.parse({
        agentNo: '',
        password: ''
      }),
      loading: false
    }
  },
  methods: {
    submit() {
      this.loading = true;
      R.Login.login(Login.dispose(this.login)).then(resp=>{
        if(resp._status == 200){
          let msg = resp._body;
          msg.password = this.login.password;
          Utils.saveLocal("Auth", msg);
          window.location = '/';
        }
        this.loading = false;
      });
    }
  }
}
</script>
