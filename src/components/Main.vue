<template>
	<section class="main">
		<img
			:src="bg"
			class="header-image"
			alt=""
		/>
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
// Note to self - this is the only file that is mobile first breakpoints
.main {
	background: linear-gradient(#e0a6a4, $light-pink);
	color: #fff;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	justify-content: flex-end;
	position: relative;
	width: 100vw;

	.header-image {
		height: 25vh;
		mask: linear-gradient(to bottom, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0));
		object-fit: cover;
		object-position: 0 45%;
		position: absolute;
		top: 0;
		width: 100%;
	}

	.content {
		display: flex;
		padding: 5%;
		padding-top: 5vh;
		flex-wrap: wrap;

		.header {
			font-family: "le murmure";
			margin: 0;

			@media (max-width: 1230px) {
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
		background: url("@/assets/mainBG.jpg");
		background-repeat: no-repeat;
		background-position: center bottom;
		background-size: cover;
		height: 100vh;
		padding-bottom: 2rem;

		.header-image,
		.image-fade {
			display: none;
		}

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
