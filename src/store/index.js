import Vue from 'vue'
import Vuex from 'vuex'
import webProjects from './modules/webdevelopment'
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        webProjects
    }
})