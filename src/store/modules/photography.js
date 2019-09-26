import photographyJson from '../../services/photography.json'
import router from '@/router'

const state = {
    photos: photographyJson,
    currentPhoto: null,
}
const getters = {}
const actions = {}
const mutations = {
    SET_CURRENT_PHOTO:(state)=> {
        let url = router.currentRoute.params.title
        let currentObject = state.photos.find(photo => photo.url == url) 
        state.currentPhoto = currentObject;
    }
}

export default {
    namespaced:true,
    state,
    getters,
    mutations,
    actions
}