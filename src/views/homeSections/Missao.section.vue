<script>
import Section from '@/mixins/Section.mixin'
export default {
    extends: Section,
    data: () => ({
        text: "Prestar assistência diferenciada aos nosssos clientes e familiares, com foco na excelência dos atendimentos, buscando minimizar dificuldades e otimizar potencialidades."
    }),
    methods: {
        animate( timeline ) {
            timeline
                .to(this.$refs['section'], 1, {
                    boxShadow: '0px 0px 25px -6px'
                }, 1)
        }
    }
}
</script>
<template lang="pug">
    section#missao
        div.inner-section( ref = "section" )
            p {{ text }}
            h3.section-title Missão Institucional

</template>
<style lang="sass" scoped>
@import '~@/styles/config'
.inner-section
    display: flex
    align-items: stretch
    flex-direction: column
    justify-content: center
    padding: 1em
    box-shadow: '0px 0px 0px -6px rgba(0, 0, 0, 0.1)'
p
    &:before
        content: '"'
    &:after
        content: '"'
    font-style: italic
    text-align: center
    font-size: $size--title
h3

    font-weight: 100
    text-align: center
    margin: 0
    text-align: right
    text-transform: uppercase
    opacity: .3

</style>
