<template>
  <div>
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="name"
        label="项目名称"
        width="180">
      </el-table-column>

      <el-table-column
        prop="notes"
        label="申报说明"
        width="180">
      </el-table-column>

      <el-table-column
        prop="grade"
        label="年级">
      </el-table-column>

      <el-table-column
        prop="college"
        label="学院">
      </el-table-column>

      <el-table-column
        prop="major"
        label="专业">
      </el-table-column>

      <el-table-column
        prop="class"
        label="班级">
      </el-table-column>

      <el-table-column
        prop="classOrganization"
        label="校级组织">
      </el-table-column>

      <el-table-column
        prop="collegeOrganization"
        label="院级组织">
      </el-table-column>

      <el-table-column
        prop="associationOrganization"
        label="社团组织">
      </el-table-column>

      <el-table-column
        prop="workingHoursUp"
        label="工时上限">
      </el-table-column>

      <el-table-column
        prop="workingHoursDown"
        label="工时下限">
      </el-table-column>

      <el-table-column
        prop="pointUp"
        label="积分上限">
      </el-table-column>

      <el-table-column
        prop="pointDown"
        label="积分下限">
      </el-table-column>

      <el-table-column
        label="操作">
        <template v-slot="{row}">
          <div style="display: flex;justify-content: center;align-items: center">
            <el-button type="default"
                       @click="()=>{
                         $store.commit('REGISTRATION_DELETE',row)
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
    this.tableData = this.$store.getters.projectList
  },
  data() {
    return {
      tableData: [],
      visible: {}
    }
  },
  methods: {}
}
</script>

<style scoped>

</style>
