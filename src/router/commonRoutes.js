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
      title: 'register',
      ignoreAuth: true
    },
    component: resolve => require(['@views/Register'], resolve)
  },
  {
    path: '/error',
    meta: {
      title: 'Oups! An error occured',
      ignoreAuth: true
    },
    component: resolve => require(['@views/ErrorPage'], resolve)
  },
  {
    path: '/',
    redirect: '/acasa'
  },
  {
    path: '*',
    meta: {
      title: 'What?',
      ignoreAuth: true
    },
    component: NotFound
  }
]

