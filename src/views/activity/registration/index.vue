<template>
  <div>
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="id"
        label="学号">
      </el-table-column>

      <el-table-column
        prop="name"
        label="姓名">
      </el-table-column>

      <el-table-column
        prop="college"
        label="学院">
      </el-table-column>

      <el-table-column
        prop="method"
        label="报名方式">
      </el-table-column>

      <el-table-column
        prop="audit"
        label="审核状态">
      </el-table-column>

      <el-table-column
        prop="activityName"
        label="活动名称">
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
                       size="mini">撤销
            </el-button>

            <el-popover
              placement="bottom"
              v-model="visible[row.name]"
              width="160">
              <div style="text-align: right; margin: 0">
                <el-button size="mini"
                           type="text"
                           @click="audit(row,'不通过')">不通过
                </el-button>
                <el-button type="primary"
                           size="mini"
                           @click="audit(row,'通过')">通过
                </el-button>
              </div>

              <el-button type="default"
                         slot="reference"
                         size="mini">审核
              </el-button>
            </el-popover>

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
    this.tableData = this.$store.getters.registrationList
  },
  data() {
    return {
      tableData: [],
      visible: {}
    }
  },
  methods: {
    audit(row, audit) {
      this.$store.commit('REGISTRATION_AUDIT', {
        registration: row,
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
