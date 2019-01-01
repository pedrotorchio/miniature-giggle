<script>
import '@/components/svg/logo-full';

import Animations from '@/mixins/AppAnimations.mixin';
import pages from '@/pages';
export default {
  mixins: [ Animations ],
  data: () => ({
    pages
  })
}
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
  position: fixed  
  z-index: 5555
  width: 400px;
  height: auto;
  left: 50px;
  top: 50px

.cover
  position: absolute
  width: 100%
  height: 100%

#view
  width: 100%
  margin: 0 auto
.narrow
  max-width: 1600px;
</style>

<style lang="sass">
a
  text-decoration: none
  color: inherit
body
  margin: 0
  font-family: 'Quicksand', sans-serif;
  font-weight: 400;
  color: #545454;

body::-webkit-scrollbar
  width: .5em;
 
body::-webkit-scrollbar-track
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
 
body::-webkit-scrollbar-thumb
  background-color: currentColor;
  outline: 1px solid slategrey;

.cursive
  font-family: 'Sacramento', cursive;

.section, section
  position: relative
  height: 600px
  max-width: 1600px;
  margin 0 auto

.full-height
  height: 100vh

.cover
  width: 100%
  height: 100%
  object-fit: cover

img
  filter: blur(0)
  will-change: filter
  transition: filter 500ms

  &.not-loaded
    filter: blur(5px)
  

</style>
<style src="@/styles/svgicon.css"></style>
