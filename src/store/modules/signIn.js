const state={
  signInList:[
    {
      id:'0001',
      name:'张三',
      activityName:'测试活动',
      status:'出勤',
    },
    {
      id:'0002',
      name:'李四',
      activityName:'测试活动',
      status:'缺勤',
    },
    {
      id:'0003',
      name:'王五',
      activityName:'测试活动',
      status:'请假',
    },
  ]
}

const mutations={
  SIGNIN_CHANGE(state, {signIn, status}){
    state.signInList.forEach(value => {
      if (
        value.name === signIn.name&&
        value.activityName===signIn.activityName
      ) {
        value.status=status
      }
    })
  },
}

export default {
  namespace: true,
  state,
  mutations,
}
