<script>
import TextInput from '@/components/inputs/Text'

export default {
    components: { TextInput },
    data: () => ({
        name: ''
    })    
}
</script>
<template lang="pug">
    form
        text-input
</template>
