const constRouter = [
  {
    path: '/',
    component: () => import('@/views/index'),
  },
  {
    path: '/login',
    component: () => import('@/views/login'),
  },
]
export default constRouter
