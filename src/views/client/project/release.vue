<template>
  <el-form ref="form" label-width="150px" style="width: 60%">
    <el-form-item label="申报方式">
      <el-select v-model="inputForm.pattern" placeholder="请选择">
        <el-option label="个人" value="个人"></el-option>
        <el-option label="团队" value="团队"></el-option>
      </el-select>
    </el-form-item>

    <el-form-item label="申报团队" v-if="inputForm.pattern==='团队'">
      <el-select v-model="inputForm.team" placeholder="请选择">
        <el-option label="测试团队1" value="测试团队1"></el-option>
        <el-option label="测试团队2" value="测试团队2"></el-option>
      </el-select>
    </el-form-item>

    <el-form-item label="申报项目名称">
      <el-select v-model="inputForm.name" placeholder="请选择">
        <el-option v-for="item in getProjectReport"
                   :value="item.name"
                   :label="item.name"
                   :key="item.name"></el-option>
      </el-select>
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
  computed:{
    getProjectReport() {
      return this.$store.getters.projectList
    },
  },
  methods: {
    submit(){
      this.$store.commit('PROJECT_REPORT',{...this.inputForm,report:'张三'})

      this.$confirm('创建成功！按确认键跳转至申报列表页面','提示',{
        closeOnClickModal:false,
        showCancelButton:false,
      }).then(_=>{
        this.$router.push({path:'/project/myDeclare'})
      })
    }
  }
}
</script>

<style scoped>

</style>
