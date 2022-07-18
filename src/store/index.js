import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import settings from './modules/settings'
import user from './modules/user'
import activity from "@/store/modules/activity";
import signIn from "@/store/modules/signIn";
import dynamicRouter from "@/store/modules/dynamicRouter";
import projectReport from "@/store/modules/projectReport";
import account from "@/store/modules/account";
import student from "@/store/modules/student";
import team from "@/store/modules/team";
import message from "@/store/modules/message";

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    settings,
    user,
    activity,
    signIn,
    dynamicRouter,
    projectReport,
    account,
    student,
    team,
    message,
  },
  getters
})

export default store
