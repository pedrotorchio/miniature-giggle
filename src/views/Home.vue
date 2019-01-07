<script>
import Route from '@/mixins/Route.mixin';

const HeaderSection = () => import('./homeSections/Header.section');
const ToSection = () => import('./homeSections/TO.section');
const DestaquesSection = () => import('./homeSections/TODestaques.section');
const ServicosSection = () => import('./homeSections/Servicos.section');
const LocalizacaoSection = () => import('./homeSections/Localizacao.section');
const ContatoSection = () => import('./homeSections/Contato.section');

export default {
  name: 'home',
  extends: Route,
  components: { HeaderSection, ToSection, DestaquesSection, ServicosSection, LocalizacaoSection, ContatoSection }
}
</script>

<template lang="pug">
  div#sobre
    header-section.full-height( ref = "headerSection" )

    to-section.wide( ref = "toSection" )
    destaques-section.wide( ref = "toSection" )

    servicos-section.wide.full-height( ref = "atuacaoSection" )
    
    localizacao-section.wide.full-height( ref = "localizacaoSection" )
    
    contato-section.wide.full-height( ref = "contatoSection" )




    
</template>