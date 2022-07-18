<template>
  <el-form ref="form" label-width="80px" style="width: 60%">
    <el-form-item label="学号">
      <el-input v-model="inputForm.id"></el-input>
    </el-form-item>

    <el-form-item label="账号">
      <el-input v-model="inputForm.username"></el-input>
    </el-form-item>

    <el-form-item label="密码">
      <el-input v-model="inputForm.password"></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary"
                 @click="submit">创建账户
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: "release",
  data() {
    return {
      inputForm: {},
    }
  },
  methods:{
    submit(){
      this.$store.commit('ACCOUNT_RELEASE',{...this.inputForm,disable:'否'})

      this.$confirm('发布成功！按确认键跳转至账户列表页面','提示',{
        closeOnClickModal:false,
        showCancelButton:false,
      }).then(_=>{
        this.$router.push({path:'/system/account'})
      })
    }
  }
}
</script>

<style scoped>

</style>
