<template>
<div class="techniques_wrapper gray-bg">

    <v-row class="medium-section gray-bg text-center pb-12 align-center project-techniques" justify="center" no-gutters>
            <v-col cols="12" xs="12" md="12">
                <h3 class="display-1 my-8 white-transparent-text">Frontend Techniques</h3>
            </v-col>

            <v-col cols="12" xs="6" sm="3" md="2" class="col-xs-6 test" v-for="(technique, i) in currentProject.techniques"
                :key="i" align="center">
                <v-card flat class="technique-card">
                    <img class="technique-img pt-2" :src="requireImg(technique.icon)" />
                    <v-card-text class="white-transparent-text">
                        {{technique.title}}
                    </v-card-text>
                </v-card>
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