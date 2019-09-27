<template>

  <v-row class="d-section" no-gutters>
    <v-col class="about__image-wrap" cols="12" xs="12" sm="12" md="6">

      <img class="about__image" :src="requireImg('ellinor.png')" alt="">
    </v-col>
    <v-col cols="12" xs="12" sm="12" md="6" class="px-12">
      <div>
        <h1 class="display-3 bold mb-3 py-5">Ellinor Stenhaug</h1>
        <h3 class="headline uppercase bold teal-text mb-6">FrontEnd developer</h3>
        <p class="gray--text">
          Particularly interested in JavaScript, web design and problem solving.
          My combined interests in photography, graphic design and mathematics has generated a passion in web
          development, where I get to mix my creative and logical sides.
        </p>
        <!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque architecto, corporis molestias facere quia
          sed omnis nulla est repellat dolorum?</p> -->

      
      </div>
    </v-col>

  </v-row>
</template>

<script>
  export default {
    methods: {
      requireImg(img) {
        return require('../../assets/images/' + img)
      },
    }
  }
</script>

<style>

</style>