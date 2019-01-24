<script>
import lazyImage from 'v-lazy-image';

export default {    
    inheritAttrs: false,
    components: { lazyImage },
    props: {
        hoverable: {
            type: Boolean,
            default: true
        },
        invert: {
            type: Boolean,
            default: false
        }
    },
    data: () => ({
        loaded: false
    }),
    computed: {
        attrs() {
            const { hoverable, id, ...attrs } = this.$attrs;
            return attrs;
        },
        listeners() {
            const { load, ...listeners } = this.$listeners;
            return listeners;
        },
    },
    methods: {
        load() {
            this.loaded = true
            this.$emit('load')
        }
    }
}
</script>
<template lang="pug">
    div.hoverable-image( :class = "[ loaded? 'loaded' : 'not-loaded', invert ? 'invert' : 'regular', { hoverable }]" :id = "$attrs.id")
        lazy-image(
            v-bind = "attrs"
            v-on = "listeners"
            :class = "[ loaded? 'loaded' : 'not-loaded' ]"
            @load = "load"
        )
        div.caption
            slot
</template>
<style lang="sass" scoped>
    =transition( $property )
        transition-property: $property
        transition-duration: .5s
        transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1)

    %cover
        position: absolute
        width: 100%
        height: 100%
        top: 0
        bottom: 0
        left: 0
        right: 0
        object-fit: cover
        object-position: center center

    .hoverable-image
        overflow: hidden
        position: relative

        &:before
            @extend %cover
            content: ''
            background-color: black
            z-index: 55
            +transition(opacity)

    img
        @extend %cover
        +transition((transform, filter))
        z-index: 5
    .caption
        @extend %cover
        z-index: 555
    
    
    %with-overlay
        img
            transform: scale(1.2)
            filter: blur(3px) grayscale(50%)
        &:before
            opacity: .5        
        .caption
            visibility: visible
    %without-overlay
        img
            transform: scale(1)
            filter: blur(0px) grayscale(20%)
        &:before
            opacity: 0
    
    .hoverable-image.regular
        @extend %without-overlay
    .hoverable-image.regular.hoverable:hover
        @extend %with-overlay

    .hoverable-image.invert
        @extend %with-overlay
    .hoverable-image.invert.hoverable:hover
        @extend %without-overlay
</style>

