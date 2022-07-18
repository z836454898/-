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
            <el-button type="danger"
                       @click="()=>{
                         $confirm('确定要取消报名吗？').then(_=>{
                           $store.commit('REGISTRATION_DELETE',row)
                         })
                       }"
                       size="mini">取消报名
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
  },
  data() {
    return {
      visible: {}
    }
  },
  computed: {
    tableData() {
      const registrationList = this.$store.getters.registrationList
      const temp = registrationList.filter(value => {
        if (value.name === '张三') {
          return value
        }
      })
      return temp
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
