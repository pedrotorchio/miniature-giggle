<script>
import { TweenMax, SlowMo, TimelineMax, Power2 } from 'gsap';
import ContactForm from '@/components/contact-form';
import Section from '@/mixins/Section.mixin';
import { email, phone } from '@/contact'
export default {
    extends: Section,
    components: { ContactForm },
    data: () => ({
        tel: phone,
        email: email
    }),
}
</script>
<template lang="pug">
    section#contato
        p {{ tel }}
        p {{ email }}

</template>
<style lang="sass" scoped>
@import "~@/styles/config";
#contato
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center

    p
        font-size: 16px
        text-transform: uppercase
        font-weight: bold
</style>
