<script>
export default {
    inheritAttrs: false,
    props: {
        placeholder: {
            type: String,
        }
    },
    computed: {
        listeners() {
            const { input, ...listeners } = this.$listeners
            return listeners;
        },
        attrs() {
            const { value, ...attrs } = this.$attrs
            attrs['id'] = attrs['id'] || Math.floor(Math.random() * 9999999)

            return attrs;
        }
    }

}
</script>
<template lang="pug">
    div.input
        label( v-if = "placeholder" :for = "attrs['id']" ) {{ placeholder }}
        input( v-bind = "attrs" v-on = "listeners"
            :value = "$attrs['value']" @input = "$emit('input', $event)"
        )
</template>
<style lang="sass" scoped>
.input
    position: relative
    font-size: 24px
    padding: 1em 0

label
    font-size: .5em
    position: absolute
    display: block
    height: 2em
input
    font-size: 1em
    height: 2em
    width: 100%
    display: block
    background-color: transparent
    border: none
    outline: none
    padding: 0 .5em

</style>
