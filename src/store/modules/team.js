const state = {
  teamList: [
    {
      name: '测试团队1',
      count: 3,
      limit: 5,
      leader: '张三',
    },
    {
      name: '测试团队2',
      count: 2,
      limit: 6,
      leader: '李四',
    }
  ]
}

const mutations = {
  TEAM_DEL(state, team) {
    state.teamList.forEach((value, index) => {
      if (value.name === team.name) {
        state.teamList.splice(index, 1)
      }
    })
  },

  TEAM_ADD(state,team){
    state.teamList.splice(1, 0, team)
  }
}

export default {
  namespace: true,
  state,
  mutations,
}

