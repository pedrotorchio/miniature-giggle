<script>
import '@/components/svg/reato';
import ServiceDetails from '@/components/service-details';
import {TweenMax} from 'gsap'
import Section from '@/mixins/Section.mixin';
import { words } from '@/servicos';

export default {
    extends: Section,
    components: { ServiceDetails },
    data: () => ({
        words,
        activeService: false
    }),
    computed: {
        earlyWords() {
            const length = this.words.length;
            return this.words.slice(0, length/2);
        },
        lateWords() {
            const length = this.words.length;
            return this.words.slice(length/2, length);
        }
    },
    methods: {
        show(details) {
            this.activeService = details;
        },
        contentEnter( el , done ) {
            TweenMax.to(el, .2, {
                autoAlpha: 1,
                onComplete: done
            })
        },
        contentLeave( el, done ){
            TweenMax.to(el, .2, {
                autoAlpha: 0,
                onComplete: done
            })
        },
        animate(timeline) {
            const { earlyWords, lateWords } = this.$refs;
            const words = [...earlyWords, ...lateWords];

            timeline
                .staggerTo(words, 1, {
                    y: 0,
                    autoAlpha: 1,
                    textShadow: "0px 0px 4px rgba(0,0,0,0.2)",
                    transitionDuration: ".5s"
                }, .2)
        }
    }
}
</script>
<template lang="pug">
    section#servicos( ref = "container" )

        div#early-words
            span( ref = "earlyWords" v-for = "( word, i ) in earlyWords" :key = "word.title + i" @mouseover = "show(word)" @mouseout = "show(false)") {{ word.title }}
        transition( appear mode = "out-in" @enter = "contentEnter" @leave = "contentLeave" ) 
            svgicon.content( v-if = "activeService == false" name = "reato" :original = "true" )
            service-details.content.narrow.width( v-else ref = "details" :data = "activeService" )
        div#late-words
            span( ref = "lateWords" v-for = "( word, i ) in lateWords" :key = "word.title + i" @mouseover = "show(word)" @mouseout = "show(false)") {{ word.title }}

</template>
<style lang="sass" scoped>
@import "~@/styles/config"
@import "~@/styles/_animation.scss"

=active-service
    text-shadow: 0px 8px 4px rgba(0,0,0,0.2)
    transform: translateY(-8px)
=inactive-service
    text-shadow: 0px 0px 0px rgba(0,0,0,0)
    transform: translateY(0px)

#servicos
    position: relative
    display: flex
    flex-direction: column

#early-words, #late-words
    position: relative
    flex: 1 1 auto
    display: flex
    justify-content: space-around
    align-items: center
    flex-wrap: wrap

    span
        font-size: 20px
        font-weight: 100
        position: relative
        flex: 0 0 auto
        padding: 0 10px
        font-size: 24px
        font-family: inherit
        text-transform: uppercase
        color: $color--primary
        transition-property: transform, text-shadow
        $height: 3em
        height: $height
        line-height: $height
        min-height: 64px

        +active-service
        visibility: hidden
        opacity: 0
        
        cursor: pointer
        &:hover
            transform: translateY(-8px) scale(1.2) !important

svg.content
    max-width: 500px
aside.content
    max-width: 940px
.content
    margin: 0
    width: auto
    height: 500px
    margin: 0 auto
    transition: transform
    transition-duration: .3s 
    transition-timing-function: cubic-bezier(0.38, 0.15, 0.42, 2.29)
    
    // &:hover
    //     transform: scale(1.2)
    //     transition-duration: .5s
        

</style>
