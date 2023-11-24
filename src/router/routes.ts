import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('pages/Home.vue'),
  },
  {
    path: '/products',
    component: () => import('pages/Products.vue'),
  },
  {
    path: '/shop',
    component: () => import('pages/Shop.vue'),
  },
  {
    path: '/admin',
    component: () => import('pages/AdminPanel.vue'),
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
