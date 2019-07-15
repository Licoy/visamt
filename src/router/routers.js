import manageInc from '@/view/manage/inc'
export const manageRouter = [
  {
    path: '/',
    name: 'manage',
    meta: {
      title: '全局管理',
      hideInMenu: true
    },
    redirect: '/index',
    component: manageInc,
    children:[
      {path:'index', name:'manage_index', meta:{title:'控制台',icon:'ios-paper'}, component:()=>import('@/view/manage/index')},
      {path:'data', name:'manage_data', meta:{title:'访问数据',icon:'ios-paper'}, component:()=>import('@/view/manage/data')},
      {path:'analysis', name:'manage_analysis', meta:{title:'数据分析',icon:'ios-paper'},children:[
        {path:'1', name:'manage_analysis_1', meta:{title:'用户人群'}, component:()=>import('@/view/manage/index')},
        {path:'2', name:'manage_analysis_2', meta:{title:'终端设备'}, component:()=>import('@/view/manage/index')},
        {path:'3', name:'manage_analysis_3', meta:{title:'地域分布'}, component:()=>import('@/view/manage/index')},
      ]},
    ]
  }
]
export const sysRouter = [
  {
    path: '/401',
    name: 'error_401',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/401.vue')
  },
  {
    path: '/500',
    name: 'error_500',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/500.vue')
  },
  {
    path: '*',
    name: 'error_404',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/404.vue')
  }
]


export default manageRouter.concat(sysRouter)
