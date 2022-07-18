<template>
  <el-form ref="form" label-width="80px" style="width: 60%">
    <el-form-item label="姓名" >
      <el-input v-model="inputForm.name" disabled ></el-input>
    </el-form-item>

    <el-form-item label="班级" >
      <el-input v-model="inputForm.class" disabled ></el-input>
    </el-form-item>

    <el-form-item label="学院" >
      <el-input v-model="inputForm.college" disabled ></el-input>
    </el-form-item>

    <el-form-item label="学号" >
      <el-input v-model="inputForm.id" disabled ></el-input>
    </el-form-item>

    <el-form-item label="性别" >
      <el-input v-model="inputForm.gender" disabled ></el-input>
    </el-form-item>

    <el-form-item label="社团组织" >
      <el-input v-model="inputForm.organization" disabled ></el-input>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: "personal",
  data() {
    return {
      inputForm: {}
    }
  },
  created() {
    const temp = this.$store.getters.studentList.filter(value => {
      if (value.name === '张三') {
        return value
      }
    })
    this.inputForm = temp[0]
  }
}
</script>

<style lang="scss">
.el-input__inner{
  color: black !important;
}
</style>
