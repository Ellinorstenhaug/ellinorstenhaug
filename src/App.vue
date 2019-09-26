<template>
  <v-app dark ref="test">
    <v-content>
      <!-- <vue-page-transition name="fade-in-right"> -->
        <router-view :key="$route.path" />
      <!-- </vue-page-transition> -->
    </v-content>
  </v-app>
</template>

<script>
  import Footer from './components/footer/Footer'

  export default {
    name: 'App',
    components: {
      Footer
    },
    data: () => ({}),
    methods: {
      randomize() {
        let random = Math.floor(Math.random() * 4);
        if (random == 1) {
          return 'overlay-up-full'
        }
        if (random == 2) {
          return 'overlay-down-full'
        }
        if (random == 3) {
          return 'overlay-left-full'
        }
        if (random == 4) {
          return 'overlay-right-full'
        }
      }
    }
  };
</script>