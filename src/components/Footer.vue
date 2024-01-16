<template>
	<footer class="footer" :class="{sticky}">
		<div class="bryn">
			<div>bryn newell <span class="decoration" aria-hidden="true">—</span></div>
			<div class="year">2024</div>
		</div>
		<SocialLinks />
		<p class="henry">design by <a class="link" href="https://henry.codes/" target="_blank" ref="noopener noreferrer">Henry Desroches</a></p>
	</footer>
</template>

<script>
import SocialLinks from '@/components/SocialLinks.vue';

export default {
	name: 'Main',
	components: {
		SocialLinks
	},
	computed: {
		sticky() {
			return true;
		}
	}
};
</script>

<style lang="scss">
.footer {
	display: grid;
	grid-template-columns: repeat(2, auto);
	margin: 0 10%;
	.bryn {
		align-items: center;
		display: flex;
		font-family: 'le murmure';
		font-size: 2rem;
		grid-row: 1 / span 2;
		text-align: left;
	}
	.year {
		font-family: Avenir;
		font-size: 1rem;
		margin-left: 4px;
		padding-bottom: 4px;
	}
	.social-links {
		text-align: right;
		@media (max-width: $breakpoint-sm) {
			text-align: center;
		}
	}
	.logo path {
		fill: black;
	}
	.henry {
		grid-column: 2;
		text-align: right;
		margin-right: .75rem;
		a {
			color: $rose-gold;
		}
	}

	@media (max-width: $breakpoint-sm) {
		display: flex;
		flex-direction: column;
		align-items: center;
		.bryn {
			margin-bottom: 1rem;
		}
	}
}
</style>
