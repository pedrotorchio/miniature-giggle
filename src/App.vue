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
$height: 2em
#nav-container
  position: absolute
  height: $height
  right: 0
  top: calc(100vh - #{$height})
  font-size: 30px
  line-height: $height
  z-index: 5

  a
    margin: 0 1em
    color: #ffffff;
    text-shadow: 1px 1px 8px #50505059;
    transition: color 500ms
    will-change: color, text-shadow

    &.router-link-active, &:hover
      color: #545454
      text-shadow: 0 0 0 #50505059;
    

#view
  max-width: 1600px
  width: 100%
  margin: 0 auto
</style>

<style lang="sass">
a
  text-decoration: none
  color: inherit
body
  margin: 0
  font-family: 'Quicksand', sans-serif;
  font-weight: 400;


.cursive
  font-family: 'Sacramento', cursive;

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
