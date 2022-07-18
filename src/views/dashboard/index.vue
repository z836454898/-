<template>
  <div class="dashboard-container">
    <img src="../../assets/stage.png">
    <h1 v-if="role==='admin'" style="color: #304156;">欢迎使用“第二课堂”系统综合服务平台项目管理后台</h1>
    <h1 v-if="role==='client'" style="color: #304156;">欢迎使用“第二课堂”系统综合服务平台项目学生端</h1>

    <div style="
    padding: 30px 0;
    display: flex;
    flex-direction: column;
    width: 50%;
" v-if="role==='client'">
      <h1>管理员消息：</h1>
      <p v-for="item in messageList">{{item.content}}</p>
    </div>

    <p style="width: 50%" v-if="role==='admin'">第二课堂是相对课堂教学而言的。如果说依据教材及教学大纲，在规定的教学时间里进行的课堂教学活动称之为第一课堂的话，那么第二课堂就是指在第一课堂外的时间进行的与第一课堂相关的教学活动。从教学内容上看，它源于教材又不限于教材；它无需考试，但又是素质教育不可缺少的部分。从形式上看，它生动活泼、丰富多彩。它的学习空间范围非常广大：可以在教室，也可以在操场；可以在学校，也可以在社会、家庭开展。</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import {getRole} from "@/utils/auth";

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name'
    ]),
    role(){
      return getRole()
    },
    messageList(){
      return this.$store.getters.messageList
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
