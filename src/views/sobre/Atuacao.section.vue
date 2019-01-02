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
                .addCallback(() => this.$el.querySelector('#img #call-text').classList.add('shown'));


        }
    },
    mounted() {
        setTimeout(this.animate, 0)
    }
}
</script>
<template lang="pug">
    section#atuacao
        div.narrow.section
            h2 REATO
            
</template>
<style lang="sass" scoped>
@import "~@/styles/config";
$height: 300px;
#atuacao
    height: $height

h2
    margin: 0
    text-align: center
    height: $height
    line-height: $height
    font-size: 96px
    
</style>
