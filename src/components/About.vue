<template>
	<section class="about-me">
			<div :style="{backgroundImage: `url(${headshot})`}" aria-label="headshot of Bryn" class="headshot" role="img" />
			<div class="about-text">
				<h2 class="heading outline-font">about me<span class="decoration" aria-hidden="true">—</span></h2>
				<p class="description">I'm passionate about the a11y community and using tech to bring people together. I love using my expertise on accessibility and beautiful design to improve the experience of the web for all users. I take the ego out of work, bring the positivity, and believe in leading by example and through building my collaborators and teammates up together.<br><br/>I'm currently located in Colorado, but an avid traveler and spent many moons doing the "digital nomad" thing. I also love motorcycles, yoga, and D&D.<br/><br/>I'm employed full time as a Full Stack Developer, but I am available for freelance work as well. I’m happy to tackle new projects from the ground up or audit and revamp what you’ve already got. I'd love to work together so please feel free to <a href="mailto:bryn.codes@gmail.com" class="link rosegold">get in touch!</a>
					leading by building my collaborators and teammates up together
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
