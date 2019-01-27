<script>
import { logoEnter } from '@/scripts/LogoAnimation';
import { TweenMax } from 'gsap';

export default {
    data: () => ({
        navShown: false
    }),
    methods: {
        staggerNavigation(el, done) {
            const delay = el.dataset.index * 0.2;
        
            TweenMax.from(el, .5, {
                autoAlpha: 0,
                onComplete: done,
                delay
            });
        
        },
        showNavigation() {
          this.navShown = true;  
        },
        logoEnter
    },
}
</script>
