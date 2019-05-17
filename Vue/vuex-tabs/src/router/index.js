import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Tabs from '@/components/Tabs';
import Tables from '@/components/Tables';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },

    {
      path: '/tabs',
      name: 'Tabs',
      component: Tabs,
    },

    {
      path: '/tables',
      name: 'Tables',
      component: Tables,
    },

  ],
});
