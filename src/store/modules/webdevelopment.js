import webDevelopmentJson from '../../services/webdevelopment.json'
import router from '@/router'

const state = {
    projects: webDevelopmentJson,
    currentProject: null,
}
const getters = {}
const actions = {}
const mutations = {
    SET_CURRENT_PROJECT:(state)=> {
        let url = router.currentRoute.params.title
        let currentObject = state.projects.find(project => project.url == url) 
        state.currentProject = currentObject;
    }
}

export default {
    namespaced:true,
    state,
    getters,
    mutations,
    actions
}