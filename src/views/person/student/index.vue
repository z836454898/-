<template>
  <div style="padding: 20px">
    <router-link to="/personManage/addForm">
      <el-button type="primary"
                 style="margin-bottom: 20px"
      >新增
      </el-button>
    </router-link>

    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>

      <el-table-column
        prop="class"
        label="班级">
      </el-table-column>

      <el-table-column
        prop="college"
        label="学院">
      </el-table-column>

      <el-table-column
        prop="id"
        label="学号">
      </el-table-column>

      <el-table-column
        prop="gender"
        label="性别">
      </el-table-column>

      <el-table-column
        prop="tel"
        label="电话号码">
      </el-table-column>

      <el-table-column
        prop="organization"
        label="社团组织">
      </el-table-column>

      <el-table-column
        label="操作">
        <template v-slot="{row}">
          <div style="display: flex;justify-content: center;align-items: center">
            <el-button type="default"
                       @click="()=>{
                         $store.commit('STUDENT_DEL',row)
                         $message.success('操作成功')
                       }"
                       size="mini">删除
            </el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      background
      :page-sizes="[10]"
      layout="prev, pager, next"
      :total="1">
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "index",
  created() {
    this.tableData = this.$store.getters.studentList
  },
  data() {
    return {
      tableData: [],
      visible: {}
    }
  }
}
</script>

<style scoped>

</style>
