<script>
import "@/components/svg/logo-full";

import Animations from "@/mixins/AppAnimations.mixin";
import pages from "@/pages";

import SmoothScroll from 'smooth-scroll';

export default {
  mixins: [Animations],
  data: () => ({
    pages
  }),
  mounted() {
    new SmoothScroll('a[href*="#"]');

  }
};
</script>

<template lang="pug">
  div#app
    div#nav-container( v-if = "navShown")
      transition-group#main( appear tag = "nav" @enter = "staggerNavigation" )
        router-link( v-for = "( { url, title, slug } , i) in pages" :to="url" :data-index = "i" :key = "slug" ) {{ title }}
    
    transition( appear @enter = "logoEnter" @after-enter = "showNavigation" ) 
      svgicon#logo( name = "logo-full" :original = "true" )
    
    transition
      router-view#view

</template>
<style lang="scss" src="@/styles/_animation.scss"></style>
<style src="normalize.css"></style>
<style lang="sass" scoped>
@import '~@/styles/config';

#app
  position: relative


$height: 4em
#nav-container
  position: absolute
  height: $height
  right: 50px
  top: calc(100vh - #{$height})
  font-size: 24px
  line-height: $height
  z-index: 5555

  a
    display: inline-block
    position: relative
    margin: 0 16px
    color: #ffffff;
    text-shadow: 1px 1px 8px #50505059;
    transition-property: color, font-size
    transition-duration: 500ms
    will-change: opacity, color, text-shadow, transform    

    &.router-link-active
      font-size: 32px

    &.router-link-active, &:hover
      color: $color--primary
      text-shadow: 0 0 0 #50505059;

#logo
  position: absolute 
  z-index: 5555
  width: 400px;
  height: auto;
  left: 50px;
  top: 50px

#view
  width: 100%
  margin: 0 auto
</style>

<style lang="sass" src="@/styles/_global.sass"></style>
<style src="@/styles/svgicon.css"></style>
