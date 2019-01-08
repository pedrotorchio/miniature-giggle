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
    FooterSection
  },

}
</script>

<template lang="pug">
  div#sobre
    header-section.full-height( ref = "headerSection" )

    to-section#terapia-ocupacional.wide.padded( ref = "toSection" )
    
    destaques-section.wide.padded( ref = "toSection" )
    
    missao-section#missao.wide.half-padded( ref = "missaoSection" )    

    servicos-section.wide.padded( ref = "atuacaoSection" )
    
    localizacao-section.wide.full-height( ref = "localizacaoSection" )
    
    contato-section.wide.full-height( ref = "contatoSection" )
    
    footer-section.full-height( ref = "footerSection" )

</template>
<style lang="sass" scoped>
$to-height: 600px
#terapia-ocupacional
  height: $to-height

#missao
  // height: $to-height/2
  // height: calc(100vh - #{$to-height})
</style>
