<script>

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
        h2 REATO
        div#late-words
            span( v-for = "( word, i ) in lateWords" :key = "word + i" :style = "{ top: `${calcTop(i)}%` }" ) {{ word }}
        
            
</template>
<style lang="sass" scoped>
@import "~@/styles/config";

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
        font-family: impact
        text-transform: uppercase
        
h2
    flex: 0 0 auto
h2
    margin: 0
    text-align: center
    font-size: 96px

    
</style>
