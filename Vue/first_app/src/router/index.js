import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Contact from '@/components/Contact';
import Trying from '@/components/trying';
import AddMovie from '@/components/AddMovie';
import Movie from '@/components/Movie';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },

    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
    },

    {
      path: '/trying',
      name: 'Trying',
      component: Trying,
    },

    {
      path: '/movies/add',
      name: 'AddMovie',
      component: AddMovie,
    },

    {
      path: '/movies/:id',
      name: 'Movie',
      component: Movie,
    },
  ],
});
