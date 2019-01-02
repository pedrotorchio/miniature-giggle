<script>
import { TweenMax, SlowMo, TimelineMax, Power2 } from 'gsap';
import lazyImage from 'v-lazy-image';

export default {
    components: { lazyImage },
    data: () => ({
        h1Text: "Terapia Ocupacional",
        text1: "Procura ampliar campos de <strong>ação e participação</strong>, considerando recursos e necessidades de acordo com o momento e lugar.",
        text2: "Considerando a <strong>individualidade</strong> de cada paciente, estimula condições de <strong>bem-estar e autonomia</strong>.",
        text3: "Por meio do fazer afetivo, relacional, material e produtivo o profissional contribui com os processos de produção de <strong>vida e saúde</strong>.",

        call0: "Possibilita ao indivíduo que execute suas <strong>atividades cotidianas</strong>",
        call01: "Visando sempre promover <strong>qualidade de vida.</strong>",
        call1: "Respeito ao <strong>indivíduo</strong> e anseios pessoais",
        call2: "Lares adequados ao <strong>estilo de vida</strong>",
        callMain: "O que mais importa pra você.",
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
                }, delay/100)

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

            tl.staggerFrom(this.$refs['callTextLetters'], delay, {
                y: 50,
                autoAlpha:0, 
                ease: SlowMo.easeOut 
            }, delay/100);
            
        }
    },
    mounted() {
        setTimeout(this.animate, 0)
    }
}
</script>
<template lang="pug">
    section#terapia-ocupacional
        div.left.half    
            lazy-image#img.cover(
                src = "/assets/imgs/terapia-ocupacional.jpg"
                src-placeholder = "/assets/imgs/terapia-ocupacional-tiny.jpg" )
        div.right.half
            h1.section-title
                span.hidden( ref = "h1TextLetters" v-for = "(lt, i) in h1TextArray" :key = "`${lt + i}`" ) {{ lt }}
            p.text-area( v-html = "text1")
            p.text-area( v-html = "text2")
            p.text-area( v-html = "text3")
            
</template>
<style lang="sass" scoped>
@import "~@/styles/config";

#terapia-ocupacional
    display: flex

.text-area
    margin: 1em 0
    text-align: justify
    text-indent: 2em
    font-size: 24px

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
    display: flex
    flex-direction: column
    justify-content: space-between

    p
        visibility: hidden
        margin: 0
        display: block

    p /deep/ strong
        position: relative


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
