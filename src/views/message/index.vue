<template>
  <div>
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="content"
        label="内容"
        width="400">
      </el-table-column>

      <el-table-column
        prop="class"
        label="发布班级"
        width="180">
      </el-table-column>

      <el-table-column
        prop="college"
        label="发布学院">
      </el-table-column>

      <el-table-column
        label="操作">
        <template v-slot="{row}">
          <div style="display: flex;justify-content: center;align-items: center">
            <el-button type="default"
                       @click="()=>{
                         $store.commit('MESSAGE_DELETE',row)
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
    this.tableData = this.$store.getters.messageList
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
