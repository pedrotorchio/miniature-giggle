<script>
import { phone } from '@/contact'
import '@/components/svg/phone'
import '@/components/svg/whatsapp'

export default {
    props: {
        shown: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        callHref() {
            return `tel:+55-81-${phone}`
        },
        waHref() {
            return `https://wa.me/${this.callHref}`;
        }
    }
}
</script>
<template lang="pug">
    div( :class = "{shown}" )
        a( :href="callHref") 
            | Ligar Agora
            svgicon( name = "phone" )
        a( :href = "waHref" )
            | Whatsapp
            svgicon( name = "whatsapp" )            

</template>
<style lang="sass" scoped>
@import '~@/styles/config'

$font: 24px
$height: 64px
$pad: 10px
div
    padding: $pad
    position: fixed
    bottom: 0
    
    font-size: $font
    height: $height
    width: 100%
    display: flex
    justify-content: space-between
    align-items: stretch
    background-color: $color--primary
    color: white
    z-index: 55555

    top: 100vh
    &.shown
        top: calc(100vh - #{$height})
    transition: top .5s

    a
        text-align: center
        flex: 1 1 50%

        svg
            $size: $height - 2*$pad - $font
            display: block
            width: $size
            height: $size
            margin: 0 auto
        &:nth-child(1)
            border-right: 1px solid white
        &:nth-child(2)
            border-left: 1px solid white

</style>

