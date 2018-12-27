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
$nav-height: 30px

#nav-container
  position: absolute
  height: 1.2em
  top: calc(100vh - 1.2em)
  font-size: $nav-height

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


</style>
