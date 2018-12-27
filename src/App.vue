<template lang="pug">
  div#app
    div#nav.section.full-height
      router-link( to="/" ) Sobre
      router-link( to="/servicos" ) Serviços
      router-link( to="/localizacao" ) Localização
      router-link( to="/contato" ) Contato

    router-view

</template>

<style lang="sass">
body
  margin: 0

.section
  position: relative

.full-height
  height: 100vh


</style>
