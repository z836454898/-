import Layout from "@/layout";

export default [
  {
    path: '/activity',
    component: Layout,
    name: 'activity',
    meta: {
      title: '二课活动',
      rule: 'admin',
    },
    children: [
      {
        path: 'release',
        name: 'release',
        component: () => import('@/views/activity/release'),
        meta: {
          title: '活动发布',
        }
      }, {
        path: 'list',
        name: 'list',
        component: () => import('@/views/activity/list'),
        meta: {
          title: '活动清单',
        }
      }, {
        path: 'registration',
        name: 'registration',
        component: () => import('@/views/activity/registration'),
        meta: {
          title: '学生报名',
        }
      }, {
        path: 'signIn',
        name: 'signIn',
        component: () => import('@/views/activity/signIn'),
        meta: {
          title: '签到设置',
        }
      }, {
        path: 'record',
        name: 'record',
        component: () => import('@/views/error'),
        meta: {
          title: '活动记录',
        }
      }
    ]
  }, {
    path: '/organization',
    component: Layout,
    name: 'organization',
    meta: {
      title: '组织管理', rule: 'admin'
    },
    children: [
      {
        path: '',
        name: 'organization',
        component: () => import('@/views/team/index'),
        meta: {
          title: '组织管理'
        }
      }
    ]
  }, {
    path: '/personManage',
    component: Layout,
    name: 'personManage',
    meta: {
      title: '师生管理',
      rule: 'admin',
    },
    children: [
      {
        path: 'teacher',
        name: 'teacher',
        component: () => import('@/views/error'),
        meta: {
          title: '教师管理'
        }
      },
      {
        path: 'student',
        name: 'student',
        component: () => import('@/views/person/student'),
        meta: {
          title: '学生管理'
        }
      },
      {
        path: 'addForm',
        hidden: true,
        name: 'addStudent',
        component: () => import('@/views/person/student/addForm'),
        meta: {
          title: '创建学生'
        }
      },
    ]
  }, {
    path: '/projectReport',
    component: Layout,
    name: 'projectReport',
    meta: {
      title: '项目申报',
      rule: 'admin',
    },
    children: [
      {
        path: 'release',
        name: 'release',
        component() {
          return import('@/views/projectReport/release')
        },
        meta: {title: '发布项目'}
      }, {
        path: 'record',
        name: 'record',
        component() {
          return import('@/views/projectReport/record')
        },
        meta: {title: '申报记录'}
      },{
      path:'list',
        name:'list',
        component(){return import('@/views/projectReport/list')},
        meta: {title: '申报列表'}
      }
    ]
  },{
  path:'/creditAccount',
    component: Layout,
    name: 'creditAccount',
    meta: {
      title: '学分统计',
      rule: 'admin',
    },
    children: [
      {
        path: '',
        name: 'creditAccount',
        component: () => import('@/views/error'),
        meta: {
          title: '学分统计'
        }
      }
    ]
  },{
    path:'/message',
    component: Layout,
    name: 'message',
    meta: {
      title: '消息管理',
      rule: 'admin',
    },
    children: [
      {
        path: 'list',
        name: 'messageList',
        component: () => import('@/views/message/index'),
        meta: {
          title: '消息列表'
        }
      },
      {
        path: 'release',
        name: 'releaseMessage',
        component: () => import('@/views/message/release'),
        meta: {
          title: '发布消息'
        }
      }
    ]
  },{
    path:'/system',
    component: Layout,
    name: 'system',
    meta: {
      title: '系统设置',
      rule: 'admin',
    },
    children: [
      {
        path: 'account',
        name: 'account',
        component: () => import('@/views/system/account'),
        meta: {
          title: '账号管理'
        }
      },
      {
        path: 'authority',
        name: 'authority',
        component: () => import('@/views/error'),
        meta: {
          title: '权限管理'
        }
      },
      {
        path:'addAccount',
        hidden:true,
        component: ()=>import('@/views/system/addAccount'),
        name: 'addAccount',
        meta: {
          title: '添加账户',
        },
      }
    ]
  }
]
