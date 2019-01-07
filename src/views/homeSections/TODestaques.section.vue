<script>
import { TweenMax, SlowMo, TimelineMax, Power2 } from 'gsap';
import lazyImage from 'v-lazy-image';
import hoverableImage from '@/components/hoverable-image';
import '@/components/svg/logo-head'
import AppAnimations from '@/mixins/AppAnimations.mixin';

export default {
    mixins: [ AppAnimations ],
    components: { hoverableImage },
    data: () => ({
        calls: [
            'Reabilitação Cognitivo Funcional',
            'Otimização de Habilidades',
            'Independência com Segurança',
            'Organização de Rotina',
            'Orientação ou Acompanhamento Familiar'
        ]
    }),
    computed: {
        callsTextArray() {
            return this.calls.map( call => call.split('') );
        }
    },
    methods: {
        animate() {
            const duration = 1;

            const callsLetters = this.calls.map( ( txt, i ) => Array.from(this.$refs[`call${i}Letters`]) );

            callsLetters
            .forEach( word => {
                word.forEach( lt => TweenMax.to(lt, .5, {
                    scale: 1,
                    autoAlpha: 1,
                    delay: Math.random() * duration
                }));
            })
            
            
        },
        // getStyling(i) {
        //     let styles = {}
            
        //     if (i == 0) {
        //         styles['alignSelf'] = 'flex-start';
        //     } else if (i == this.calls.length - 1) {
        //         styles['alignSelf'] = 'flex-end';
        //     } else {
        //         const   totalSpace = 400,
        //                 remainingLength = this.calls.length - 2,
        //                 step = totalSpace / remainingLength,
        //                 margin = -totalSpace/2 + (i - 1) * step;

        //         styles['marginLeft'] = `${margin}px`
        //     }
        //     return styles;
        // } 
    },
    mounted() {
        setTimeout(this.animate, 3000)
    }
}
</script>
<template lang="pug">
    section#destaques
        div.inner-section.split
            div.half
                h3( v-for = "( callLetters, i ) in callsTextArray" :key = "i" )
                    span( v-for = "( letter, j ) in callLetters" :key = "`${letter + j}`" :ref = "`call${i}Letters`") {{ letter }}
            div.half.logo-container
                transition( appear @enter = "(el, done) => logoEnter(el, done, false)" )
                    svgicon.logo( name = "logo-head" color = "#009688" )    
</template>
<style lang="sass" scoped>
.logo
    height: 300px
    width: 100%
.inner-section
    padding: 50px 0
h3
    margin: 1.5em
    font-size: 24px
    font-weight: 100
    position: relative

    transition-property: transform
    transition-duration: 1s

    // &:nth-child(3n + 1)
    //     align-self: flex-start
    // &:nth-child(3n + 2)
    //     align-self: center
    // &:nth-child(3n)
    //     align-self: flex-end

    span
        visibility: hidden
        transform: scale(2)

.logo-container
    display: flex
    align-items: center
</style>
