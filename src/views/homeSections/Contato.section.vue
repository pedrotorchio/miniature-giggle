<script>
import { TweenMax, SlowMo, TimelineMax, Power2 } from 'gsap';
import ContactForm from '@/components/contact-form';
import Section from '@/mixins/Section.mixin';

export default {
    extends: Section,
    components: { ContactForm },
    data: () => ({
        tel: "3333-4444",

    }),
}
</script>
<template lang="pug">
    section#contato
        div
            contact-form
            p {{ tel }}
            
</template>
<style lang="sass" scoped>
@import "~@/styles/config";
    
</style>
