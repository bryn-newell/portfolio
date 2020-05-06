<template>
<div class="about-me">
		<div :style="{backgroundImage: `url(${headshot})`}" aria-label="headshot of Bryn" class="headshot" />
		<div class="about-text">
			<h2 class="heading outline-font">about me<span class="decoration" aria-hidden="true">—</span></h2>
			<p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
	</div>
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

<style lang="scss">
.about-me {
	display: flex;
	flex-wrap: wrap;
	margin-top: 2rem;

	.headshot {
		border-radius: 100%;
		background-size: cover;
		background-repeat: no-repeat;
		background-position: 0 80%;
		height: 40vh;
		margin-right: 4rem;
		width: 40vh;
	}

	.about-text {
		text-align: left;
		.heading {
			font-size: 6rem;
		}

		.description {
			color: #000;
			max-width: 500px;
		}
	}
	@media (max-width:$breakpoint-md ) {
		.headshot {
			margin: 0 auto;
		}
		.about-text {
			text-align: center;
			width: 100%;
			.description {
				max-width: 100%;
			}
		}
	}
}

</style>
