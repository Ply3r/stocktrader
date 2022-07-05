import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/Home.vue';
import Portifolio from '../views/Portifolio.vue';
import Acoes from '../views/Acoes.vue';

export const routes = [
  {
    path: '/',
    name: 'Início',
    component: HomeView,
  },
  {
    path: '/portifolio',
    name: 'Portifolio',
    component: Portifolio,
  },
  {
    path: '/acoes',
    name: 'Ações',
    component: Acoes,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
