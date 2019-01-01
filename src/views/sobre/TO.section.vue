<script>
export default {
    computed: {
        linePath() {
            if (!this.boundingBox)
                return "";

            const box = this.boundingBox;
            return `M 0 0 L ${box.width/3} ${box.height/3} L ${box.width/2} ${box.height/2} L ${box.width + 100} ${box.height}`;
        }
    }
}
</script>
<template lang="pug">
    section
        svg.cover.site-line( fill = "none")
            path( :d="linePath" )
</template>
<style lang="sass" scoped>
    
</style>
