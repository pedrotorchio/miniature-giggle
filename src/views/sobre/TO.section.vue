<script>
import { TweenMax, SlowMo, TimelineMax } from 'gsap';
import lazyImage from 'v-lazy-image';

export default {
    components: { lazyImage },
    data: () => ({
        h1Text: "Terapia Ocupacional"
    }),
    computed: {
        h1TextArray() {
            return this.h1Text.split('')
        },
        linePath() {
            if (!this.boundingBox)
                return "";

            const box = this.boundingBox;
            return `M 0 0 L ${box.width/3} ${box.height/2} L ${box.width/2} ${box.height*2/3} L ${box.width + 100} ${box.height}`;
        }
    },
    methods: {
        animate() {
            new TimelineMax({ onComplete: () => this.$emit('doneAnimating') })
                .set(this.$refs['h1TextLetters'], {
                    visibility: 'visible'
                })
                .staggerFrom( this.$refs['h1TextLetters'], 1, { 
                    autoAlpha:0, 
                    y: 50, 
                    ease: SlowMo.easeOut 
                }, 0.05)
        }
    },
    mounted() {
        setTimeout(this.animate, 0)
    }
}
</script>
<template lang="pug">
    section
        div.left.half
            h1.section-title
                span.hidden( ref = "h1TextLetters" v-for = "(lt, i) in h1TextArray" :key = "`${lt + i}`" ) {{ lt }}
            lazy-image#img(
                src = "/assets/imgs/terapia-ocupacional.jpg"
                src-placeholder = "/assets/imgs/terapia-ocupacional-tiny.jpg" )
        div.right.half
            p lorem
</template>
<style lang="sass" scoped>
    .section-title
        color: white
        z-index: 5
    .half
        width: 50%
        height: 100%

    .hidden
        visibility: hidden
    
    #img
        position: absolute;
        left: 0;
        width: 50%;
        height: 100%;
        object-fit: cover;
        object-position: left center;
</style>
