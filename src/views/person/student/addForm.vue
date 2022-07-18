<template>
  <el-form ref="form" label-width="80px" style="width: 60%">
    <el-form-item label="姓名">
      <el-input v-model="inputForm.name"></el-input>
    </el-form-item>

    <el-form-item label="班级">
      <el-input v-model="inputForm.class"></el-input>
    </el-form-item>

    <el-form-item label="学院">
      <el-input v-model="inputForm.college"></el-input>
    </el-form-item>

    <el-form-item label="性别">
      <el-input v-model="inputForm.gender"></el-input>
    </el-form-item>

    <el-form-item label="电话号码">
      <el-input v-model="inputForm.tel"></el-input>
    </el-form-item>

    <el-form-item label="社团组织">
      <el-input v-model="inputForm.organization"></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary"
                 @click="submit">创建学生
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
      this.$store.commit('STUDENT_ADD',{...this.inputForm,id:'0008'})

      this.$confirm('创建成功！按确认键跳转至学生列表页面','提示',{
        closeOnClickModal:false,
        showCancelButton:false,
      }).then(_=>{
        this.$router.push({path:'/personManage/student'})
      })
    }
  }
}
</script>

<style scoped>

</style>
