<template>
  <div style="padding: 20px">

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
        prop="pattern"
        label="申报方式">
      </el-table-column>

      <el-table-column
        prop="audit"
        label="审核状态">
      </el-table-column>

      <el-table-column
        label="操作">
        <template v-slot="{row}">
          <div style="display: flex;justify-content: center;align-items: center">
            <el-button type="danger"
                       size="mini"
                       @click="cancel(row)">取消申报
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
    this.tableData = this.$store.getters.reportList.filter(value => {
      if (value.report==='张三'){
        return value
      }
    })
  },
  data() {
    return {
      tableData: [],
      visible: {}
    }
  },
  methods:{
    cancel(report){
      this.$confirm('确定要取消申报吗?').then(_=>{
        this.$store.commit('REPORT_DELETE',report)
      })
    }
  }
}
</script>

<style scoped>

</style>
