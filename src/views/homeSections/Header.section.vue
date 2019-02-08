<script>
import { TweenMax, SlowMo, TimelineMax } from 'gsap';
import lazyImage from 'v-lazy-image';
// import '@/components/svg/about-hero-line2';
import Section from '@/mixins/Section.mixin';

export default {
    extends: Section,
	components: { lazyImage },
	data: () => ({
		ctaText: "Conheça a REATO"
	}),
	computed: {
		ctaTextArray() {
			return this.ctaText.split('');
		}
	},
	methods: {
		initializeLine() {
			const el = this.$refs['line'].$el.querySelector('path');

			const length = el.getTotalLength();
			
			TweenMax.set(el, {
				visibility: 'visible',
				strokeDasharray: length,
				strokeDashoffset: length
			});

			return el;
		},
		getTimelineParameters() {
			return { delay: 3 };
		},
		animate(timeline) {
			// const line = this.initializeLine();
			const ctaOffset = 0;

			timeline
				// .to(line, 1, {
				// 	strokeDashoffset: 0,
				// 	ease: SlowMo.ease.config(0.5, 0.7, false),
				// 	immediateRender: false
				// })
				// .set(this.$refs['cta'], {
				// 	visibility: 'visible'
				// }, ctaOffset)
				.addCallback(() => {
					this.$refs['cta'].style['visibility'] = 'visible';

					['Bottom', 'Left', 'Top', 'Right']
						.forEach( pos => this.$refs[`ctaBorder${pos}`].classList.add('shown') )
				}, ctaOffset)
				.staggerFrom( this.$refs['ctaLetters'], 1, { 
					autoAlpha:0, 
					y: 50, 
					ease: SlowMo.easeOut 
				}, 0.05, ctaOffset);
				
			
		},
	}
}
</script>

<template lang="pug">
	header.section
		lazy-image.cover(
			src = "/assets/imgs/about-hero.jpg"
			src-placeholder = "/assets/imgs/about-hero-tiny.jpg" )

		//- svgicon#header-line.site-line( ref = "line" name = "about-hero-line2" :fill = "false" color = "blue" )
	  
		a.cta( ref = "cta" href = "#terapia-ocupacional" )
			span.border.top( ref = "ctaBorderTop" )
			span.border.bottom( ref = "ctaBorderBottom" )
			span.border.left( ref = "ctaBorderLeft" )
			span.border.right( ref = "ctaBorderRight" )

			span.text( ref = "ctaLetters" v-for = "( letter, i ) in ctaTextArray" :key = "letter + i" :data-index = "i" ) {{ letter }}
</template>


<style lang="sass" scoped>
@import '~@/styles/config'
@import '~media-query-mixins'

header
	height: 100vh
    
header img
	object-position: 35% center

#header-line
	position: absolute
	z-index: 555
	width: 100%
	height: 100%
	bottom: 0px
	left: 0
	top: 0
	

	
.cta
	position: absolute
	bottom: 100px
	width: 90%
	margin: 0 auto
	left: 50%
	transform: translateX(-50%)
	font-size: 20px
	text-align: center
	+sm
		right: 66px
		margin: 0
		font-size: 24px
		width: auto
		left: initial
		transform: none
</style>