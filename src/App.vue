<template lang="pug">
  div#app
    div#nav.full-height
      router-link( to="/" ) Sobre
      router-link( to="/servicos" ) Serviços
      router-link( to="/localizacao" ) Localização
      router-link( to="/contato" ) Contato

    router-view

</template>

<style lang="sass">
body
  margin: 0

.full-height
  height: 100vh

</style>
