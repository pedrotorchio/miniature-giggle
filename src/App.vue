<template lang="pug">
  div#app
    div#nav-container
      nav#main.section
        router-link( to="/" ) Sobre
        router-link( to="/servicos" ) Serviços
        router-link( to="/localizacao" ) Localização
        router-link( to="/contato" ) Contato

    router-view#view

</template>

<style lang="sass" scoped>

#nav-container
  position: absolute
  height: 1.2em
  top: calc(100vh - 1.2em)
  font-size: 30px
  line-height: 1.2em
  z-index: 5
  a
    margin: 0 .2em

#view
  max-width: 1600px
  width: 100%
  margin: 0 auto
</style>

<style lang="sass">
a
  text-decoration: none
body
  margin: 0

.section
  position: relative

.full-height
  height: 100vh

.cover
  width: 100%
  height: 100%
  object-fit: cover

img
  filter: blur(0)
  will-change: filter
  transition: filter 500ms

  &.not-loaded
    filter: blur(5px)
  

</style>
