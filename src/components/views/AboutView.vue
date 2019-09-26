<template>
  <div class="about">
    <Navigation :hero="false" color="black"/>
      <div class="about-orange-box"></div>

    <AboutDescription />

    <AboutCapabillities />
<Footer/>
  </div>
</template>

<script>
  import Links from '../Links';
  import AboutDescription from '../AboutDescription';
  import AboutCapabillities from '../AboutCapabillities'
  import Footer from '../footer/Footer';
  import Navigation from '../Navigation'
  export default {
    components: {
      Links,
      AboutDescription,
      AboutCapabillities,
      Footer,
      Navigation
    },
  }
</script>

<style>

</style>