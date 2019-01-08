<script>
export default {
    inheritAttrs: false,
    props: [ 'placeholder', 'value' ],
    data: () => ({
        staticId: Math.floor(Math.random() * 9999999),
        focused: false
    }),
    computed: {
        listeners() {
            const { input, blur, focus, ...listeners } = this.$listeners
            return listeners;
        },
        attrs() {
            const { value, ...attrs } = this.$attrs
            attrs['id'] = attrs['id'] || this.staticId

            return attrs;
        },
        isEmpty() {
            return this.value && this.value.length === 0;
        },
        labelup() {
            return !this.isEmpty || this.focused
        }
    },
    methods: {
        blur() {
            this.focused = false
            if (this.$listeners.blur)
                this.$listeners.blur()
        },
        focus() {
            this.focused = true
            if (this.$listeners.focus)
                this.$listeners.focus()
        }
    }

}
</script>
<style lang="sass" scoped>
.input
    position: relative
    font-size: 24px
    padding: 1em 0

    &.labelup
        label
            bottom: 5.5em
            left: 1em
label
    font-size: .5em
    position: absolute
    bottom: 3em
    left: 2em
    display: block
    height: 2em
    transition-property: bottom, left
    transition-duration: .2s
    transition-timing-function: ease-out
.input-element
    font-size: 1em
    height: 2em
    width: 100%
    display: block
    background-color: transparent
    border: none
    outline: none
    padding: 0 .5em

</style>
