<template>
  <el-form ref="form" label-width="80px" style="width: 60%">
    <el-form-item></el-form-item>
    <el-form-item label="消息内容">
      <el-input v-model="inputForm.content"
      type="textarea"
      :rows="5"></el-input>
    </el-form-item>

    <h2>发布范围</h2>

    <el-form-item label="班级">
      <el-select v-model="inputForm.class" placeholder="请选择">
        <el-option value="测试班级" label="测试班级"></el-option>
      </el-select>
    </el-form-item>

    <el-form-item label="学院">
      <el-select v-model="inputForm.college" placeholder="请选择">
        <el-option value="测试学院" label="测试学院"></el-option>
      </el-select>
    </el-form-item>

    <el-form-item>
      <el-button type="primary"
                 @click="submit">发布消息
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
      this.$store.commit('MESSAGE_RELEASE',{...this.inputForm})

      this.$confirm('发布成功！按确认键跳转至消息列表页面','提示',{
        closeOnClickModal:false,
        showCancelButton:false,
      }).then(_=>{
        this.$router.push({path:'/message/list'})
      })
    }
  }
}
</script>

<style scoped>

</style>
