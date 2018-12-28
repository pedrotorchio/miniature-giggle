<script>
import lazyImage from 'v-lazy-image';

import header from './sobre/header';

export default {
  name: 'home',
  mixins: [ header ],
  components: { lazyImage }
}
</script>

<template lang="pug">
  div#sobre
    header.full-height.section
      lazy-image.cover(
        :class = "{ 'not-loaded': !isHeaderImageLoaded }"
        src = "/assets/imgs/about-hero.jpg"
        src-placeholder = "/assets/imgs/about-hero-tiny.jpg"
        @load = "headerImageLoaded" )
</template>

