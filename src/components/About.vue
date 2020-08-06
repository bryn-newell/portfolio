<template>
	<section class="about-me">
			<div :style="{backgroundImage: `url(${headshot})`}" aria-label="headshot of Bryn" class="headshot" />
			<div class="about-text">
				<h2 class="heading outline-font">about me<span class="decoration" aria-hidden="true">—</span></h2>
				<p class="description">I love good UX, the a11y community, and Vue! I'm also a Colorado native, avid weight lifter and rock climber, and D&D nerd. <br/><br/>I'm currently employed full time as a Full Stack Developer at a financial tech company, but I am available for freelance work on the side. I have a background in full stack, UI and UX design experience, and my latest offering is performing accessibility audits for your already-existing site. I'd love to work together so please feel free to
					<a href="mailto:bryn.codes@gmail.com" class="link rosegold">get in touch!</a>
				</p>
		</div>
	</section>
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
	margin: 5rem 0 8rem 18%;

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
		margin-left: 0;
		.headshot {
			margin: 0 auto;
		}
		.about-text {
			text-align: center;
			width: 100%;
			.description {
				margin-left: auto;
				margin-right: auto;
			}
		}
	}
	@media (max-width: $breakpoint-sm) {
		margin-top: 2rem;
		margin-bottom: 2rem;
		.headshot {
			height: 25vh;
			width: 25vh;
		}
		.heading {
			margin: 1.5rem auto;
			.decoration {
				display: none;
			}
		}
	}
}

</style>
