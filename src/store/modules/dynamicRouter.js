import {constantRoutes} from "@/router";

const state = {
  routerList: []
}

const mutations = {
  SET_ROUTERS(state, routers) {
    state.routerList=constantRoutes.concat(routers)
  },
}

export default {
  namespace: true,
  state,
  mutations,
}
