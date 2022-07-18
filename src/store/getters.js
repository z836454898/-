const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  activityList:state=>state.activity.activityList,
  registrationList: state=>state.activity.registrationList,
  signInList: state=>state.signIn.signInList,
  routerList: state=>state.dynamicRouter.routerList,
  projectList: state=>state.projectReport.projectList,
  reportList: state=>state.projectReport.reportList,
  accountList: state=>state.account.accountList,
  studentList:state=>state.student.studentList,
  teamList: state=>state.team.teamList,
  messageList:state=>state.message.messageList,
}
export default getters
