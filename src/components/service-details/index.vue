<script>
import { ServiceData } from '@/servicos'
import HoverableImage from '@/components/hoverable-image';

export default {
    components: { HoverableImage},
    props: {
        data: {
            type: ServiceData | null,
            required: false
        }
    },
    data: () => ({
        shown: false
    }),
    methods: {
        show() {
            this.shown = true
        },
        hide() {
            this.shown = false
        }
    }

}  
</script>
<template lang="pug">
    aside( :class = "{ shown }")
        template( v-if = "data" )
            h2 {{ data.title }}
            div.data
                p {{ data.details }}
                hoverable-image.img( v-if = "data.img" :src = "`/assets/imgs/${data.img}`" :src-placeholder = "`/assets/imgs/${data.placeholder}`" )

</template>
<style lang="sass" scoped>
$title-height: 48px
aside
    height: 100%
h2
    height: $title-height
    font-size: $title-height/2
    margin: 0
.data
    display: flex
    height: calc(100% - #{$title-height})
    p
        padding: 0 1em
        margin: 0
    .img
        width: 50%
        object-fit: cover
        height: 100%
        flex: 1 0 50%
    
</style>
