<template>
<div class="about-me">
		<div :style="{backgroundImage: `url(${headshot})`}" aria-label="headshot of Bryn" class="headshot" />
		<div class="about-text">
			<h2 class="heading outline-font">about me<span class="decoration" aria-hidden="true">—</span></h2>
			<p class="description">hi there! My name is Bryn and I'm a software developer, native Coloradan, and avid rock climber!
				I'm passionate about creating beautiful and accessibily front-end software through UI and UX design and development and
				being an active part of the a11y community. I also love D&D, picking up and putting down heavy things, and animal
				crossing. I'm currently available for part time freelance and email is the best way to get in touch!
			</p>
	</div>
</div>
</template>

<script>
import headshot from '@/assets/headshot.jpg';

export default {
	data() {
		return {
			headshot
		};
	},
};
</script>

<style lang="scss">
.about-me {
	display: flex;
	flex-wrap: wrap;
	margin: 5rem 0 10rem 18%;

	.headshot {
		border-radius: 100%;
		background-size: cover;
		background-repeat: no-repeat;
		background-position: 0 80%;
		height: 40vh;
		margin-right: 6rem;
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
