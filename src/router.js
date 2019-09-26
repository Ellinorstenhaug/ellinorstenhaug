import Vue from 'vue';
import VueRouter from 'vue-router';
import HeroView from './components/views/HeroView.vue'
import AboutView from './components/views/AboutView.vue'
import PhotographyView from './components/views/PhotographyView.vue'
import WebPortfolioView from './components/views/WebPortfolioView.vue'
import photography from './components/views/photography.vue'
import webProject from './components/views/webproject.vue'

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
            component: HeroView,
        },
        {
            path: '/about',
            name: 'About',
            component: AboutView,
        },
        {
            path: '/photography',
            name: 'Photography Portfolio',
            component: PhotographyView,
        },
        {
            path: '/web',
            name: 'Web Portfolio',
            component: WebPortfolioView,
        },
        {
            path: '/photography/:title',
            component: photography,

            children: [{
                path: '',
                component: photography
            }]
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