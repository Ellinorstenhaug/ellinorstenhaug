<template>
  <div class="dark-bg relative">
    <Navigation :hero="false"/>
    <v-container>

      <v-row no-gutters class="long-section photo-view_overlay" ref="test" :class="hide ? 'fadeOut' : 'fadeIn'">
        <v-col cols="12" sm="10" md="7" offset-sm="1" offset-md="1" class="photo-view_heading offset-xs-1" ref="title">
          <h1 class="display-4 bold py-5">Photography</h1>
          <p class="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, est. Odio aspernatur adipisci
            corporis
            voluptatibus reiciendis. Aut vitae amet recusandae?</p>
        </v-col>
      </v-row>
      <v-row class="xsmall-section " align="center">
        <v-col md="6" v-if="hide" ref="heading">
          <h2 class="display-3 bold py-3">Photography</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis ea ipsam sint nihil quasi, maiores iusto a
            possimus rem placeat.</p>
        </v-col>
      </v-row>
      <transition appear name="component-fade" mode="out-in" :duration="1000">
        <div class="medium-section">
          <div class="picture-grid">

            <div @click="openModal(photo)" v-for="photo in photos" :key="photo.id" :ref="'image' + photo.id"
              class="photo_link">
              <img class="photo_img" :src="getImgUrl(photo.img)" alt="">

              <div class="photo_overlay" :class="`${photo.color}-overlay`">
                <p class="headline white--text photo_overlay-title">{{photo.title}}</p>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </v-container>

    <v-dialog v-model="dialog">
      <!-- <v-card> -->

      <img class="modal-img" v-if="currentPhoto" :src="getImgUrl(currentPhoto.img)" />
      <!-- <v-card-title class="headline">Use Google's location service?</v-card-title>
{{currentPhoto}}
      </!-->
    </v-dialog>
  </div>


</template>

<script>
  import Navigation from '../Navigation'

  import {
    mapState
  } from 'vuex'
  export default {
    components:{
      Navigation
    },
    computed: {
      ...mapState('photography', ['photos'])
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
      dialog: false,
      currentPhoto: null
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
      openModal(photo) {
        this.dialog = true;
        this.currentPhoto = photo;
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

      getImgUrl(photosrc) {
        return require("../../assets/images/" + photosrc);

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