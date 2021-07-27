import Vue from 'vue';
import VueRouter from 'vue-router';
import Sample from '../views/sample.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Sample',
    component: Sample,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  next();
});

export default router;
