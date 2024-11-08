<template>
	<section class="main">
		<div class="content">
			<h1 class="header">bryn newell<span
					class="decoration"
					aria-hidden="true"
				>—</span></h1>
			<div class="desc-container">
				<p class="description">Hi there!<br />I'm bryn (she/her), a creative developer passionate about creating accessible and beautiful front-end code, curating communities, and moving the needle forward in any environment I can.</p>
				<SocialLinks />
			</div>
			<nav class="site-sections">
				<a
					class="link"
					href="#blog"
				>blog</a>
				<a
					class="link"
					href="#projects"
				>projects</a>
				<a
					class="link"
					href="#resume"
				>resume/cv</a>
			</nav>
		</div>
	</section>
</template>

<script>
import bg from "@/assets/mainBG.jpg";
import SocialLinks from "@/components/SocialLinks.vue";

export default {
	name: "Main",
	components: {
		SocialLinks,
	},
	data() {
		return {
			bg,
		};
	},
};
</script>

<style lang="scss">
.main {
	background-color: $light-pink;
	background: url("@/assets/mainBG.jpg");
	background-repeat: no-repeat;
	background-position: 100% 0%;
	background-size: contain;
	color: #fff;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	justify-content: flex-end;
	width: 100vw;

	.content {
		background: linear-gradient(#e0a6a4, $light-pink);
		display: flex;
		padding: 5%;
		flex-wrap: wrap;
		margin-top: 20vh;

		.header {
			font-size: 8rem;
			font-family: "le murmure";
			margin: 0;

			@media (max-width: 1098px) {
				.decoration {
					display: none;
				}
			}
		}

		.desc-container {
			align-items: flex-start;
			display: flex;
			flex-direction: column;

			.description {
				font-size: 1rem;
				text-align: left;
				margin-top: 1rem;
			}
		}

		.site-sections {
			display: flex;
			flex-direction: row;
			font-size: 3rem;
			font-family: "le murmure";
			text-align: right;
			margin-top: 1rem;
			width: 100%;

			.link,
			.link:visited {
				color: #fff;
			}
			.link:not(:last-child) {
				margin-right: 5%;
			}
		}
	}

	@media (min-width: $breakpoint-sm) {
		.content .desc-container {
			max-width: 80%;
		}
	}

	@media (min-width: $breakpoint-md) {
		background-position: center bottom;
		background-size: cover;
		height: 100vh;
		padding-bottom: 2rem;

		.content {
			align-items: flex-end;
			background: transparent;
			justify-content: space-between;
			flex-wrap: nowrap;
			padding-block: 0;

			.desc-container {
				max-width: 35%;

				.description {
					margin-top: 0;
					max-width: 75vw;
				}
			}

			.site-sections {
				flex-direction: column;
				margin-top: 0;
				width: auto;

				.link {
					margin-right: 0;
				}
			}
		}
	}
}
</style>
