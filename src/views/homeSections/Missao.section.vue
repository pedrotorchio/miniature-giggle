<script>
import Section from '@/mixins/Section.mixin'
export default {
    extends: Section,
    data: () => ({
        text: "Prestar assistência diferenciada aos nosssos clientes e familiares, com foco na excelência dos atendimentos, buscando minimizar dificuldades e otimizar potencialidades."
    }),
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
@import '~media-query-mixins'
.inner-section
    display: flex
    align-items: stretch
    flex-direction: column
    justify-content: center
    padding: 1em
p
    &:before
        content: '"'
    &:after
        content: '"'
    font-style: italic
    text-align: center
    font-size: $size--title
    line-height: 1.5em
h3

    font-weight: 100
    text-align: center
    margin: 0
    +md
        text-align: right
    text-transform: uppercase
    opacity: .3

</style>
