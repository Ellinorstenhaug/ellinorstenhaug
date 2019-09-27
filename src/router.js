import Vue from 'vue';
import VueRouter from 'vue-router';
import StartPageView from './components/views/StartPageView.vue'
import AboutView from './components/views/AboutView.vue'
import WebPortfolioView from './components/views/WebPortfolioView.vue'
import webProject from './components/views/WebProjectView.vue'

Vue.use(VueRouter);

const router = new VueRouter({
    scrollBehavior() {
        return {
            x: 0,
            y: 0
        };
    },
    mode: 'history',
    linkActiveClass: 'is-active',
    routes: [

        {
            path: '/',
            name: 'Start',
            component: StartPageView,
        },
        {
            path: '/about',
            name: 'About',
            component: AboutView,
        },
       
        {
            path: '/web',
            name: 'Web Portfolio',
            component: WebPortfolioView,
        },
       
        {
            path: '/web/:title',
            component: webProject,

            children: [{
                path: '',
                component: webProject
            }]
        },
       
    ]
});


export default router;