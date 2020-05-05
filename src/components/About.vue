<template>
<div>
	<div class="headshot"><img :src="headshot" alt="headshot of Bryn"></div>
	<h2>about me<span class="decoration" aria-hidden="true">—</span></h2>
	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
</div>
</template>

<script>
import headshot from '@/assets/headshot.jpg';

export default {
	data() {
		return {
			headshot,
		};
	},
};
</script>

<style lang="scss" scoped>
	.headshot {
		height: 40vh;
		width: 40vh;
		border-radius: 100%;
		overflow: hidden;
		img {
			height: 50vh;
		}
	}

	h2 {
		color: $rose-gold;
		-webkit-text-fill-color: white;
		-webkit-text-stroke-width: 1px;
		-webkit-text-stroke-color: $rose-gold;
		font-family: 'le murmure';
		font-size: 6rem;
	}

	p {
		color: #000;
		max-width: 50%;
		margin: 0 auto;
	}
</style>
