<template>
<span>
    <div v-if="hero" class="navigation" ref="test">
        <router-link :to="link.url" ref="navLinks" v-for="(link, i) in navLinks" :key="i" class="headline nav-link" :class="link.color + '-nav-link'">
            {{link.title}} -</router-link>
    </div>
    
    <div v-if="!hero" class="r-navigation" ref="test">
        <router-link :to="'/'" ref="navLinks"  class="headline nav-link px-5 teal-nav-link'" :class="`${color}--text blue-nav-link`">
           - Home - </router-link>
        <router-link :to="link.url" ref="navLinks" v-for="(link, i) in navLinks" :key="i" class="headline nav-link  px-5" :class="` ${color}--text ${link.color}-nav-link  `">
           - {{link.title}} -</router-link>
    </div>
</span>

</template>

<script>
    export default {
        props:['hero', 'color'],
        data: () => ({
            navLinks: [{
                    title: "About",
                    color: "orange",
                    url: '/about'
                },
                {
                    title: "Web development",
                    color: "pink",
                    url: '/web'
                },
            ]
        }),
        mounted() {
            this.animateNavLinks();

        },
        methods: {
            animateNavLinks() {
                let tl = this.$anime.timeline({
                }).add({
                    targets: this.$refs.test,
                    translateY:30,
                    easing:'easeInOutSine',
                    duration:400,
                    opacity:1,
                    delay: 1500,
                })
            }
        }
    }
</script>

<style>

</style>