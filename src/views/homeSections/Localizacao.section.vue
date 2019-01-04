<script>
import { TweenMax, SlowMo, TimelineMax, Power2 } from 'gsap';
import lazyImage from 'v-lazy-image';
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
}
</script>
<template lang="pug">
    section#localizacao
        div
            h2 REATO
            
</template>
<style lang="sass" scoped>
@import "~@/styles/config";
$height: 100vh;

h2
    margin: 0
    text-align: center
    height: $height
    line-height: $height
    font-size: 96px
    
</style>
