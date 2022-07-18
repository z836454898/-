const state={
 studentList:[
   {
     name:'张三',
     class:'测试班级',
     college:'测试学院',
     id:'0001',
     gender:'男',
     tel:'12345678910',
     organization:'测试组织',
   }
 ]
}

const mutations= {
  STUDENT_ADD: (state, account) => {
    state.studentList.splice(1, 0, account)
  },

  STUDENT_DEL: (state, student) => {
    state.studentList.forEach(value => {
      if (value.name === student.name) {
        state.studentList.splice(
          state.studentList.indexOf(value), 1
        )
      }
    })
  },
}


export default {
  namespace: true,
  state,
  mutations,
}
