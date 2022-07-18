<template>
  <div class="login-container">
    <div class="form-container">
      <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on"
               label-position="left">

        <div class="title-container">
          <h3 class="title">“第二课堂”系统综合服务平台后台管理</h3>
        </div>

        <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon icon-class="user"/>
        </span>
          <el-input
            ref="username"
            v-model="loginForm.username"
            placeholder="请输入用户名"
            name="username"
            type="text"
            tabindex="1"
            auto-complete="on"
          />
        </el-form-item>

        <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon-class="password"/>
        </span>
          <el-input
            :key="passwordType"
            ref="password"
            v-model="loginForm.password"
            :type="passwordType"
            placeholder="请输入密码"
            name="password"
            tabindex="2"
            auto-complete="on"
          />
          <span class="show-pwd" @click="showPwd">
          <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'"/>
        </span>
        </el-form-item>

        <div style="display: flex;flex-wrap: nowrap;justify-content: space-between;flex: 1">
          <el-form-item prop="VerificationCode">
            <!--        <span class="svg-container">-->
            <!--          <svg-icon icon-class="el-icon-collection-tag" />-->
            <!--        </span>-->
            <span class="svg-container"><i class="el-icon-edit"></i></span>
            <el-input
              ref="VerificationCode"
              v-model="loginForm.VerificationCode"
              type="text"
              placeholder="请输入验证码"
              name="password"
              tabindex="3"
              @keyup.enter.native="handleLogin"
            />
          </el-form-item>

          <div style="padding-left: 20px">
            <img src="../../assets/VerificationCode/1.png">
          </div>
        </div>

        <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;"
                   @click.native.prevent="handleLogin">登录
        </el-button>

      </el-form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        username: '',
        password: '',
        VerificationCode: '',
      },
      loginRules: {
        username: [
          {required: true, trigger: 'blur', message: '请输入用户名'},
          // { min:10, trigger: 'blur',message: '用户名不应小于10位'},
        ],
        password: [
          {required: true, trigger: 'blur', message: '请输入密码'},
          // { min:11, trigger: 'blur',message: '密码不应小于11位'}
        ],
        VerificationCode: [
          {required: true, trigger: 'blur', message: '请输入验证码'}
        ]
      },
      loading: false,
      passwordType: 'password',
      redirect: undefined
    }
  },
  methods: {
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('user/login', this.loginForm).then(() => {
            this.$router.push({path: this.redirect || '/'})
            this.loading = false
          }).catch((err) => {
            this.loading = false
            this.$message.error(err)
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg: #283443;
$light_gray: black;
$cursor: black;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: black;
$light_gray: black;

.login-container {
  min-height: 100%;
  width: 100%;
  background-image: url('../../assets/background.png');
  background-repeat: no-repeat;
  background-size: cover;
  //background-color: $bg;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 70px 0;
    margin: 0 auto;
    overflow: hidden;
  }

  .tips {
    font-size: 14px;
    color: black;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: black;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: black;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: black;
    cursor: pointer;
    user-select: none;
  }

  .form-container{
    border-radius: 30px;
    height: 50%;
    width: 50%;
    background: rgba(255, 255, 255, .7);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>

<style lang="scss">
.el-form-item {
  width: 100%;
}
</style>
