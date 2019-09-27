<template>
    <div>
        <WebHero />
        <ProjectDescription />
        <v-row class="project_description" no-gutters justify="center">
            <v-col cols="12" xs="12" sm="12" md="6">
                <img class="project_description-img" :src="requireImg(currentProject.smallImg)" />
            </v-col>
            <v-col cols="12" xs="12" sm="12" md="6">
                <img class="project_description-img" :src="requireImg(currentProject.smallImg2)" />
            </v-col>
        </v-row>
            <ProjectTechniques />
        <Footer />
    </div>

</template>

<script>
    import Footer from '../layouts/Footer';
    import WebHero from '../layouts/webHero'
    import ProjectDescription from '../_assets/_projectDescription'
    import ProjectTechniques from '../_assets/_projectTechniques'
    import {
        mapState,
        mapMutations
    } from 'vuex'
    export default {
        components: {
            Footer,
            WebHero,
            ProjectDescription,
            ProjectTechniques
        },
        computed: {
            ...mapState('webProjects', ['currentProject', 'projects'])
        },
        beforeMount() {
            this.SET_CURRENT_PROJECT()
        },
      
        methods: {
            ...mapMutations('webProjects', ['SET_CURRENT_PROJECT']),
            requireImg(img) {
                return require('../../assets/images/' + img)
            },
        }
    }
</script>

<style>

</style>