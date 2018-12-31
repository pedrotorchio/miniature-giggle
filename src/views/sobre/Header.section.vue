<script>
import { TweenMax, SlowMo, TimelineMax } from 'gsap';
export default {
    data: () => ({
        isHeaderImageLoaded: false,
        ctaText: "Descubra a REATO"
    }),
    computed: {
        ctaTextArray() {
            return this.ctaText.split('');
        }
    },
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
            
            new TimelineMax({ onComplete: done, delay: 4 })
                .to(el.querySelector('path'), 1, {
                    strokeDashoffset: 0,
                    ease: SlowMo.ease.config(0.5, 0.7, false)
                })
                .set(this.$refs['cta'], {
                    visibility: 'visible'
                })
                .staggerFrom( this.$refs['ctaLetters'], 1, { 
                    autoAlpha:0, 
                    y: 50, 
                    ease: SlowMo.easeOut 
                }, 0.05, .1)
                .addCallback(() => {
                    this.$refs.ctaBorderBottom.classList.add('shown');
                    this.$refs.ctaBorderLeft.classList.add('shown');
                    this.$refs.ctaBorderTop.classList.add('shown');
                    this.$refs.ctaBorderRight.classList.add('shown');
                }, .1)
                
            
        },
    }
}
</script>

