const state={
  messageList:[
    {
      content:'测试消息',
      class:'测试班级',
      college:'测试学院',
    }
  ]
}

const mutations={
  MESSAGE_RELEASE: (state, message) => {
    state.messageList.splice(1, 0, message)
  },

  MESSAGE_DELETE: (state, message) => {
    state.messageList.forEach((value,index)=>{
      if (value.content===message.content){
        state.messageList.splice(index,1)
      }
    })
  },
}

export default {
  namespace: true,
  state,
  mutations,
}
