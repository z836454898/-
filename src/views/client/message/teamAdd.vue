<template>
  <el-form ref="form" label-width="80px" style="width: 60%">
    <el-form-item label="团队名称">
      <el-input v-model="inputForm.name"></el-input>
    </el-form-item>

    <el-form-item label="人数上限">
      <el-input v-model="inputForm.limit"></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary"
                 @click="submit">创建团队
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      inputForm: {},
    }
  },
  methods:{
    submit(){
      this.$store.commit('TEAM_ADD',{
        ...this.inputForm,
        leader:'张三',
        count:1
      })

      this.$confirm('创建成功！按确认键跳转至我的团队页面','提示',{
        closeOnClickModal:false,
        showCancelButton:false,
      }).then(_=>{
        this.$router.push({path:'/message/myTeam'})
      })
    }
  }
}
</script>

<style scoped>

</style>
