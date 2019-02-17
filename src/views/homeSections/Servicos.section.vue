<script>
import '@/components/svg/reato';
import ServiceDetails from '@/components/service-details';
import { TweenMax, Expo } from 'gsap'
import Section from '@/mixins/Section.mixin';
import { words } from '@/servicos';
import { rLg, lg } from 'media-query-mixins/_mixins';

export default {
    extends: Section,
    components: { ServiceDetails },
    data: () => ({
        words,
        activeService: false,
        popped: false
    }),
    methods: {
        pop( details ) {
            rLg(()=>{ // para dispositivos menores que LG
                this.activeService = details
                this.popped = true
            })
        },
        show(details) {
            lg(()=>this.activeService = details)
        },
        contentEnter( el , done ) {
            TweenMax.to(el, .5, {
                autoAlpha: 1,
                onComplete: done,
                ease: Expo.easeOut
            })
        },
        contentLeave( el, done ){
            TweenMax.to(el, .2, {
                autoAlpha: 0,
                scale: .5,
                onComplete: done,
                ease: Expo.easeOut
            })
        },
        animate(timeline) {

            const words = this.$refs['words'];

            const activator = {
                words,
                i : -1,
                delay: .2,
                duration: .5,                        
                over: new Event('mouseover'),
                out: new Event('mouseout'),
                onComplete(el, done = () => {}) {
                    setTimeout(()=>
                        TweenMax
                            .set(el, {
                                transitionDuration: "1s",
                                onComplete: done
                            })
                    , this.delay * 1000);

                },
                animate(el, done) {
                    TweenMax.to(el, this.duration, {
                        y: 0,
                        autoAlpha: 1,
                        textShadow: "0px 0px 0px rgba(0,0,0,0)",
                        onComplete: () => this.onComplete(el)
                    })
                    setTimeout(done, this.delay * 1000);
                },
                next() {
                    this.i++;
                    return this.words[this.i];
                },
                activate() {
                    // calls animate on curr element, 
                    // which on complete calls transitionDuration setter 'onComplete', 
                    // which calls activate for next element

                    const { words, over, out} = this;

                    const length = words.length;
                    const curr = words[this.i];

                    if (this.i >= 0) {
                        // curr.dispatchEvent(this.out);
                    }
                    const next = this.next();

                    if (this.i < length) {
                        
                        this.animate(next, () => setTimeout(this.activate.bind(this), this.delay));
                        // next.dispatchEvent(this.over);
                    }
                }
            }
            timeline
                .addCallback(activator.activate.bind(activator));
        }
    }
}
</script>
<template lang="pug">
    section#servicos.gradient( ref = "container" )
        div.inner-section
            div.content-container( :class="{ popped }")
                .close-trigger( @click = "popped = false")
                    span
                    span
                transition( appear mode = "out-in" @enter = "contentEnter" @leave = "contentLeave" ) 
                    svgicon.content.logo( v-if = "activeService == false" name = "reato" :original = "true" )
                    service-details.content.narrow.width( v-else ref = "details" :serviceData = "activeService" )
            div.list
                div#words
                    h3.cursive( ref = "words" v-for = "( word, i ) in words" :key = "word.title + i" @mouseover = "show(word)" @mouseout = "show(false)" @click = "pop(word) " ) {{ word.title }}
                
                    

</template>
<style lang="sass" scoped>
@import "~@/styles/config"
@import "~media-query-mixins"


.inner-section
    +lg
        display: flex
        align-items: stretch
        justify-content: center

.content-container, .list
    padding: 0 10px

    +lg
        flex: 0 0 50%
        padding: 0 50px

#words

    h3
        font-weight: 100
        position: relative
        font-size: $size--title
        line-height: 2em
        letter-spacing: .2em
        color: $color--primary
        text-align: left
        display: table
        padding: .5em
        margin: 0
        width: 100%

        +lg
            font-size: $size--text

        transition-property: text-shadow, color
        transition-timing-function: ease-out
        visibility: hidden
        opacity: 0
        text-shadow: 0px 8px 4px rgba(0,0,0,0.2)
        transform: translateY(-8px)
        
        cursor: pointer
        &:hover
            color: rgba($color--primary, .5)
            text-shadow: 0 0 2em rgb(28, 68, 119) !important
        
        &:nth-child(odd)
            background-color: rgba(black, .05)

$height: 100%
.content-container
    text-align: center
    position: fixed
    z-index: -1
    visibility: hidden
    transition: opacity .5s ease-out
    opacity: 0

    .logo
        display: none
    &.popped
        opacity: 1
        padding: 10px
        +md
            padding: 50px
        visibility: visible
        width: 100%
        background: radial-gradient(darken($color--primary, 20) 0%, darken($color--primary, 20) 30%, $color--primary 100%)
        top: 50%
        transform: translateY(-50%)     
        color: white
        z-index: 9999

        /deep/ h2
            min-height: 50px
            width: 80%
            width: calc(100% - 80px)

            +md
                width: 100%


    +lg
        opacity: 1
        z-index: 5
        transform: none
        transition: initial
        visibility: visible
        position: relative !important
        display: flex
        align-items: center

        .logo
            display: block

svg.content
    width: 80%
    height: 50vh
    +sm
        height: 200px
        max-width: 400px

.content
    width: auto
    margin: 0 auto
.close-trigger
    position: absolute
    width: 64px
    height: 64px

    right: 0
    top: 0
    +sm
        right: 10px
        top: 10px

    +lg
        display: none

    span
        height: 4px
        background-color: currentColor
        width: 60%
        left: 32px
        position: absolute
        display: block
        transform-origin: center center
        top: 50%
        &:first-child
            transform: translateX(-50%) rotateZ(45deg)
        &:nth-child(2)
            transform: translateX(-50%) rotateZ(-45deg)
            


</style>
