<script>
import lazyImage from 'v-lazy-image';
import '@/components/svg/about-hero-line';
import header from './sobre/header';

export default {
  name: 'home',
  mixins: [ header ],
  components: { lazyImage }
}
</script>

<template lang="pug">
  div#sobre
    header.full-height.section
      lazy-image.cover(
        :class = "{ 'not-loaded': !isHeaderImageLoaded }"
        src = "/assets/imgs/about-hero.jpg"
        src-placeholder = "/assets/imgs/about-hero-tiny.jpg"
        @load = "headerImageLoaded" )
      
      transition( appear @before-enter = "beforeLineEnter" @enter = "lineEnter" )
        svgicon#header-line( v-if = "isHeaderImageLoaded" name = "about-hero-line" :original = "true" )
</template>

<style lang="sass" scoped>
header img
  object-position: 35% center

#header-line
  position: absolute;
  z-index: 555;
  left: 0;
  top: 0
  width: 100%;
  height: 100%;

    
</style>
