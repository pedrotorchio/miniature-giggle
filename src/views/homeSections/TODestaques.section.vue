<script>
import { TweenMax, SlowMo, TimelineMax, Power2 } from 'gsap';
import lazyImage from 'v-lazy-image';
import hoverableImage from '@/components/hoverable-image';
import '@/components/svg/logo-head'
import AppAnimations from '@/mixins/AppAnimations.mixin';

import Section from '@/mixins/Section.mixin'
export default {
    extend: Section,
    mixins: [ AppAnimations ]
}
</script>
<template lang="pug">
    section#destaques.half-padded
        div.inner-section
            transition( appear @enter = "(el, done) => logoEnter(el, done, false)" )
                svgicon.logo( name = "logo-head" color = "#009688" )    
</template>
<style lang="sass" scoped>
@import '~media-query-mixins'
section
    padding-bottom: 0px

.logo
    height: 300px
    width: 100%
.inner-section
    display: flex
    align-items: center

</style>
