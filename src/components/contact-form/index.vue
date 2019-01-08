<script>
import TextInput from '@/components/inputs/Text'

export default {
    components: { TextInput },
    data: () => ({
        name: '',
        email: ''
    })
}
</script>
<template lang="pug">
    form
        text-input( v-model = "name" placeholder = "Nome" )
        text-input( v-model = "email" placeholder = "Email" )
</template>
