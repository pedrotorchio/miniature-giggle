<script>
import { TweenMax, SlowMo, TimelineMax, Power2 } from 'gsap';
import lazyImage from 'v-lazy-image';
import hoverableImage from '@/components/hoverable-image';

export default {
    components: { hoverableImage },
    data: () => ({
        calls: [
            'Atividades Cotidianas',
            'Qualidade de Vida',
            'Autonomia',
            'Individualidade'
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
            let { call0Letters, call1Letters, call2Letters, call3Letters } = this.$refs;

            call0Letters = Array.from(call0Letters);
            call1Letters = Array.from(call1Letters);
            call2Letters = Array.from(call2Letters);
            call3Letters = Array.from(call3Letters);

            [call0Letters, call1Letters, call2Letters, call3Letters, ]
            .forEach(word => {
                word.forEach( lt => TweenMax.to(lt, .5, {
                    scale: 1,
                    autoAlpha: 1,
                    delay: Math.random() * duration
                }));
            })
            
            
        }
    },
    mounted() {
        setTimeout(this.animate, 3000)
    }
}
</script>
<template lang="pug">
    section#destaques
        div.inner-section
            h3( v-for = "( callLetters, i ) in callsTextArray" :key = "i")
                span( v-for = "( letter, j ) in callLetters" :key = "`${letter + j}`" :ref = "`call${i}Letters`") {{ letter }}
</template>
<style lang="sass" scoped>

.inner-section
    display: flex
    justify-content: space-around
    flex-direction: column
    padding: 50px 0
h3
    font-family: impact
    font-size: 42px
    letter-space: 2px
    margin: 0
    text-transform: uppercase
    position: relative

    transition-property: transform
    transition-duration: 1s

    span
        visibility: hidden
        transform: scale(2)

    &:nth-child(1)
        align-self: flex-start
        transform: scale(1)
    &:nth-child(2)
        align-self: flex-start
        left: 50%
        transform: scale(1.2)
    &:nth-child(3)
        align-self: flex-end
        right: 50%
        transform: scale(1.1);
    &:nth-child(4)
        align-self: flex-end
        transform: scale(1);

    &:hover
        transform: scale(1.3) !important    
</style>
