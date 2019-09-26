import Vue from 'vue'
import Vuex from 'vuex'
import photography from './modules/photography'
import webProjects from './modules/webdevelopment'
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        photography,
        webProjects
    }
})