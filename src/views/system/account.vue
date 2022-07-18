<template>
  <div style="padding: 20px">
    <router-link to="/system/addAccount">
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
        prop="username"
        label="账号"
        width="180">
      </el-table-column>

      <el-table-column
        prop="id"
        label="学号">
      </el-table-column>

      <el-table-column
        prop="disable"
        label="是否被禁用">
      </el-table-column>

      <el-table-column
        label="操作">
        <template v-slot="{row}">
          <div style="display: flex;justify-content: center;align-items: center">
            <el-button type="default"
                       @click="()=>{
                         $store.commit('ACCOUNT_DELETE',row)
                         $message.success('操作成功')
                       }"
                       size="mini">删除
            </el-button>

            <el-popover
              placement="bottom"
              v-model="visible[row.name]"
              width="160">
              <div style="text-align: right; margin: 0">
                <el-button size="mini"
                           type="text"
                           @click="audit(row,'否')">否
                </el-button>
                <el-button type="primary"
                           size="mini"
                           @click="audit(row,'是')">是
                </el-button>
              </div>

              <el-button type="default"
                         slot="reference"
                         size="mini">更改状态
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
    this.tableData = this.$store.getters.accountList

    console.log(this.$store.getters.accountList);
  },
  data() {
    return {
      tableData: [],
      visible: {}
    }
  },
  methods: {
    audit(row, disable) {
      this.$store.commit('ACCOUNT_DISABLE', {
        account: row,
        disable: disable
      })
      this.$message.success('操作成功')
      this.visible[row.name] = false
    }
  }
}
</script>

<style scoped>

</style>
