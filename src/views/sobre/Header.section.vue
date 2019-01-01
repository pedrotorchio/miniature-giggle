<script>
import { TweenMax, SlowMo, TimelineMax } from 'gsap';
import lazyImage from 'v-lazy-image';
import '@/components/svg/about-hero-line';

export default {
    components: { lazyImage },
    data: () => ({
        isHeaderImageLoaded: false,
        ctaText: "Descubra a REATO"
    }),
    computed: {
        ctaTextArray() {
            return this.ctaText.split('');
        }
    },
    methods: {
        headerImageLoaded() {
            this.isHeaderImageLoaded = true;
        },
        beforeLineEnter(el, done) {
            const path = el.querySelector('path');
            const length = path.getTotalLength();
            
            path.style.strokeDasharray = length;
            path.style.strokeDashoffset = length;

        },
        lineEnter(el, done) {
            const ctaOffset = 0;
            new TimelineMax({ onComplete: done, delay: 3 })
                .to(el.querySelector('path'), 1, {
                    strokeDashoffset: 0,
                    ease: SlowMo.ease.config(0.5, 0.7, false)
                })
                .set(this.$refs['cta'], {
                    visibility: 'visible'
                }, ctaOffset)
                .addCallback(() => {
                        ['Bottom', 'Left', 'Top', 'Right']
                            .forEach( pos => this.$refs[`ctaBorder${pos}`].classList.add('shown') )
                }, ctaOffset)
                .staggerFrom( this.$refs['ctaLetters'], 1, { 
                    autoAlpha:0, 
                    y: 50, 
                    ease: SlowMo.easeOut 
                }, 0.05, ctaOffset)
                
            
        },
    }
}
</script>

<template lang="pug">
    header.full-height.section
      lazy-image.cover(
        :class = "{ 'not-loaded': !isHeaderImageLoaded }"
        src = "/assets/imgs/about-hero.jpg"
        src-placeholder = "/assets/imgs/about-hero-tiny.jpg"
        @load = "headerImageLoaded" )
      
      transition( appear @before-enter = "beforeLineEnter" @enter = "lineEnter" )
        svgicon#header-line( v-if = "isHeaderImageLoaded" name = "about-hero-line" :fill = "false" )
      
      h2#cta( ref = "cta" )
        span.top( ref = "ctaBorderTop" )
        span.bottom( ref = "ctaBorderBottom" )
        span.left( ref = "ctaBorderLeft" )
        span.right( ref = "ctaBorderRight" )

        span.text( ref = "ctaLetters" v-for = "( letter, i ) in ctaTextArray" :key = "letter + i" :data-index = "i" ) {{ letter }}
</template>


<style lang="sass" scoped>
@import '~@/styles/config'

header img
  object-position: 35% center

#header-line
    position: absolute;
    z-index: 555;
    width: 100%;
    height: auto;
    bottom: 0px;
    left: 0
    top: initial;
    

    
#cta
  will-change: transform
  position: absolute;
  bottom: 100px;
  right: 66px;
  color: $color--primary;
  text-transform: uppercase;
  letter-spacing: .1em;
  border: 0 solid;
  padding: 1em;
  border-radius: 0;
  cursor: pointer
  visibility: hidden
  z-index: 5555

  .top, .right, .left, .bottom
    position: absolute
    background-color: $color--primary
    transition-property: height, width
    transition-duration: 1s
  
  .top, .bottom
    width: 0%
    height: 5px;
    &.shown
      width: 100%
  .left, .right
    height: 0%
    width: 5px
    &.shown
      height: 100%

  .top, .right
    top: 0
  .top, .left
    left: 0
  
  .bottom, .left
    bottom: 0
  .bottom, .right
    right: 0

  span.text
    visibility: hidden;
    will-change: transform
</style>