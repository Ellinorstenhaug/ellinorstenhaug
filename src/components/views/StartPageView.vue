<template>
  <div class="dark-bg hero" :class="startPage ? 'fixed' : 'block'">
    <Links />
    <Lines />
    <div ref="greeting" class="greeting text-center">
      <h1 class="display-4 py-5 bold">Hello there,</h1>
      <p class="headline"> I'm Ellinor!</p>
      <p class="thin">I am a frontend developer with passion with passion for web development, graphic design and
        problem solving. <br> I constantly seek new opportunities to create projects with value.</p>
      <p class="thin">
      </p>
      <p class="small caption white-transparent-text">A user interface is like a joke, if you have to explain it, it's
        not that good. :)</p>
      <div class="small-line mb-7"></div>
    </div>
    <Navigation :hero="true" color="white" />
  </div>
</template>

<script>
  import Lines from '../_assets/_heroLines';
  import Links from '../_assets/_links'
  import Navigation from '../layouts/Navigation'
  export default {
    components: {
      Lines,
      Navigation,
      Links
    },
    data: () => ({
      startPage: true,
    }),
    mounted() {
      this.animateGreeting();
    },
    methods: {
      animateGreeting() {
        this.$anime.timeline({
          targets: this.$refs.greeting,
          duration: 3000
        }).add({
          opacity: 1,
          delay: 1000
        })
      }

    }
  };
</script>