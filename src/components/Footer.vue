<template>
	<div class="footer">
		<div class="cites">
			<p>copyright? bryn newell <span class="decoration" aria-hidden="true">—</span> 2020</p>
			<p>design by <a href="https://henry.codes/">Henry Desroches</a></p>
		</div>
		<div class="social-links">
			<a href="https://github.com/bryn-newell" target="_blank">
				<img :src="github" alt="Github" class="logo">
			</a>
			<a href="https://twitter.com/bryn_newell" target="_blank">
				<twitter class="logo" />
			</a>
			<a href="https://medium.com/@bryn.newell" target="_blank">
				<medium class="logo" />
			</a>
			<a href="https://www.linkedin.com/in/bryn-newell/" target="_blank">
				<linkedin class="logo" />
			</a>
		</div>

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
	.cites {
		text-align: left;
		margin-left: 10%;
	}
	.social-links {
		text-align: right;
		margin-right: 10%;
	}
	.logo {
		fill: black;
		path {
			fill: black;
		}
	}
}
</style>
