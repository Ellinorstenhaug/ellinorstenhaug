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
  import Links from '.././_assets/_links';
  import AboutDescription from '../_assets/_aboutDescription';
  import AboutCapabillities from '../_assets/_aboutCapabillities'
  import Footer from '../layouts/Footer';
  import Navigation from '../layouts/Navigation'
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