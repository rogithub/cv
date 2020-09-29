import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

import contactView from "./views/contact.vue";
import indexView from "./views/index.vue";
import notFoundView from "./views/index.vue";

const routes = [
    { path: '/', redirect: '/index' }
    , { path: '/index', name: 'index', component: indexView }
    , { path: '/contact', name: 'contact', component: contactView }
    , { path: '*', component: notFoundView },
]

Vue.use(VueRouter);

const router = new VueRouter({
    routes
})

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')