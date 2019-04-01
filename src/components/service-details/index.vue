<script>

export default {
    props: {
        serviceData: Object
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
        template( v-if = "serviceData" )
            h2 {{ serviceData.title }}
            div.data
                p( v-html = "serviceData.details" )

</template>
<style lang="sass" scoped>
@import '~@/styles/config'

h2
    font-size: $size--title * .8
    margin: 16px 0
    text-align: left

.data
    font-size: $size--text

    p
        text-indent: 1em
        margin: 0
        text-align: left
        text-align: justify
        line-height: 1.5em
    .img
        width: 50%
        margin-top: 1em
        height: 200px
        margin-left: auto
    
</style>
