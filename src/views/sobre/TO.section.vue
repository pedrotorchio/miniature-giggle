<script>
import { TweenMax, SlowMo } from 'gsap';

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
        initializeLine() {
            const el = this.$el.querySelector('.site-line path');
            const length = el.getTotalLength();

            TweenMax.set(el, {
                visibility: 'visible',
                strokeDasharray: length,
                strokeDashoffset: length
            });

            return el;
        },
        animate() {
            const el = this.initializeLine();
            
            TweenMax.to(el, 1, {
                strokeDashoffset: 0,  
                ease: SlowMo.ease.config(0.5, 0.7, false)
            });
        }
    },
    mounted() {
        // setTimeout(this.animate, 0)
    }
}
</script>
<template lang="pug">
    section
        //- svg.cover.site-line( fill = "none")
        //-     path( :d="linePath" )
        
        h1
            span( v-for = "(lt, i) in h1TextArray" :key = "`${lt + i}`" ) {{ lt }}
        
</template>
<style lang="sass" scoped>
    svg
        visibility: hidden
    h1
        
</style>
