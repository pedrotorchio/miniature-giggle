<script>
import { TweenMax, SlowMo, TimelineMax, Power2 } from 'gsap';
import lazyImage from 'v-lazy-image';
import hoverableImage from '@/components/hoverable-image';

import Section from '@/mixins/Section.mixin';

import '@/components/svg/whatsapp'
import '@/components/svg/email'
import '@/components/svg/phone'
import '@/components/svg/browser'

export default {
    extends: Section,
}
</script>
<template lang="pug">
    section#sobre
        .container
            h1 REATO
            h3 Desenvolvido por Pedro Torchio
            .contact
                a( title = "Visite torchiodev.com" href ="https://torchiodev.com" target="_blank") 
                    svgicon( name = "browser")
                a( title = "pedro@torchiodev.com" href ="mailto:pedro@torchiodev.com" target="_blank" rel="noreferrer") 
                    svgicon( name = "email")
                a( title = "(81)99731-6338" href ="tel:+55(81)99731-6338" target="_blank" rel="noreferrer") 
                    svgicon( name = "phone")
                a( title = "(81)99731-6338" href ="https://wa.me/5581997316338" target="_blank" rel="noreferrer") 
                    svgicon( name = "whatsapp" color = "white inherit" )
            
</template>
<style lang="sass" scoped>
@import "~@/styles/config"
@import '~media-query-mixins'
svg
    height: 64px
    width: 64px
    margin: 0 5px
    padding: 10px
.contact
    text-align: center
section
    height: 100vh
.container
    position: absolute
    top: 50%
    left: 50%
    transform: translateY(-50%) translateX(-50%)
h1, h3
    margin: 0
    text-align: center
    font-size: 96px
h3
    font-size: 18px

    +sm
        font-size: 24px
    font-weight: normal

</style>
