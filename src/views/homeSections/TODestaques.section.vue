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

            call0Letters.forEach( lt => TweenMax.to(lt, .5, {
                autoAlpha: 1,
                delay: Math.random() * duration
            }));
            call1Letters.forEach( lt => TweenMax.to(lt, .5, {
                autoAlpha: 1,
                delay: Math.random() * duration
            }));
            call2Letters.forEach( lt => TweenMax.to(lt, .5, {
                autoAlpha: 1,
                delay: Math.random() * duration
            }));
            call3Letters.forEach( lt => TweenMax.to(lt, .5, {
                autoAlpha: 1,
                delay: Math.random() * duration
            }));
         
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
    font-size: 36px
    letter-space: 2px
    margin: 0
    text-transform: uppercase

    span
        visibility: hidden

    &:nth-child(1)
        text-align: left
    &:nth-child(2)
        text-align: left
        padding-left: 50%
    &:nth-child(3)
        text-align: right
        padding-right: 50%
    &:nth-child(4)
        text-align: right
    
</style>
