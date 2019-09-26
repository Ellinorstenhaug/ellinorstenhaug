<template>
    <div>

        <WebHero />

        <ProjectDescription />

        <!-- <routerLink :to="findPreviousPhoto()">Go Back</routerLink> -->
        <!-- <v-row justify="center" class="small-section">
            <v-col cols="12" sm="12'" justify="center">

                <h4 class="text-center">Icons</h4>
            </v-col>
            <v-col cols="12" xs="12" v-if="currentProject.extras" class="project_icons mb-12">
                <img class="project_icon-img mx-7" :src="requireImg(extra)"
                    v-for="(extra, i) in currentProject.extras.icons" :key="i" />
            </v-col>
        </v-row> -->
        <v-row class="project_description" no-gutters justify="center">
            <v-col cols="12" xs="12" sm="12" md="6">
                <img class="project_description-img" :src="requireImg(currentProject.smallImg)" />
            </v-col>
            <v-col cols="12" xs="12" sm="12" md="6">
                <img class="project_description-img" :src="requireImg(currentProject.smallImg2)" />
            </v-col>
        </v-row>


            <ProjectTechniques />

        <!-- <v-row no-gutters class="project_color-wrap">
            <v-btn class="color-display elevation-0" v-for="(col, i) in currentProject.projectColors" :key="i"
                :color="col">{{col}}</v-btn>
        </v-row> -->


        <Footer />
    </div>

</template>

<script>
    import Footer from '../footer/Footer';
    import WebHero from '../projects/WebHero'
    import ProjectDescription from '../projects/ProjectDescription'
    import ProjectTechniques from '../projects/ProjectTechniques'
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
            // this.findNextPhoto()
        },
        // watch: {
        //   '$route'(to, from) {
        //     alert('called it');
        //   }
        // },
        methods: {
            ...mapMutations('webProjects', ['SET_CURRENT_PROJECT']),
            requireImg(img) {
                return require('../../assets/images/' + img)
            },
            // findNextPhoto() {
            //     let nextPhoto = this.projects.find((project) => {
            //         let newNr = this.currentProject.id + 1
            //         return project.id === newNr;
            //     })
            //     return nextPhoto.url;
            // },
            // findPreviousPhoto() {
            //     let previousPhoto = this.projects.find((project) => {
            //         let newNr = this.currentProject.id - 1;
            //         return project.id === newNr;
            //     })
            //     return previousPhoto.url

            // }
        }
    }
</script>

<style>

</style>