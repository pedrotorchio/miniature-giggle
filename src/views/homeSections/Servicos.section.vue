<script>
import '@/components/svg/reato';
import ServiceDetails from '@/components/service-details';
import { TweenMax, Expo } from 'gsap'
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
            const { earlyWords, lateWords } = this.$refs;
            const words = [...earlyWords, ...lateWords];

            const activator = {
                words,
                i : -1,
                delay: .4,                        
                over: new Event('mouseover'),
                out: new Event('mouseout'),
                onComplete() {
                    TweenMax
                        .set(words, {
                            transitionDuration: ".5s"
                        }, .5)
                },
                animate(el, done) {
                    TweenMax.to(el, this.delay, {
                        y: 0,
                        autoAlpha: 1,
                        textShadow: "0px 0px 4px rgba(0,0,0,0.2)",
                        onComplete: done
                    })
                },
                next() {
                    this.i++;
                    return this.words[this.i];
                },
                activate() {

                    const { words, over, out} = this;

                    const length = words.length;
                    const curr = words[this.i];

                    if (this.i >= 0) {
                        curr.dispatchEvent(this.out);
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

        div#early-words
            span( ref = "earlyWords" v-for = "( word, i ) in earlyWords" :key = "word.title + i" @mouseover = "show(word)" @mouseout = "show(false)") {{ word.title }}
        div#content
            transition( appear mode = "out-in" @enter = "contentEnter" @leave = "contentLeave" ) 
                svgicon.content( v-if = "activeService == false" name = "reato" :original = "true" )
                service-details.content.narrow.width( v-else ref = "details" :data = "activeService" )
        div#late-words
            span( ref = "lateWords" v-for = "( word, i ) in lateWords" :key = "word.title + i" @mouseover = "show(word)" @mouseout = "show(false)") {{ word.title }}

</template>
<style lang="sass" scoped>
@import "~@/styles/config"

#servicos
    position: relative
    display: flex
    flex-direction: column
    align-items: center

#early-words, #late-words
    position: relative
    flex: 1 1 auto
    width: 100%
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
        font-size: 16px
        font-family: inherit
        text-transform: uppercase
        color: $color--primary
        transition-property: transform, text-shadow
        $height: 3em
        height: $height
        line-height: $height
        min-height: 64px
        min-width: 30%
        visibility: hidden
        opacity: 0
        text-shadow: 0px 8px 4px rgba(0,0,0,0.2)
        transform: translateY(-8px)

        cursor: pointer
        &:hover
            transform: translateY(-8px) scale(1.2) !important

$height: 300px
#content
    height: $height
    overflow-y: auto
    flex: 0 0 auto
    display: flex
    align-items: center
    justify-content: center
svg.content
    max-width: 500px
    height: 100%
aside.content
    max-width: 940px
.content
    width: auto
    margin: 0 auto

</style>
