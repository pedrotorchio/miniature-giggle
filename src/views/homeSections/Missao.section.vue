<script>
export default {
    data: () => ({
        text: "Prestar assistência diferenciada aos nosssos clientes e familiares, com foco na excelência dos atendimentos, buscando minimizar dificuldades e otimizar potencialidades."
    })
}
</script>
<template lang="pug">
    section#missao
        div.inner-section
            h3.discreet Missão Institucional
            p {{ text }}

</template>
<style lang="sass" scoped>
p
    &:before
        content: '"'
    &:after
        content: '"'
    font-style: italic
    font-size: 24px
    text-align: center
h3
    font-size: 32px
    font-weight: 100
    text-align: center
    margin: 0
h3.discreet
    font-transform: uppercase
    position: absolute
    bottom: -1em
    right: 0
    opacity: .2

</style>
