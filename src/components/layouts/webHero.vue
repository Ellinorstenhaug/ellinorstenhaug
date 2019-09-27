<template>
    <v-row no-gutters align="center" class="text-center">
        <div class="project-overlay_wrapper">
        <v-parallax :src="requireImg(currentProject.img)">
        </v-parallax>
        <div class="project-overlay"></div>
        <div class="project-overlay_heading">
            <h1 class="display-3 bold">{{currentProject.title}}</h1>
            <h2 class="display-1 pt-3">{{currentProject.introText}}</h2>
            </div>
        </div>
    </v-row>
</template>

<script>
    import {
        mapState
    } from 'vuex'
    export default {
        computed: {
            ...mapState('webProjects', ['currentProject', 'projects'])
        },
        methods: {
            requireImg(img) {
                return require('../../assets/images/' + img)
            },
        }
    }
</script>

<style>

</style>