<script>
import { TweenMax, SlowMo, TimelineMax, Power2 } from 'gsap';
import hoverableImage from '@/components/hoverable-image';

import Section from '@/mixins/Section.mixin';

export default {
    extends: Section,
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
        animate(timeline) {
            const delay = .8;

            timeline
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
                
                timeline.fromTo( text, delay, {
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
                    timeline.fromTo( str, delay/2, {
                        autoAlpha: 0,
                        left: -50,
                    }, {
                        autoAlpha: 1,
                        left: 0,
                        ease: Power2.easeOut
                    }, textOffset + j * .2);
                })
            })
            timeline
                .addCallback(() => this.$el.querySelector('#img #call-text').classList.add('shown'));


        }
    }
}
</script>
<template lang="pug">
    section#terapia-ocupacional
        div.inner-section
            div.left.half    
                hoverable-image#img.cover(
                    :hoverable = "false"
                    src = "/assets/imgs/terapia-ocupacional.jpg"
                    src-placeholder = "/assets/imgs/terapia-ocupacional-tiny.jpg" )
                    
                    div#call-text
                        h3( y="110px" x="30px" dominant-baseline="text-before-edge" ) O que
                        h3( y="175px" x="30px" dominant-baseline="text-before-edge" ) é mais
                        h3( y="240px" x="30px" dominant-baseline="text-before-edge" ) importante.
            div.right.half
                span.border.top
                span.border.right
                span.border.bottom
                span.border.left
                h1.section-titimelinee
                    span.hidden( ref = "h1TextLetters" v-for = "(lt, i) in h1TextArray" :key = "`${lt + i}`" ) {{ lt }}
                p.text-area( v-html = "text1")
                p.text-area( v-html = "text2")
                p.text-area( v-html = "text3")
            
</template>
<style lang="sass" scoped>
@import "~@/styles/config";

.inner-section
    display: flex

.text-area
    margin: 1em 0
    text-align: justify
    text-indent: 2em
    font-size: 18px

.section-titimelinee
    z-index: 5
    text-align: left
    text-transform: uppercase

.half
    width: 50%
    height: 100%
    position: relative
    padding: 50px
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

#img /deep/ #call-text 
    
    width: 100%
    height: 100%

    h3
        +shown(false)
        position: relative
        top: 40px
        left: 40px
        transition-property: transform, opacity, color
        font-size: 64px
        text-transform: uppercase
        font-weight: bold
        font-family: Impact, sans-serif
        color: rgba(255, 255, 255, .8)
        margin: 0
        margin-bottom: -10px

#img /deep/ #call-text.shown h3
    +shown(true)
    &:nth-child(1)
        transition-delay: 0s
    &:nth-child(2)
        transition-delay: .2s
    &:nth-child(3)
        transition-delay: .4s
        color: rgba($color--secondary, 1)
#img:hover /deep/ #call-text.shown text
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
