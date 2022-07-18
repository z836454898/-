<template>
  <div>
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="name"
        label="名称"
        width="180">
      </el-table-column>

      <el-table-column
        prop="type"
        label="类型"
        width="180">
      </el-table-column>

      <el-table-column
        prop="workingHours"
        label="工时">
      </el-table-column>

      <el-table-column
        prop="integral"
        label="积分">
      </el-table-column>

      <el-table-column
        prop="method"
        label="报名方式">
      </el-table-column>

      <el-table-column
        prop="signIn"
        label="签到方式">
      </el-table-column>

      <el-table-column
        label="操作">
        <template v-slot="{row}">
          <div style="display: flex;justify-content: center;align-items: center">
            <el-button type="default"
                       @click="()=>{
                       $store.commit('REGISTRATION_ADD',{
                         id:'0001',
                         name:'张三',
                         college:'测试学院',
                         audit:'未审核',
                         activityName:row.activityName,
                       })
                       $message.success('报名成功')
                     }"
                       size="mini">报名
            </el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      background
      layout="prev, pager, next"
      :page-sizes="[10]"
      :total="1">
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "index",
  created() {
    this.tableData = this.$store.getters.activityList
  },
  data() {
    return {
      tableData: [],
      visible: {}
    }
  },
  methods: {
    audit(row, audit) {
      this.$store.commit('ACTIVITY_AUDIT', {
        activity: row,
        audit: audit
      })
      this.$message.success('操作成功')
      this.visible[row.name] = false
    },
  }
}
</script>

<style scoped>

</style>
