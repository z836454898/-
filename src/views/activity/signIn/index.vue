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
      prop="activityName"
      label="活动名称">
    </el-table-column>

    <el-table-column
      prop="status"
      label="签到状态">
    </el-table-column>

    <el-table-column
      label="操作">
      <template v-slot="{row}">
        <div style="display: flex;justify-content: center;align-items: center">

          <el-popover
            placement="bottom"
            v-model="visible[row.name]"
            width="160">
            <div style="text-align: right; margin: 0">
              <el-button size="mini"
                         type="text"
                         @click="changeStatus(row,'出勤')">出勤
              </el-button>

              <el-button type="text"
                         size="mini"
                         @click="changeStatus(row,'缺勤')">缺勤
              </el-button>

              <el-button type="text"
                         size="mini"
                         @click="changeStatus(row,'请假')">请假
              </el-button>
            </div>

            <el-button type="default"
                       slot="reference"
                       size="mini">更新状态
            </el-button>
          </el-popover>

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
    this.tableData = this.$store.getters.signInList
  },
  data() {
    return {
      tableData: [],
      visible:{}
    }
  },
  methods:{
    changeStatus(row,status){
      this.$store.commit('SIGNIN_CHANGE',{
        signIn:row,
        status:status
      })
      this.$message.success('操作成功')
      this.visible[row.name] = false
    },
  }
}
</script>

<style scoped>

</style>
