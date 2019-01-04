<script>
import '@/components/svg/reato';
import lazyImage from 'v-lazy-image';
import hoverableImage from '@/components/hoverable-image';

import Section from '@/mixins/Section.mixin';

export default {
    extends: Section,
    components: { hoverableImage },
    data: () => ({
        words: [
            'Serviço',
            'Serviço Diferente',
            'Um Outro Serviço',
            'Fazemos isso',
            'Fazemos Aquilo',
            'Isso é Importante',
            'Palavra Chave',
            'Outra Palavra Chave',
            'Chave Palavra',
            'Outra Chave'
        ],
    }),
    computed: {
        earlyWords() {
            const length = this.words.length;
            return this.words.slice(0, length/2);
        },
        lateWords() {
            const length = this.words.length;
            return this.words.slice(length/2, length);
        }
    },
    methods: {
        calcTop(i) {
            const length = this.words.length
            if (i > length/2)
                i = i - length/2

            return i * 100 / length
        }
    }
}
</script>
<template lang="pug">
    section#servicos( ref = "container" )
        div#early-words
            span( v-for = "( word, i ) in earlyWords" :key = "word + i" :style = "{ top: `${calcTop(i)}%` }" ) {{ word }}
        transition( appear ) 
            svgicon#logo( name = "reato" :original = "true" )
        div#late-words
            span( v-for = "( word, i ) in lateWords" :key = "word + i" :style = "{ top: `${calcTop(i)}%` }" ) {{ word }}
        
            
</template>
<style lang="sass" scoped>
@import "~@/styles/config"
@import "~@/styles/_animation.scss"

#servicos
    position: relative
    display: flex
    flex-direction: column

#early-words, #late-words
    position: relative
    flex: 1 1 auto
    display: flex
    justify-content: space-around
    align-items: center
    flex-wrap: wrap

    span
        font-size: 20px
        font-weight: 100
        position: relative
        flex: 0 0 auto
        padding: 0 10px
        font-size: 24px
        font-family: inherit
        text-transform: uppercase
        color: $color--primary
        opacity: .5
        transition-property: transform, text-shadow
        transition-duration: 1s

        &:hover
            text-shadow: 0px 8px 4px rgba(0,0,0,0.2)
            transform: translatey(-8px)
#logo
    margin: 0
    width: 300px
    margin: 0 auto
    transition: transform
    transition-duration: .3s 
    transition-timing-function: cubic-bezier(0.38, 0.15, 0.42, 2.29)
    
    &:hover
        transform: scale(1.2)
        transition-duration: .5s
        

</style>
