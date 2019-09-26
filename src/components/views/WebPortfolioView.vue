<template>
  <div class="dark-bg relative">
    <v-container>
      <Navigation :hero="false" color="white"/>
      <v-row no-gutters class="long-section project-view_overlay" ref="test" :class="hide ? 'fadeOut' : 'fadeIn'">
        <v-col cols="12" sm="10" md="7" offset-sm="1" offset-md="1" class="project-view_heading offset-xs-1"
          ref="title">
          <h1 class="display-4 bold py-5">Web projects</h1>
          <p class="">Projects made with passion.</p>
        </v-col>
      </v-row>
      <v-row class="xsmall-section " align="center">
        <v-col md="6" v-if="hide" ref="heading">
          <h2 class="display-3 bold py-3">Web projects</h2>
          <p>Projects made with passion.</p>
        </v-col>
      </v-row>
      <transition appear name="component-fade" mode="out-in" :duration="1000">
        <div class="medium-section">
          <div class="project-grid">
            <router-link :to="'/web/' + project.url" v-for="project in projects" :key="project.id"
              :ref="'image' + project.id" @click.native="imageAnimation(project.id)" class="project_link">
              <img :src="getImgUrl(project.smallImg)" alt="">
              <div class="project_overlay" :class="`${project.color}-overlay`">
                <p class="headline white--text project_overlay-title">{{project.title}}</p>
              </div>
            </router-link>
          </div>
        </div>
      </transition>
    </v-container>
  </div>


</template>

<script>
import Navigation from '../Navigation'
  import {
    mapState
  } from 'vuex'
  export default {
    computed: {
      ...mapState('webProjects', ['projects'])
    },
    components:{
      Navigation
    },
    data: () => ({
      scrolled: false,
      fadeStart: window.innerHeight / 2,
      fadeUntil: window.innerheight - 200,
      scroll: 0,
      opacity: 0,
      hide: false,
      textAnimation: true,
      showHeading: false,
    }),
    created() {
      window.addEventListener('scroll', this.handleScroll);

    },
    destroyed() {
      window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll() {
        this.scroll = window.scrollY
        if (this.scroll > 20) {
          this.hide = true;
          if (this.textAnimation) {
            this.animateOverlay()
            this.textAnimation = false;
          }
        }

      },
      animateOverlay() {
        console.log("animera!");
        this.showHeading = true;
        console.log(this.showHeading)
        this.$anime.timeline({
          targets: this.$refs.title,
          duration: 2000,
          translateY: -100,
        }).add({
          targets: this.$refs.title,
          opacity: 0,
          duration: 3000
        }).add({
          targets: this.$refs.heading,
          translateY: 100,
          duration: 200,
        })
      },

      getImgUrl(projectSrc) {
        return require("../../assets/images/" + projectSrc);

      },
      imageAnimation(id) {

        this.$anime.timeline({
            targets: this.$refs[id],
          })
          .add({
            targets: this.$refs[id],
            width: '100vw',
            transformX: 300,
            easing: 'easeInOutSine',
            duration: 2000,
          })

        //här

      }

    }
  }
</script>

<style>
</style>