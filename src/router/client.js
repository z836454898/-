import Layout from "@/layout";
import layout from "@/layout";

export default [
  {
    path: '/activity',
    component: Layout,
    name: 'activity',
    meta: {
      title: '二课活动',
      rule: 'client',
    },
    children: [
      {
        path: 'enroll',
        name: 'enroll',
        component: () => import('@/views/client/activity/enroll/list'),
        meta: {
          title: '活动报名',
        }
      },
      {
        path: 'myEnroll',
        name: 'myEnroll',
        component: () => import('@/views/client/activity/myEnroll'),
        meta: {
          title: '我的报名',
        }
      },
      {
        path: 'register',
        name: 'register',
        component: () => import('@/views/error/index'),
        meta: {
          title: '活动签到',
        }
      },
    ]
  }, {
    path: '/project',
    component: layout,
    name: "project",
    meta: {
      title: '项目申报',
      rule: "client",
    },
    children:[
      {
        path: 'releaseProject',
        name: 'releaseProject',
        component: () => import('@/views/client/project/release'),
        meta: {
          title: '发布申报',
        }
      },
      {
        path: 'myDeclare',
        name: 'myDeclare',
        component: () => import('@/views/client/project/myProjectReport'),
        meta: {
          title: '我的申报',
        }
      }
    ]
  },{
    path: '/message',
    component: layout,
    name: "message",
    meta: {
      title: '信息管理',
      rule: "client",
    },
    children:[
      {
        path: 'myTeam',
        name: 'myTeam',
        component: () => import('@/views/client/message/myTeam'),
        meta: {
          title: '我的团队',
        }
      },
      {
        path: 'personal',
        name: 'personal',
        component: () => import('@/views/client/message/personal'),
        meta: {
          title: '个人信息',
        }
      },
      {
        path: 'addTeam',
        name: 'addTeam',
        hidden:true,
        component: () => import('@/views/client/message/teamAdd'),
        meta: {
          title: '创建团队',
        }
      },
    ]
  }
]
