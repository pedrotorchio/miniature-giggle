<script>
import "@/components/svg/logo-full";

import Animations from "@/mixins/AppAnimations.mixin";
import pages from "@/pages";

import SmoothScroll from 'smooth-scroll';
import Sticky from 'sticky-js';

import Call from '@/components/call/Call'

import { rLg } from 'media-query-mixins/_mixins.js'

export default {
  mixins: [Animations],
  components: { Call },
  data: () => ({
    pages,
    currSectionId: null,
    navToggled: false,
    callShown: false,
    scrollRatio: 0
  }),
  methods: {
    stickyHeader() {
      new Sticky('#nav-container', {
        stickyClass: 'sticked'
      });
    },
    setProgress(scrolled) {
      scrolled = Math.floor(scrolled)
      this.$refs['progress'].style.width = scrolled + "%";
      this.scrollRatio = scrolled
    },
    setProgressSection(sectionId) {
      this.currSectionId = sectionId;
    },
    menuClick() {
      rLg(()=>this.navToggled = false);
    }
  },
  mounted() {
    new SmoothScroll('a[href*="#"]');
    setTimeout(()=>this.callShown = true, 1000);
  }
};
</script>

<template lang="pug">
  div#app
    div#nav-container( ref = "navigation"  :class = "{ toggled: navToggled }" )
      div.toggle( @click = "navToggled = !navToggled" )
        span.fst
        span.snd
        span.trd
      transition-group#main( v-if = "navShown" appear tag = "nav" @enter = "staggerNavigation" @before-enter = "stickyHeader" )
        router-link( v-for = "( { url, title, slug } , i) in pages" :to="url" :data-index = "i" :key = "slug" :class="{ active: slug === currSectionId }" @click.native = "menuClick({url, slug})" ) {{ title }}
        router-link.voltar( v-if = "scrollRatio > 0" to="#inicio" :data-index = "pages.length" key = "inicio" @click.native = "menuClick" ) Voltar para o topo
      span.progress( ref= "progress" )

    
    transition( appear @enter = "logoEnter" @after-enter = "showNavigation" ) 
      svgicon#logo( name = "logo-full" :original = "true" @click="$router.push('/')" )
    
    transition
      router-view#view
    call#call( :shown = "callShown" )

</template>
<style lang="scss" src="@/styles/_animation.scss"></style>
<style src="normalize.css"></style>
<style lang="sass" scoped>
@import '~@/styles/config'
@import '~media-query-mixins'

$height: 64px
#call
  +sm
    display: none
.toggle
  width: $height
  height: $height
  position: relative
  bottom: 100px
  z-index: 99999999
  margin-left: auto
  +md
    display: none
  span
    outline: 1px solid rgba(255, 255, 255, .5)
    position: absolute
    height: 4px
    width: 80%
    display: block
    border-radius: 5px
    background: $color--primary
    transition-property: transform, opacity
    transition-duration: 1s, .5s

    &.fst
      top: 20%
    &.snd
      top: 50%
      transform: translateY(-50%)
    &.trd
      bottom: 20%



#app
  position: relative



#nav-container
  &.sticked
    .toggle
      bottom: 0 !important
  &.toggled .toggle span
    &.fst
      transform: rotateZ(225deg)
    &.snd
      transform: rotateZ(-45deg)
    &.trd
      opacity: 0
  width: 100%
  position: absolute
  top: calc(100vh - #{$height})
  font-size: 24px
  line-height: $height
  z-index: 55555
  +md
    left: initial !important
    right: 50px !important
    width: auto !important
    height: $height

    .voltar
      position: fixed
      bottom: 0
      right: 0

  a
    display: block
    position: fixed
    transform: translateX(-100vw)
    margin-left: 0
    padding: 0 20px
    padding-right: 10px


    @for $i from 0 through 8
      &:nth-child(#{$i + 1})
        top: (2*$height + $i * ($height + 10px))
        transition-delay: ($i * .2s)
    +md
      display: inline-block
      position: relative
      top: initial !important
      transform: none
      margin: 0 16px
      transition-delay: 0s !important
      
    color: #ffffff;
    text-shadow: 1px 1px 2px #505050e6
    transition: color, font-size, transform, background-color, top, text-shadow
    transition-duration: 500ms
    transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55)
    will-change: opacity, color, text-shadow, transform    
    

    &.active, &:hover
      color: $color--primary
      text-shadow: 1px 1px 2px #50505055
      

    &.active
      transform: scale(1.2)
      transition-delay: 0s
      top: 0
      +md
        top: initial
      
  // &:not(.toggled)
  //   a.active
  //     top: 0
  //     +sm
  //       top: initial
  &.toggled 
    
    a
      transform: translateX(0)
      background-color: $color--primary
      &:hover
        color: white
      &.active
        color: white
      +md
        transform: none
        background-color: transparent


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
  top: 10px
  left: 10px

  +md
    width: 400px
    height: auto
    left: 50px
    top: 50px

#view
  width: 100%
  margin: 0 auto
</style>

<style lang="sass" src="@/styles/_global.sass"></style>
<style src="@/styles/svgicon.css"></style>
