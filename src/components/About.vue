<template>
	<section class="about-me">
		<img
			:src="headshot"
			alt="headshot of bryn"
			class="headshot"
		/>
		<div class="about-text">
			<h2 class="heading outline-font">about me<span
					class="decoration"
					aria-hidden="true"
				>—</span></h2>
			<p class="description">I'm passionate about the a11y community and using tech to bring people together. I love using my expertise on accessibility and beautiful design to improve the experience of the web for all users. I take the ego out of my work, bring positivity, and believe in leading by example through building my collaborators and teammates up together.<br><br />I'm currently located in Colorado, though I'm an avid traveler and have spent many moons doing the "digital nomad" thing. I also love motorcycles, yoga, and reading.<br /><br />I'm employed full time as a Full Stack Developer, but I am available for freelance work as well. I’m happy to tackle new projects from the ground up or audit and revamp what you’ve already got. I'd love to work together so please feel free to <a
					href="mailto:bryn.codes@gmail.com"
					class="link rosegold"
				>get in touch!</a>
			</p>
		</div>
	</section>
</template>

<script>
import headshot from "@/assets/fun-headshot.jpeg";

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
	margin: 5rem 10% 8rem 10%;

	.headshot {
		border-radius: 100%;
		object-fit: cover;
		object-position: 70% 0;
		height: 40vh;
		margin-right: 6rem;
		width: 40vh;
	}

	.about-text {
		text-align: left;
		.heading {
			font-size: $step-8;
			position: relative;
			display: inline-block;
			margin-top: 3rem;
			.decoration {
				position: absolute;
				left: calc(100% + 0.5ch);
			}
		}

		.description {
			color: #000;
			max-width: 600px;
		}
	}
	@media (max-width: $breakpoint-md) {
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
		margin-block: 2rem;
		margin-inline: 5%;
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
