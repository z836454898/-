<template>
  <div>
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="name"
        label="团队名称">
      </el-table-column>

      <el-table-column
        prop="count"
        label="团队人数">
      </el-table-column>

      <el-table-column
        prop="limit"
        label="团队人数上限">
      </el-table-column>

      <el-table-column
        prop="leader"
        label="队长">
      </el-table-column>

      <el-table-column
        label="操作">
        <template v-slot="{row}">
          <div style="display: flex;justify-content: center;align-items: center">
            <el-button type="danger"
                       @click="del(row,'解散')"
                       size="small">解散团队
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
    this.tableData = this.$store.getters.teamList
  },
  data() {
    return {
      tableData: [],
      visible: {}
    }
  },
  methods: {
    del(row, title) {
      this.$confirm('确定要' + title + '该团队吗？').then(_ => {
        this.$store.commit('TEAM_DEL', row)
        this.$message.success('操作成功')
      })
    }
  }
}
</script>

<style scoped>

</style>
