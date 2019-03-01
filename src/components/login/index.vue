<style lang="less">
@gradient-color: #43495b;
.login-vue {
  text-align: center;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: @gradient-color;
  .login-container {
    width: 400px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .login-content {
      letter-spacing: 2px;
      background: #FFF;
      padding: 120px 40px 60px;
      box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.18);
      border-radius: 3px;
      box-sizing: border-box;
      >div {
        margin: 30px 0;
        label {
          margin-right: 10px;
          line-height: 35px;
          font-size: 18px;
          color: @gray-color;
        }
        input {
          font-size: 16px;
          padding: 8px 0 8px 8px;
          height: 40px;
          width: 100%;
          border: none;
          border-radius: 0;
          border-bottom: 1px solid #d3d3d3;
          box-shadow: inset 0 0 0 1000px #fff;
          outline: none;
          box-sizing: border-box;
          transition: .3s;
          font-weight: 200;
          &:focus {
            border-bottom-color: @gradient-color;
            box-shadow: inset 0 0 0 1000px #fff;
          }
        }
        &.login-title {
          font-size: 30px;
          color: #1d1d1d;
          line-height: 1;
          margin: -16px 0px 40px;
          font-weight: 200;
        }
      }
      > .buttonDiv {
        margin-top: 45px;
        .h-btn {
          padding: 12px 0;
          font-size: 18px;
          opacity: .8;
          background: @gradient-color;
          border-color: @gradient-color;
          &:hover {
            opacity: 1;
            background: @gradient-color;
            border-color: @gradient-color;
          }
        }
      }
    }
    .copyright {
      letter-spacing: 1px;
      margin-top: 10px;
      color: #FFF;
      a {
        color: #FFF;
      }
    }
  }
}
</style>

<template>
  <div class="login-vue">
    <div class="login-container">
      <div class="login-content">
        <div class="login-title">管理系统</div>
        <div class="login-name">
          <input type="text" v-model="login.username" placeholder="用户名"/>
        </div>
        <div class="login-password">
          <input type="password" v-model="login.password" placeholder="密码" @keyup.enter="submit"/>
        </div>
        <div class="buttonDiv">
          <Button :loading="loading" block color="primary" size="l" @click="submit">登录</Button>
        </div>
      </div>
      <p class="copyright"> Copyright © 2019 HeyUI. - <a href="https://www.heyui.top/">heyui.top</a></p>
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
    };
  },
  methods: {
    submit() {
      this.loading = true;
      R.Login.login(Login.dispose(this.login)).then(resp => {
        if (resp.ok) {
          let msg = resp.body;
          Utils.saveLocal('token', msg.value);
          this.$router.replace('/');
        }
        this.loading = false;
      });
    }
  }
};
</script>
