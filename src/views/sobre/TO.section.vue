<script>
import { TweenMax, SlowMo, TimelineMax, Power2 } from 'gsap';
import lazyImage from 'v-lazy-image';
import hoverableImage from '@/components/hoverable-image';

export default {
    components: { hoverableImage },
    data: () => ({
        h1Text: "Terapia Ocupacional",
        text1: "Procura ampliar campos de <strong>ação e participação</strong>, considerando recursos e necessidades de acordo com o momento e lugar.",
        text2: "Considerando a <strong>individualidade</strong> de cada paciente, estimula condições de <strong>bem-estar e autonomia</strong>.",
        text3: "Por meio do fazer afetivo, relacional, material e produtivo o profissional contribui com os processos de produção de <strong>vida e saúde</strong>.",
        callMain: "O que mais importa pra você.",

        imgEffect: false,


        call0: "Possibilita ao indivíduo que execute suas <strong>atividades cotidianas</strong>",
        call01: "Visando sempre promover <strong>qualidade de vida.</strong>",
        call1: "Respeito ao <strong>indivíduo</strong> e anseios pessoais",
        call2: "Lares adequados ao <strong>estilo de vida</strong>",

    }),
    computed: {
        h1TextArray() {
            return this.h1Text.split('')
        }
    },
    methods: {
        animate() {
            const delay = .8;

            const tl = new TimelineMax({ onComplete: () => this.$emit('doneAnimating') })
                .set(this.$refs['h1TextLetters'], {
                    visibility: 'visible'
                })
                .staggerFrom( this.$refs['h1TextLetters'], delay, {
                    y: 50,
                    autoAlpha:0, 
                    ease: SlowMo.easeOut 
                }, delay/100, .5);

            const textAreas = Array.from(this.$el.querySelectorAll('.right .text-area'));

            textAreas.forEach((text, i) => {
                const textOffset = delay + delay * delay * i ;
                
                tl.fromTo( text, delay, {
                    autoAlpha: 0,
                    x: -50,
                }, {
                    autoAlpha: 1,
                    x: 0,
                    ease: Power2.easeOut
                }, textOffset);

                const strs = Array.from(text.querySelectorAll('strong'));

                strs.forEach( (str, j) => {
                    j++;
                    tl.fromTo( str, delay/2, {
                        autoAlpha: 0,
                        left: -50,
                    }, {
                        autoAlpha: 1,
                        left: 0,
                        ease: Power2.easeOut
                    }, textOffset + j * .2);
                })
            })
            tl
                .addCallback(() => this.$el.querySelector('#img svg').classList.add('shown'));


        }
    },
    mounted() {
        setTimeout(this.animate, 0)
    }
}
</script>
<template lang="pug">
    section#terapia-ocupacional
        div.narrow.section
            div.left.half    
                hoverable-image#img.cover(
                    :hoverable = "false"
                    src = "/assets/imgs/terapia-ocupacional.jpg"
                    src-placeholder = "/assets/imgs/terapia-ocupacional-tiny.jpg" )
                    
                    svg#call-text
                        text( y="110px" x="30px" dominant-baseline="text-before-edge" ) O que
                        text( y="175px" x="30px" dominant-baseline="text-before-edge" ) é mais
                        text( y="240px" x="30px" dominant-baseline="text-before-edge" ) importante.
            div.right.half
                span.border.top
                span.border.right
                span.border.bottom
                span.border.left
                h1.section-title
                    span.hidden( ref = "h1TextLetters" v-for = "(lt, i) in h1TextArray" :key = "`${lt + i}`" ) {{ lt }}
                p.text-area( v-html = "text1")
                p.text-area( v-html = "text2")
                p.text-area( v-html = "text3")
            
</template>
<style lang="sass" scoped>
@import "~@/styles/config";

.section
    display: flex

.text-area
    margin: 1em 0
    text-align: justify
    text-indent: 2em
    font-size: 22px

.section-title
    z-index: 5
    text-align: left
    text-transform: uppercase

.half
    width: 50%
    height: 100%
    position: relative
    padding: 100px 50px
    box-sizing: border-box

.right
    p
        visibility: hidden
        margin: .5em 0
        display: block

    p /deep/ strong
        position: relative

=shown($state)
    $trValue: -50px
    $opacity: 0
    $duration: .2s

    @if $state
        $trValue: 0
        $opacity: 1
        $duration: .5s

    transform: translateX(#{$trValue})
    opacity: $opacity
    transition-duration: $duration

#img /deep/ svg 
    
    width: 100%
    height: 100%

    text
        +shown(false)
        transition-property: transform, opacity, fill
        font-size: 64px
        padding: 0 20px
        text-transform: uppercase
        font-weight: bold
        font-family: Impact, sans-serif
        fill: rgba(255, 255, 255, .8)

#img /deep/ svg.shown text
    +shown(true)
    &:nth-child(1)
        transition-delay: 0s
    &:nth-child(2)
        transition-delay: .2s
    &:nth-child(3)
        transition-delay: .4s
        fill: rgba($color--secondary, 1)
#img:hover /deep/ svg.shown text
    +shown(false)
    &:nth-child(1)
        transition-delay: 0s
    &:nth-child(2)
        transition-delay: .1s
    &:nth-child(3)
        transition-delay: .2s


.left
    h2
        position: absolute;
        bottom: 10px;
        right: 100px;
        text-align: right;
        font-weight: bold
        font-size: 28px
        color: white
        text-shadow: 1px 2px 0px #00000061;

</style>
