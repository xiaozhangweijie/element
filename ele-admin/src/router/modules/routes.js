/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const routesRouter = {
  path: '/manage',
  component: Layout,
  redirect: '/manage/userList',
  name: 'Manage',
  meta: {
    title: '数据管理',
    icon: 'table'
  },
  children: [
    {
      path: 'userList',
      component: () => import('@/views/table/dynamic-table/index'),
      name: 'UserList',
      meta: { title: '用户列表' }
    },
    {
      path: 'shopList',
      component: () => import('@/views/table/drag-table'),
      name: 'ShopList',
      meta: { title: '商家列表' }
    }
  ]
}
export default routesRouter
