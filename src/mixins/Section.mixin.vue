<script>
import { TimelineMax } from 'gsap';

export default {
    data: () => ({
        animationTimeline: null
    }),
    methods: {
        animation() {
            const parameters = Object.assign({ onComplete: () => this.$emit('doneAnimating') }, this.getTimelineParameters());
            this.animationTimeline = new TimelineMax(parameters);
            this.animate(this.animationTimeline);
        },
        getTimelineParameters() {
            return {}
        },
        animate(){}
    },
    mounted() {
        setTimeout(this.animation, 0);
    }
}
</script>
