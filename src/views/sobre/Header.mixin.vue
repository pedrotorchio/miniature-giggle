<script>
import { TweenMax, SlowMo } from 'gsap';
export default {
    data: () => ({
        isHeaderImageLoaded: false
    }),
    methods: {
        headerImageLoaded() {
            this.isHeaderImageLoaded = true;
        },
        beforeLineEnter(el, done) {
            const path = el.querySelector('path');
            const length = path.getTotalLength();
            
            path.style.strokeDasharray = length;
            path.style.strokeDashoffset = length;

        },
        lineEnter(el, done) {

            TweenMax.to(el.querySelector('path'), 1, {
                strokeDashoffset: 0,
                ease: SlowMo.ease.config(0.5, 0.7, false),
                delay: 4
            });
        }
    }
}
</script>
