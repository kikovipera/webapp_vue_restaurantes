// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import Home from './components/Home.vue';
import Contacto from './components/Contacto.vue';
import RestauranteTop from './components/RestauranteTop.vue';
import RestauranteList from './components/RestaurantesList.vue';
import Restaurante from './components/Restaurante.vue';
import RestauranteAdd from  './components/RestauranteAdd';
import RestauranteEdit from './components/RestauranteEdit';


Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [

  {path: '/crear-restaurante', name: 'crear-restaurante', component: RestauranteAdd},
  {path: '/restaurante/:id', name: 'restaurante', component: Restaurante},
  {path: '/editar-restaurante/:id', name: 'editar-restaurante', component: RestauranteEdit},
  {path: '/restaurantes', component: RestauranteList},
	{path: '/restaurante-destacado/:id', name: 'restaurante-destacado', component: RestauranteTop},
	{path: '/contacto', component: Contacto},
	{path: '/home', component: Home},
	{path: '/', component: Home}
];

const router = new VueRouter({
	routes,
	mode: 'history'
})

Vue.component('home', Home);
Vue.component('contacto', Contacto);




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
