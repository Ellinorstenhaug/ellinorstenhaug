<template>
    <div class="starter">
        <div ref="line" class="line">
            <div ref="line1" class=" line1"></div>
            <div ref="line2" class=" line2"></div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            this.animateStart()
        },
        methods: {
            animateStart() {
                this.$anime.timeline() 
                    .add({
                        targets: this.$refs.line1,
                        duration: 600,
                        height: '2000',
                        easing: 'easeInOutSine'
                    }).add({
                        targets: this.$refs.line2,
                        duration: 700,
                        height: '2000',
                        easing: 'easeInOutSine'
                    },'-=450')

            }
        }
    };
</script>