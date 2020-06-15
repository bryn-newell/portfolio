<template>
<div id="projects">
	<h2 class="heading outline-font">projects</h2>
	<div class="project" v-for="(project, index) in projects" :key="index">
		<h3 class="outline-font black project-number">0{{ index + 1 }}</h3>
		<h3 class="title">{{ project.title }}<span class="decoration" aria-hidden="true">—</span></h3>
		<p class="date">{{ project.date }}</p>
		<p class="description">{{ project.description }}</p>
		<ul class="tools">
			<li v-for="(tool, index) in project.tools" :key="index">{{ tool }}</li>
		</ul>
		<a href="#" class="project-link link">see the work<span class="decoration" aria-hidden="true">—</span></a>
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
					title: 'The Gift of Giving',
					date: 'March 2019',
					description: 'An application built with multiple GCP solutions, including Firebase cloud functions and firestore. The project was built as a solution to gift giving, when not all of your gift list receivers communicate.',
					tools: ['React', 'GCP', 'Node', 'Express', 'JavaScript', 'HTML', 'SCSS']
				},
				{
					title: 'Food Truck Slack Bot',
					date: 'April 2019',
					tools: ['React', 'Slack', 'cronjob']
				},
				{
					title: 'Skillbase/Developer Competency Matrix',
					date: 'May 2019',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
					tools: ['React', 'AWS', 'Node', 'Express', 'SQL', 'MySQL', 'JavaScript', 'HTML', 'SCSS']
				},
				{
					title: 'Techtonic Website',
					date: 'June 2019',
					tools: ['React', 'Docker', 'Gatsby', 'Butter', 'AntD', 'SCSS']
				}
			]
		};
	}
};

</script>

<style lang="scss">
#projects {
	margin-top: 12rem;
	.heading {
		text-align: left;
		margin-left: 10%;
		margin-top: 0;
	}
	.project {
		justify-content: start;
		display: grid;
		grid-template-columns: 2fr 4fr 1fr;
		grid-template-rows: auto auto auto;
		gap: 1rem 0;
		max-width: 1000px;
		margin: 0 auto 6rem auto;
		text-align: left;

		.project-number {
			align-self: center;
			font-size: 12rem;
			grid-row: 1 / span 3;
			margin: 0 6rem 0 3rem;
		}

		.title {
			font-size: 6rem;
			font-family: 'Le Murmure';
			margin: 0;
			max-width: 520px;
		}

		.date {
			align-self: center;
			justify-self: end;
			margin: 0;
			padding-bottom: 18px;
		}

		.description {
			max-width: 400px;
			margin: 0;
			margin-right: 4rem;
		}

		.tools {
			list-style: none;
			grid-column: 3;
			grid-row: 2 / span 2;
			justify-self: end;
			margin: 0;
			padding: 0;
			text-align: right;
		}

		.project-link {
			font-size: 2rem;
			font-weight: bold;
			color: $rose-gold;
			font-family: 'le murmure';
		}
	}
}
</style>
