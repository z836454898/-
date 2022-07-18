<template>
  <div class="page-container"
       v-loading="true"
       element-loading-text="拼命加载中"
       element-loading-spinner="el-icon-loading">
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      timmer: null
    }
  },
  created() {
    this.timmer = window.setTimeout(() => {
      this.$message.error('系统崩溃了，请联系管理员处理')
    }, 1000)
  }
}
</script>

<style lang="scss" scoped>
.page-container {
  width: 100%;
  height: 90vh;
}
</style>
