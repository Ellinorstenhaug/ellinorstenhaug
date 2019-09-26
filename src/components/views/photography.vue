<template>
  <div>
    <img class="photo-display" :src="requireImg()" alt="">
    <v-row>
      <v-col class="text-center" cols="12" xs="12">
        <h1>{{currentPhoto.title}}</h1>
        <!-- <routerLink :to="findPreviousPhoto()">Go Back</routerLink> -->

        <p>{{currentPhoto.description}}</p>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import {
    mapState,
    mapMutations
  } from 'vuex'
  export default {
    computed: {
      ...mapState('photography', ['currentPhoto', 'photos'])
    },
    beforeMount() {
      this.SET_CURRENT_PHOTO()
      this.findNextPhoto()
    },
    // watch: {
    //   '$route'(to, from) {
    //     alert('called it');
    //   }
    // },
    methods: {
      ...mapMutations('photography', ['SET_CURRENT_PHOTO']),
      requireImg() {
        return require('../../assets/images/' + this.currentPhoto.img)
      },
      findNextPhoto() {
        let nextPhoto = this.photos.find((photo) => {
          let newNr = this.currentPhoto.id + 1
          return photo.id === newNr;
        })
        return nextPhoto.url;
      },
      findPreviousPhoto() {
        let previousPhoto = this.photos.find((photo) => {
          let newNr = this.currentPhoto.id - 1;
          return photo.id === newNr;
        })
        return previousPhoto.url

      }
    }
  }
</script>

<style>

</style>