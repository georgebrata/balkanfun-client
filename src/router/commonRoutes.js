import NotFound from '@views/partials/NotFound'
export default [
  {
    path: '/login',
    meta: {
      title: 'login',
      ignoreAuth: true
    },
    component: resolve => require(['@views/Login'], resolve)
  },
  {
    path: '/register',
    meta: {
      title: '登录',
      ignoreAuth: true
    },
    component: resolve => require(['@views/Register'], resolve)
  },
  {
    path: '/',
    meta: {
      title: 'Acasa',
      ignoreAuth: true
    },
    component: resolve => require(['@views/pages/HomePage'], resolve)
  },
  /*
  {
    path: '/',
    redirect: '/muie'
  },*/
  {
    path: '*',
    meta: {
      title: 'What?',
      ignoreAuth: true
    },
    component: NotFound
  }
]
