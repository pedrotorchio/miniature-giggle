<script>
import Route from '@/mixins/Route.mixin';
import HeaderSection from './sobre/Header.section';
import ToSection from './sobre/TO.section';

export default {
  name: 'home',
  extends: Route,
  components: { HeaderSection, ToSection }
}
</script>

<template lang="pug">
  div#sobre
    header-section( ref = "headerSection" )
    to-section( ref = "toSection" )
    
</template>