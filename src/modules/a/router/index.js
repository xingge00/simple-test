const constRouter = [
  {
    path: '/Aa',
    component: () => import('@/modules/a/views/Aa'),
  },
  {
    path: '/Ab',
    component: () => import('@/modules/a/views/Ab'),
  },
  {
    path: '/Ac',
    component: () => import('@/modules/a/views/Ac'),
  },
]
export default constRouter
