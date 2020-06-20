<template>
	<div class="footer" :class="{sticky}">
		<div class="bryn">
			<div>bryn newell <span class="decoration" aria-hidden="true">—</span></div>
			<div class="year">2020</div>
		</div>
		<div class="social-links">
			<a href="https://github.com/bryn-newell" target="_blank" ref="noopener noreferrer">
				<img :src="github" alt="Github" class="logo">
			</a>
			<a href="https://twitter.com/bryn_newell" target="_blank" ref="noopener noreferrer">
				<twitter class="logo" />
			</a>
			<a href="https://medium.com/@bryn.newell" target="_blank" ref="noopener noreferrer">
				<medium class="logo" />
			</a>
			<a href="https://www.linkedin.com/in/bryn-newell/" target="_blank" ref="noopener noreferrer">
				<linkedin class="logo" />
			</a>
		</div>
		<p class="henry">design by <a class="link" href="https://henry.codes/" target="_blank" ref="noopener noreferrer">Henry Desroches</a></p>
	</div>
</template>

<script>
import github from '@/assets/github-black.png';
import medium from '@/assets/medium.vue';
import twitter from '@/assets/twitter.vue';
import linkedin from '@/assets/linkedin.vue';

export default {
	name: 'Main',
	components: {
		medium,
		twitter,
		linkedin
	},
	computed: {
		sticky() {
			return true;
		}
	},
	data() {
		return {
			github
		};
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
		font-family: 'inter';
		font-size: 1rem;
		margin-left: 4px;
		padding-bottom: 6px;
	}
	.social-links {
		text-align: right;
	}
	.logo {
		fill: black;
		path {
			fill: black;
		}
	}
	.henry {
		grid-column: 2;
		text-align: right;
		margin-right: .75rem;
		a {
			color: $rose-gold;
		}
	}
}
</style>
