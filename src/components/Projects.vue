<template>
<div class="projects" >
	<h2 class="heading outline-font">projects</h2>
	<div class="project" v-for="(project, index) in projects" :key="index">
		<h3 class="outline-font black project-number">0{{ index + 1 }}</h3>
		<div class="content">
			<h3 class="title">{{ project.title }}<span class="decoration" aria-hidden="true">—</span></h3>
			<p class="date">{{ project.date }}</p>
			<p class="description">{{ project.description }}</p>
			<ul class="tools">
				<li v-for="(tool, index) in project.tools" :key="index">{{ tool }}</li>
			</ul>
			<a href="#" class="project-link">see the work<span class="decoration" aria-hidden="true">—</span></a>
		</div>
	</div>
</div>
</template>

<script>
export default {
	data() {
		return {
			projects: [
				{
					title: 'Initiative',
					date: 'October 2019',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
					tools: ['React', 'Axios', 'JavaScript', 'HTML', 'SCSS']
				},
				{
					title: 'Some API Project',
					date: 'October 2019',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
					tools: ['Vue', 'Express', 'JavaScript', 'HTML', 'SCSS']
				},
				{
					title: 'A Project With A Long Title',
					date: 'October 2019',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
					tools: ['Vue', 'Express', 'JavaScript', 'HTML', 'SCSS']
				}
			]
		};
	}
};

</script>

<style lang="scss">
.projects {
	.heading {
		font-size: 10rem;
	}
	.project {
		display: grid;
		grid-template-columns: auto auto;
		max-width: 1000px;
		margin: 0 auto 6rem auto;

		.project-number {
			align-self: center;
			font-size: 12rem;
			margin: 0;
		}

		.content {
			align-items: center;
			display: grid;
			gap: 1rem 0;
			grid-template-columns: auto auto;
			grid-auto-rows: min-content;
			justify-items: start;
			text-align: left;

			.title {
				font-size: 6rem;
				font-family: 'Le Murmure';
				margin: 0;
				max-width: 520px;
			}

			.date {
				margin: 0;
				justify-self: end;
			}

			.description {
				max-width: 400px;
				margin: 0;
				margin-right: 4rem;
			}

			.tools {
				list-style: none;
				justify-self: end;
				padding: 0;
				margin: 0;
				text-align: right;
			}

			.project-link {
				font-size: 2rem;
				font-weight: bold;
				color: $rose-gold;
				font-family: 'le murmure';
				text-decoration: none;
				&:hover {
					text-decoration: underline;
				}
			}
		}
	}
}
</style>
