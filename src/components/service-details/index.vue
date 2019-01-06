<script>
import { ServiceData } from '@/servicos'
import HoverableImage from '@/components/hoverable-image';

export default {
    components: { HoverableImage},
    props: {
        data: {
            type: ServiceData | null,
            required: false
        }
    },
    data: () => ({
        shown: false
    }),
    methods: {
        show() {
            this.shown = true
        },
        hide() {
            this.shown = false
        }
    }

}  
</script>
<template lang="pug">
    aside( :class = "{ shown }")
        template( v-if = "data" )
            h2 {{ data.title }}
            p {{ data.details }}
            hoverable-image( v-if = "data.img" :src = "`/assets/imgs/${data.img}`" :src-placeholder = "`/assets/imgs/${data.placeholder}`" )

</template>
