<template lang="pug">
  div#app
    div#nav
      router-link( to="/" ) Sobre
      router-link( to="/servicos" ) Serviços
      router-link( to="/localizacao" ) Localização
      router-link( to="/contato" ) Contato

    router-view

</template>

<style lang="scss">

</style>
