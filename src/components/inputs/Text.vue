<script>
import Input from './Input.mixin';

export default {
    extends: Input,
}
</script>
<template lang="pug">
    div.input( :class = "{ labelup }" )
        label( v-if = "placeholder" :for = "attrs['id']" ) {{ placeholder }}
        input.input-element( v-bind = "attrs" v-on = "listeners"
            :value = "value" @input = "$emit('input', $event.target.value)" 
            @blur = "blur" @focus = "focus"
        )
</template>