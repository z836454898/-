<template>
  <el-form ref="form" label-width="80px" style="width: 60%">
    <el-form-item label="项目名称">
      <el-input v-model="inputForm.name"></el-input>
    </el-form-item>

    <el-form-item label="申报说明">
      <el-input v-model="inputForm.notes"></el-input>
    </el-form-item>

    <h2>发布范围</h2>

    <el-form-item label="年级">
      <el-input v-model="inputForm.grade"></el-input>
    </el-form-item>

    <el-form-item label="学院">
      <el-input v-model="inputForm.college"></el-input>
    </el-form-item>

    <el-form-item label="专业">
      <el-input v-model="inputForm.major"></el-input>
    </el-form-item>

    <el-form-item label="班级">
      <el-input v-model="inputForm.class"></el-input>
    </el-form-item>

    <el-form-item label="校级组织">
      <el-input v-model="inputForm.classOrganization"></el-input>
    </el-form-item>

    <el-form-item label="院级组织">
      <el-input v-model="inputForm.collegeOrganization"></el-input>
    </el-form-item>

    <el-form-item label="社团组织">
      <el-input v-model="inputForm.associationOrganization"></el-input>
    </el-form-item>

    <el-form-item label="工时上限">
      <el-input v-model="inputForm.workingHoursUp"></el-input>
    </el-form-item>

    <el-form-item label="工时下限">
      <el-input v-model="inputForm.workingHoursDown"></el-input>
    </el-form-item>

    <el-form-item label="积分上限">
      <el-input v-model="inputForm.pointUp"></el-input>
    </el-form-item>

    <el-form-item label="积分下限">
      <el-input v-model="inputForm.pointDown"></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary"
                 @click="submit">发布申报
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
      this.$store.commit('PROJECT_REPORT',{...this.inputForm})

      this.$confirm('发布成功！按确认键跳转至申报清单页面','提示',{
        closeOnClickModal:false,
        showCancelButton:false,
      }).then(_=>{
        this.$router.push({path:'/projectReport/list'})
      })
    }
  }
}
</script>

<style scoped>

</style>
