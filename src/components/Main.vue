<template>
  <section class="main" :style="{backgroundImage: `url(${bg})`}">
    <div class="content">
      <h1 class="header">bryn newell<span class="decoration" aria-hidden="true">—</span></h1>
      <div class="desc-container">
        <p class="description">Hi there!<br/>I'm bryn (she/her), a creative developer passionate about creating accessible and beautiful front-end code, curating communities, and leading by building my collaborators and teammates up together.</p>
				<SocialLinks />
      </div>
      <nav class="site-sections">
        <a class="link" href="#blog">Blog</a>
        <a class="link" href="#projects">Projects</a>
        <a class="link" href="#resume">Resume/CV</a>
      </nav>
    </div>
  </section>
</template>

<script>
import bg from '@/assets/mainBG.jpg';
import SocialLinks from '@/components/SocialLinks.vue';

export default {
	name: 'Main',
	components: {
		SocialLinks
	},
	data() {
		return {
			bg
		};
	},
};
</script>

<style lang="scss">
.main {
	background-color: $light-pink;
	background-position: center bottom;
	background-repeat: no-repeat;
	background-size: cover;
	color: #FFF;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	justify-content: flex-end;
	padding-bottom: 2rem;
	height: 100vh;
	width: 100vw;

	.content {
		align-items: flex-end;
		display: flex;
		justify-content: space-between;
		padding: 0 5%;

		.header {
			font-size: 8rem;
						font-family: 'le murmure';

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
			max-width: 35%;

			.description {
				font-size: 1rem;
				text-align: left;
			}
		}

		.site-sections {
			display: flex;
			flex-direction: column;
			font-size: 3rem;
			font-family: 'le murmure';
			text-align: right;
			.link,
			.link:visited {
				color: #FFF;
			}
		}
	}
	@media (max-width: $breakpoint-md) {
		.content {
			flex-wrap: wrap;
			.desc-container {
				max-width: 100%;
				.description {
					margin-top: 1rem;
				}
			}
			.site-sections {
				flex-direction: row;
				margin-top: 1rem;
				width: 100%;
				.link:not(:last-child) {
					margin-right: 5%;
				}
			}
		}
	}
}
</style>
