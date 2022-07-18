const state={
  projectList:[
    {
      name:'测试申报',
      notes:'说明',
      grade:'测试年级',
      college:'测试学院',
      major:'测试专业',
      class:'测试班级',
      classOrganization:'测试班级组织',
      collegeOrganization:'测试学院组织',
      associationOrganization:'测试社团组织',
      workingHoursUp:'5',
      workingHoursDown:'1',
      pointUp:'2',
      pointDown:'1',
    }
  ],
  reportList:[
    {
      name:'测试申报',
      report:'张三',
      pattern:'个人申报',
      audit:'未审核',
      team:'测试团队1',
    }
  ]
}

const mutations={
  PROJECT_REPORT(state,project){
    state.projectList.splice(1,0,project)
  },

  REPORT_DELETE(state,report){
    state.reportList.forEach(value => {
      if (
        report.report===value.report&&
        report.name===value.name
      ){
        state.reportList.splice(
          state.reportList.indexOf(value), 1
        )
      }
    })
  },

  REGISTRATION_DELETE(state, project){
    state.projectList.forEach(value => {
      if (
        value.name === project.name
      ) {
        state.projectList.splice(
          state.projectList.indexOf(value), 1
        )
      }
    })
  },

  REPORT_AUDIT(state, {report, audit}){
    state.reportList.forEach(value => {
      if (
        value.name === report.name&&
        value.report===report.report
      ) {
        value.audit=audit
      }
    })
  },
}

export default {
  namespace: true,
  state,
  mutations,
}
