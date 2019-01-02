<script>
import lazyImage from 'v-lazy-image';

export default {    
    components: { lazyImage },
    props: {
        hoverable: {
            type: Boolean,
            default: true
        }
    },
    computed: {
        attrs() {
            const { hoverable, ...attrs } = this.$attrs;
            return attrs;
        },
        listeners() {
            const { ...listeners } = this.$listeners;
            return listeners;
        }
    }
}
</script>
<template lang="pug">
    div.hoverable-image( :class = "{ hoverable }")
        lazy-image(
            v-bind = "attrs"
            v-on = "listeners"
        )
        slot.caption
</template>
<style lang="sass" scoped>
    @mixin transition( $property )
        transition-property: $property
        transition-duration: .5s
        transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1)

    .hoverable-image
        overflow: hidden
        position: relative

        &.hoverable
            &:before
                content: ''
                width: 100%
                height: 100%
                position: absolute
                opacity: 0
                background-color: black
                z-index: 55
                +transition(opacity)
    img
        +transition((transform, filter))
        height: 100%
        width: 100%
        object-fit: cover
        z-index: 5
        object-position: center center
    .caption
        visibility: hidden

    .hoverable-image.hoverable:hover
        img
            transform: scale(1.2)
            filter: blur(5px) grayscale(50%)
        &:before
            opacity: .5
        .caption
            visibility: visible
</style>

