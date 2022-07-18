const state = {
  activityList: [
    {
      name: '测试活动',
      type: '测试类型',
      workingHours: 10,
      integral: 20,
      method: '个人',
      scope: '面向学生',
      signIn: '扫码',
      audit: '未审核',
    },
    {
      name: '测试活动2',
      type: '测试类型2',
      workingHours: 10,
      integral: 20,
      method: '个人',
      scope: '面向老师',
      signIn: '定位',
      audit: '通过',
    },
    {
      name: '测试活动3',
      type: '测试类型3',
      workingHours: 20,
      integral: 30,
      method: '团队',
      scope: '面向学生',
      signIn: '定位',
      audit: '不通过',
    },
    {
      name: '测试活动4',
      type: '测试类型4',
      workingHours: 5,
      integral: 10,
      method: '个人',
      scope: '面向学生',
      signIn: '扫码',
      audit: '未审核',
    },
    {
      name: '测试活动5',
      type: '测试类型5',
      workingHours: 6,
      integral: 3,
      method: '个人',
      scope: '面向学生',
      signIn: '扫码',
      audit: '未审核',
    },
  ],
  registrationList:[
    {
      id:'0001',
      name:'张三',
      college:'测试学院',
      method:'团队',
      audit:'未审核',
      activityName:'测试活动',
    },
    {
      id:'0002',
      name:'李四',
      college:'测试学院',
      method:'团队',
      audit:'通过',
      activityName:'测试活动',
    },
    {
      id:'0003',
      name:'王五',
      college:'测试学院',
      method:'团队',
      audit:'未审核',
      activityName:'测试活动',
    },
  ],
}

const mutations = {
  ACTIVITY_RELEASE: (state, activity) => {
    state.activityList.splice(1, 0, activity)
  },
  ACTIVITY_DELETE: (state, activity) => {
    state.activityList.forEach(value => {
      if (value.name === activity.name) {
        state.activityList.splice(
          state.activityList.indexOf(value), 1
        )
      }
    })
  },
  ACTIVITY_AUDIT: (state, {activity, audit}) => {
    state.activityList.forEach(value => {
      if (value.name === activity.name) {
        value.audit=audit
      }
    })
  },

  REGISTRATION_AUDIT(state, {registration, audit}){
    state.registrationList.forEach(value => {
      if (
        value.name === registration.name&&
        value.activityName===registration.activityName
      ) {
        value.audit=audit
      }
    })
  },

  REGISTRATION_DELETE(state, registration){
    state.registrationList.forEach(value => {
      if (
        value.name === registration.name&&
        value.activityName===registration.activityName
      ) {
        state.registrationList.splice(
          state.registrationList.indexOf(value), 1
        )
      }
    })
  },

  REGISTRATION_ADD(state,registration){
    state.registrationList.splice(1, 0, registration)
  }
}

export default {
  namespace: true,
  state,
  mutations,
}
