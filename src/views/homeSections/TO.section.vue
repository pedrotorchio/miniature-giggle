<script>
import { TweenMax, SlowMo, TimelineMax, Power2 } from 'gsap';
import hoverableImage from '@/components/hoverable-image';
import Section from '@/mixins/Section.mixin';
import viewport from 'viewport-dimensions';

export default {
    extends: Section,
    components: { hoverableImage },
    data: () => ({
        h1Text: "Terapia Ocupacional",
        text1: "Profissão que busca ampliar a participação social dos clientes, considerando sua história de vida, seu contexto social, suas habilidades e motivações.",
        text2: "Preservando a individualizade dos clientes, o Terapeuta Ocupacional estimula a autonomia e independência com segurança, contribuindo para a sensação de bem estar.",

        imgEffect: false,
    }),
    computed: {
        h1TextArray() {
            return this.h1Text.split('')
        }
    },
    methods: {
        getTimelineParameters() {
            return {
                scrollTrigger: this.$el,
                scrollOffset: 100
            }
        },
        animate(timeline) {
            
            const delay = .8;
            const isMobile = viewport.width() < 769;
            const showImgText = () => {
                timeline
                    .addCallback(() => this.$el.querySelector('.img #call-text').classList.add('shown'));
            }
            
            if (isMobile)
                showImgText();

            timeline
                .from(this.$refs['image'].$el, 1, {
                    y: 100,
                    ease: SlowMo.easeOut
                })
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
                const textOffset = delay + .2 * i ;
                
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
            
            if (!isMobile)
                showImgText()

        }
    }
}
</script>
<template lang="pug">
    section#terapia-ocupacional
        div.inner-section.split
            div.left.half    
                hoverable-image.img.cover(
                    ref = "image"
                    :hoverable = "false"
                    src = "/assets/imgs/piano-hands.jpg"
                    src-placeholder = "/assets/imgs/piano-hands-tiny.jpg" )
                    
                    div#call-text
                        h3( y="110px" x="30px" dominant-baseline="text-before-edge" ) O que
                        h3( y="175px" x="30px" dominant-baseline="text-before-edge" ) é mais
                        h3( y="240px" x="30px" dominant-baseline="text-before-edge" ) importante.
            div.right.half
                h1.section-title
                    span.hidden( ref = "h1TextLetters" v-for = "(lt, i) in h1TextArray" :key = "`${lt + i}`" ) {{ lt }}
                p.text-area( v-html = "text1")
                p.text-area( v-html = "text2")
                //- p.text-area( v-html = "text3")
            
</template>
<style lang="sass" scoped>
@import "~@/styles/config"
@import '~media-query-mixins'

.text-area
    margin: 1em 0
    text-align: justify
    text-indent: 2em
    font-size: $size--text

.section-titimelinee
    z-index: 5
    text-align: left
    text-transform: uppercase

.right
    p
        visibility: hidden
        margin: .5em 0
        display: block
        line-height: 1.5em

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
.img
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)

.img /deep/ #call-text 
    
    width: 100%
    height: 100%

    h3
        +shown(false)
        position: relative
        top: 40px
        transition-property: transform, opacity, color
        text-transform: uppercase
        font-weight: bold
        font-family: Impact, sans-serif
        color: rgba(255, 255, 255, .8)
        margin: 0
        margin-bottom: -10px
        left: 10px
        font-size: 48px
        line-height: 1.2em
        +sm
            left: 40px
            font-size: 64px

.img /deep/ #call-text.shown h3
    +shown(true)
    &:nth-child(1)
        transition-delay: 0s
    &:nth-child(2)
        transition-delay: .2s
    &:nth-child(3)
        transition-delay: .4s
        color: rgba($color--secondary, 1)
.img:hover /deep/ #call-text.shown text
    +shown(false)
    &:nth-child(1)
        transition-delay: 0s
    &:nth-child(2)
        transition-delay: .1s
    &:nth-child(3)
        transition-delay: .2s


.left
    height: 400px
    width: 100%

    +sm
        height: initial
        width: initial
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
