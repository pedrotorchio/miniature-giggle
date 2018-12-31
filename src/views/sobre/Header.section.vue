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
            const ctaOffset = 0;
            new TimelineMax({ onComplete: done, delay: 3 })
                .to(el.querySelector('path'), 1, {
                    strokeDashoffset: 0,
                    ease: SlowMo.ease.config(0.5, 0.7, false)
                })
                .set(this.$refs['cta'], {
                    visibility: 'visible'
                }, ctaOffset)
                .addCallback(() => {
                        ['Bottom', 'Left', 'Top', 'Right']
                            .forEach( pos => this.$refs[`ctaBorder${pos}`].classList.add('shown') )
                }, ctaOffset)
                .staggerFrom( this.$refs['ctaLetters'], 1, { 
                    autoAlpha:0, 
                    y: 50, 
                    ease: SlowMo.easeOut 
                }, 0.05, ctaOffset)
                
            
        },
    }
}
</script>

