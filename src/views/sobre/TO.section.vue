<script>
import { TweenMax, SlowMo, TimelineMax } from 'gsap';

export default {
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
                .set(this.$refs['cta'], {
                    visibility: 'visible'
                })
                .staggerFrom( this.$refs['ctaLetters'], 1, { 
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
        
        h1.section-title
            span( ref = "h1TextLetters" v-for = "(lt, i) in h1TextArray" :key = "`${lt + i}`" ) {{ lt }}
        
</template>
<style lang="sass" scoped>
    .hidden
        visibility: hidden
        
</style>
