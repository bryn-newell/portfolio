<template>
  <div class="main" :style="{backgroundImage: `url(${bg})`}">
    <div class="content">
      <h1 class="header">bryn newell<span class="decoration" aria-hidden="true">—</span></h1>
      <div class="desc-container">
        <p class="description">hi there!<br/>I'm bryn (she/her), a creative developer passionate about creating accesible and beautiful
				front-end code, currating communities, and leading by building my collaborators and teammates up together.</p>
        <div class="social-links">
          <!-- <a href="https://github.com/bryn-newell" target="_blank" ref="noopener noreferrer">
            <img :src="github" alt="Github" class="logo">
          </a> -->
          <a href="https://twitter.com/bryn_newell" target="_blank" ref="noopener noreferrer">
            <twitter class="logo" />
          </a>
          <a href="https://medium.com/@bryn.newell" target="_blank" ref="noopener noreferrer">
            <medium class="logo" />
          </a>
          <a href="https://www.linkedin.com/in/bryn-newell/" target="_blank" ref="noopener noreferrer">
            <linkedin class="logo" />
          </a>
        </div>
      </div>
      <ul class="section-list">
        <li><a class="link" href="#blog">Blog</a></li>
        <li><a class="link" href="#projects">Projects</a></li>
        <li><a class="link" href="#resume">Resume/CV</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
import bg from '@/assets/mainBG.jpg';
import github from '@/assets/github.png';
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
			bg,
			github
		};
	},
};
</script>

<style lang="scss">
.main {
	background-size: cover;
	background-repeat: no-repeat;
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
		padding: 0 1rem;

		.header {
			font-size: 8rem;
						font-family: 'le murmure';

			margin: 0;

			@media (max-width: 1052px) {
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

		.section-list {
			font-size: 3rem;
			font-family: 'le murmure';
			list-style-type: none;
			margin: 0;
			padding: 0;
			.link:visited {
				color: #FFF;
			}
		}
	}

}
</style>
