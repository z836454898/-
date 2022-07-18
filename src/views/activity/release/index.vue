<template>
  <el-form ref="form" label-width="80px" style="width: 60%">
    <el-form-item label="活动名称">
      <el-input v-model="inputForm.name"></el-input>
    </el-form-item>

    <el-form-item label="活动类型">
      <el-input v-model="inputForm.type"></el-input>
    </el-form-item>

    <el-form-item label="工时设置">
      <el-input v-model="inputForm.workingHours"></el-input>
    </el-form-item>

    <el-form-item label="积分设置">
      <el-input v-model="inputForm.integral"></el-input>
    </el-form-item>

    <el-form-item label="报名方式">
      <el-select v-model="inputForm.method" placeholder="请选择">
        <el-option label="个人" value="个人"></el-option>
        <el-option label="团队" value="团队"></el-option>
      </el-select>
    </el-form-item>

    <el-form-item label="发布范围">
      <el-select v-model="inputForm.scope" placeholder="请选择">
        <el-option label="面向学生" value="面向学生"></el-option>
        <el-option label="面向老师" value="面向老师"></el-option>
      </el-select>
    </el-form-item>

<!--    面向学生-->
    <template v-if="inputForm.scope==='面向学生'">
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
        <el-input v-model="inputForm.schoolOrganization"></el-input>
      </el-form-item>

      <el-form-item label="院级组织">
        <el-input v-model="inputForm.collegeOrganization"></el-input>
      </el-form-item>

      <el-form-item label="班团组织">
        <el-input v-model="inputForm.classOrganization"></el-input>
      </el-form-item>
    </template>

<!--    面向老师-->
    <template v-if="inputForm.scope==='面向老师'">
      <el-form-item label="学院">
        <el-input v-model="inputForm.college"></el-input>
      </el-form-item>

      <el-form-item label="部门">
        <el-input v-model="inputForm.department"></el-input>
      </el-form-item>

      <el-form-item label="单位">
        <el-input v-model="inputForm.unit"></el-input>
      </el-form-item>
    </template>

    <el-form-item label="签到方式">
      <el-select v-model="inputForm.signIn" placeholder="请选择">
        <el-option label="扫码" value="扫码"></el-option>
        <el-option label="定时" value="定时"></el-option>
        <el-option label="定位" value="定位"></el-option>
      </el-select>
    </el-form-item>

    <el-form-item>
      <el-button type="primary"
                 @click="submit">发布活动
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
      this.$store.commit('ACTIVITY_RELEASE',{...this.inputForm,audit:'未审核'})

      this.$confirm('发布成功！按确认键跳转至活动清单页面','提示',{
        closeOnClickModal:false,
        showCancelButton:false,
      }).then(_=>{
        this.$router.push({path:'/activity/list'})
      })
    }
  }
}
</script>

<style scoped>

</style>
