<script>
import "@/components/svg/logo-full";

import Animations from "@/mixins/AppAnimations.mixin";
import pages from "@/pages";

import SmoothScroll from 'smooth-scroll';
import Sticky from 'sticky-js';

export default {
  mixins: [Animations],
  data: () => ({
    pages,
    currSectionId: null
  }),
  methods: {
    stickyHeader() {
      new Sticky('#nav-container');
    },
    setProgress(scrolled) {
      scrolled = Math.floor(scrolled)
      this.$refs['progress'].style.width = scrolled + "%";
    },
    setProgressSection(sectionId) {
      this.currSectionId = sectionId;
    }
  },
  mounted() {
    new SmoothScroll('a[href*="#"]');
  }
};
</script>

<template lang="pug">
  div#app
    div#nav-container( ref = "navigation" )
      transition-group#main( v-if = "navShown" appear tag = "nav" @enter = "staggerNavigation" @before-enter = "stickyHeader" )
        router-link( v-for = "( { url, title, slug } , i) in pages" :to="url" :data-index = "i" :key = "slug" :class="{ active: slug === currSectionId }" ) {{ title }}
      span.progress( ref= "progress" )
    
    transition( appear @enter = "logoEnter" @after-enter = "showNavigation" ) 
      svgicon#logo( name = "logo-full" :original = "true" @click="$router.push('/')" )
    
    transition
      router-view#view

</template>
<style lang="scss" src="@/styles/_animation.scss"></style>
<style src="normalize.css"></style>
<style lang="sass" scoped>
@import '~@/styles/config'
@import '~media-query-mixins'

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
    transition-property: color, font-size, transform
    transition-duration: 500ms
    will-change: opacity, color, text-shadow, transform    
    transform: scale(1)

    &.active
      transform: scale(1.2)

    &.active, &:hover
      color: $color--primary
      text-shadow: 0 0 0 #50505059

  
  span.progress
    content: ''
    position: absolute
    bottom: 0
    width: 0%
    height: 4px
    transition: width .2s ease-out
    background-color: $color--primary

#logo
  position: absolute 
  z-index: 5555
  cursor: pointer
  width: 80%
  left: 50%
  transform: translateX(-50%)
  top: 100px

  +md
    width: 400px
    height: auto
    left: 50px
    top: 50px
    transform: translateX(0)

#view
  width: 100%
  margin: 0 auto
</style>

<style lang="sass" src="@/styles/_global.sass"></style>
<style src="@/styles/svgicon.css"></style>
