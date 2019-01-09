<script>
import Route from '@/mixins/Route.mixin';

const HeaderSection = () => import('./homeSections/Header.section');
const ToSection = () => import('./homeSections/TO.section');
const DestaquesSection = () => import('./homeSections/TODestaques.section');
const MissaoSection = () => import('./homeSections/Missao.section');
const ServicosSection = () => import('./homeSections/Servicos.section');
const LocalizacaoSection = () => import('./homeSections/Localizacao.section');
const ContatoSection = () => import('./homeSections/Contato.section');
const FooterSection = () => import('./homeSections/Footer.section');

const HoverableImage = () => import('@/components/hoverable-image');

import { progress, markerId } from '@/scripts/ScrollEvents'

export default {
  name: 'home',
  extends: Route,
  components: { 
    HeaderSection, 
    ToSection, 
    DestaquesSection, 
    MissaoSection, 
    ServicosSection, 
    LocalizacaoSection,
    ContatoSection,
    FooterSection,

    HoverableImage
  },
  data: () => ({
    activeSection: null
  }),
  methods: {
    scrollProgress() {
      window.onscroll = () => {

        const servicos = this.$refs['servicosSection'];
        const localizacao = this.$refs['localizacaoSection'];
        const contato = this.$refs['contatoSection'];
        const sobre = this.$refs['footerSection'];

        const scrollPosition = document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset;

        const scrolled = progress( servicos && servicos.$el , scrollPosition )
        const id = markerId( [  servicos && servicos.$el, 
                                  localizacao && localizacao.$el, 
                                  contato && contato.$el, 
                                  sobre && sobre.$el ], scrollPosition )

        this.$parent.setProgress(scrolled)
        this.$parent.setProgressSection(id)
         
      }  
    },
  },
  mounted() {
    setTimeout(this.scrollProgress, 0);
  }
}
</script>

<template lang="pug">
  div#sobre
    header-section.full-height( ref = "headerSection" )

    to-section#terapia-ocupacional.wide.padded( ref = "toSection" )
    
    destaques-section.wide.padded.bg-colored( ref = "toSection" )
    
    missao-section#missao.wide.half-padded.bg-colored( ref = "missaoSection" )    

    servicos-section.wide.padded( ref = "servicosSection" )

    section#img-1.space
      hoverable-image#img.cover(
        :hoverable = "false"
        src = "/assets/imgs/localizacao-4.jpg"
        src-placeholder = "/assets/imgs/localizacao-4-tiny.jpg" )

    localizacao-section.wide.full-height( ref = "localizacaoSection" )

    div#photos
      ul
        li
            hoverable-image( src = "/assets/imgs/localizacao-1.jpg" src-placeholder = "/assets/imgs/localizacao-1-tiny.jpg" )
              p Empresarial
        li
            hoverable-image( src = "/assets/imgs/localizacao-2.jpg" src-placeholder = "/assets/imgs/localizacao-2-tiny.jpg" )
              p Empresarial/
                br
                | Shopping
        li
            hoverable-image( src = "/assets/imgs/localizacao-3.jpg" src-placeholder = "/assets/imgs/localizacao-3-tiny.jpg" )
              p Saguão
        li
            hoverable-image( src = "/assets/imgs/localizacao-5.jpg" src-placeholder = "/assets/imgs/localizacao-5-tiny.jpg" )
              p Recepção
        li
            hoverable-image( src = "/assets/imgs/localizacao-6.jpg" src-placeholder = "/assets/imgs/localizacao-6-tiny.jpg" )
              p Sala 1
        li
            hoverable-image( src = "/assets/imgs/localizacao-4.jpg" src-placeholder = "/assets/imgs/localizacao-4-tiny.jpg" )
              p Sala 2
    
    contato-section.wide.full-height.bg-colored( ref = "contatoSection" )
    
    footer-section.full-height( ref = "footerSection" )

</template>
<style lang="sass" scoped>
$to-height: 600px
#terapia-ocupacional
  height: $to-height

#img-1
  height: 300px
#missao
  // height: $to-height/2
  // height: calc(100vh - #{$to-height})

.space
  margin: 100px 0

#photos
  bottom: 0
  width: 100%

  ul
      display: flex
      padding: 0
      margin: 0

  li
      flex: 1 1 auto
      list-style: none
      cursor: pointer
      min-width: 64px

  .hoverable-image
      padding-bottom: 100%

      /deep/ .caption
        transition: opacity .5s
        opacity: 0
        color: white
        font-weight: bold
        position: absolute
        left: 1em
      &:hover /deep/ .caption
        opacity: 1
</style>
