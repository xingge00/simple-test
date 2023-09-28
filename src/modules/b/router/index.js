const constRouter = [
  {
    path: '/Ba',
    component: () => import('@/modules/b/views/Ba'),
  },
  {
    path: '/Bb',
    component: () => import('@/modules/b/views/Bb'),
  },
  {
    path: '/Bc',
    component: () => import('@/modules/b/views/Bc'),
  },
]
export default constRouter
