<template>
    <div class="project_description">

        <v-row align="center" class="medium-section">
            <v-col cols="12" xs="12" sm="12" md="8" offset-md="2" class="pa-10 ">
                <h2 class="display-3 py-12 mb-10 bold">{{currentProject.heading}}</h2>
                <p><span class="bold">Year</span><br> 2019</p>

                <p>{{currentProject.description}}
                </p>
                <p>
                    Visit <a class="link" :class="`${currentProject.color}-text`"
                        :href="currentProject.href">{{currentProject.hrefText}} ></a>
                </p>
            </v-col>
            <v-col cols="12" sm="12" md="12" offset-md="2" class="px-12 " justify="center">

            </v-col>
        </v-row>


    </div>

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