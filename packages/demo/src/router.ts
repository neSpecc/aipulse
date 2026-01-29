import { createRouter, createWebHistory } from 'vue-router';
import DemoPage from './views/DemoPage.vue';
import HawkPage from './views/HawkPage.vue';
import LinksPage from './views/LinksPage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'demo',
      component: DemoPage,
    },
    {
      path: '/hawk',
      name: 'hawk',
      component: HawkPage,
    },
    {
      path: '/links',
      name: 'links',
      component: LinksPage,
    },
  ],
});

export default router;
