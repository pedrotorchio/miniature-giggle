<script>
import lazyImage from 'v-lazy-image';
export default {
  name: 'home',
  components: { lazyImage }
}
</script>

<template lang="pug">
  div#sobre
    lazy-image( src = "/assets/imgs/about-hero.jpg" )
</template>