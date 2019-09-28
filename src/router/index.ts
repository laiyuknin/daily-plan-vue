import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

// 路由懒加载
const setComponent = (name: string) => () => import(`../views/${name}.vue`);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: setComponent('Home/index'),
    },
  ],
});
