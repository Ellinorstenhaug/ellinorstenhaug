<template>
  <v-row class="white--text medium-section  text-center dark-bg capabillities" align="center" justify="center" no-gutters>
    <v-col cols="12" xs="12">
      <h3 class="display-2 pb-12 bold">
        Capabillities
      </h3>
    </v-col>
    <v-col cols="12" xs="12" sm="4" md="3" class="px-5 py-5" v-for="(capabillity, i) in capabillities" :key="i">
      <img class="capabillity-img" :src="requireImg(capabillity.icon)"/>
      <p>{{capabillity.title}}</p>
    </v-col>
  </v-row>

</template>

<script>
  export default {
    data: () => ({
      capabillities: [{
          title: "Vue",
          icon: "vue.svg"
        },
        {
          title: "Vuex",
          icon: "vuex.svg"
        },
        {
          title: "React",
          icon: "react.svg"
        },
        // {
        //   title: "Redux",
        //   icon: "redux.svg"
        // },
        {
          title: "Javascript",
          icon: "javascript.svg"
        },
        {
          title: "HTML",
          icon: "html.svg"
        },
        {
          title: "Sass",
          icon: "sass.svg"
        },
        {
          title: "CSS3",
          icon: "css3.svg"
        },
        {
          title: "Umbraco",
          icon: "umbraco.svg"
        },
        {
          title: "Materialize CSS",
          icon: "materializecss.svg"
        },
        {
          title: "Adobe Illustrator",
          icon: "illustrator.svg"
        },
        // {
        //   title: "Adobe Photoshop",
        //   icon: "photoshop.svg"
        // },
        {
          title: "Adobe XD",
          icon: "xd.svg"
        },
      ]
    }),
    methods:{
      requireImg(img) {
        return require('../../assets/images/icons/' + img)
      },
    }

  }
</script>

<style>

</style>