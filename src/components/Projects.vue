<template>
	<section id="projects">
		<h2 class="heading outline-font">projects</h2>
		<div class="project" v-for="(project, index) in projects" :key="index">
			<span class="outline-font black project-number">0{{ index + 1 }}</span>
			<h3 class="title">{{ project.title }}</h3>
			<p class="date">{{ project.date }}</p>
			<p class="description" v-html="project.description"></p>
			<ul class="tools">
				<li v-for="(tool, index) in project.tools" :key="index">{{ tool }}</li>
			</ul>
			<a v-if="project.link" :href="project.link" class="project-link link" target="_blank" ref="noopener noreferrer">see the work<span class="decoration" aria-hidden="true">—</span></a>
		</div>
	</section>
</template>

<script>
export default {
	data() {
		return {
			projects: [
				{
					title: 'Initiative',
					date: 'October 2019',
					description: 'A modern tabletop RPG companion application, built with love and some pals, aka the <a href="https://crit.fail/" target="_blank" ref="noopener noreferrer" class="link rosegold">Crit Fail Team</a>',
					tools: ['React', 'Axios', 'Firebase', 'JavaScript', 'HTML', 'SCSS'],
					link: 'https://github.com/xdesro/initiative-react'
				},
				{
					title: 'The Gift of Giving',
					date: 'March 2019',
					description: 'The culmination captstone project of my coding education. An application to keep track of gift wish lists, for all occasions and shared between family and friends. The application provided a solution for those who have guests/gift givers who don\'t know each other, and don\'t want to duplicate gifts.',
					tools: ['React', 'GCP', 'Node', 'Express', 'JavaScript', 'HTML', 'SCSS'],
					link: 'https://the-gift-of-giving.firebaseapp.com/'
				},
				{
					title: 'Food Truck Slack Bot',
					date: 'April 2019',
					description: 'A custom office wide Slack bot with custom AI to inform the company each day before lunch time which food trucks were going to be in the area.',
					tools: ['JavaScript', 'Node', 'Express', 'Slack', 'Next JS', 'cron-job', 'Twitter API', 'Google Calendar API'],
					link: 'https://github.com/bryn-newell/food-truck-bot'
				},
				{
					title: 'Skill Base',
					date: 'May 2019',
					description: 'An internal tool to help the company as a whole, and particularly the sales department, keep track of the different kinds of technological, professional, and soft skills of each employee. I designed and created mock ups for this project, as well as developed front and back end sections of the application from project inception to beta release.',
					tools: ['React', 'AWS', 'SQL', 'Invision Studio', 'D3', 'Node', 'Express', 'JavaScript', 'HTML', 'SCSS']
				},
				{
					title: 'Techtonic Website',
					date: 'June 2019',
					description: 'The Techtonic website was getting an overhaul and I was tasked to re-create as many of the existing pages as possible, using an entirely new UI library and adjusting all the styles for a design uplift, while the main team updated our CMS. As I worked on this project I also began to build an internal component library, with specific style guidelines applied to be used company-wide on all future projects.',
					tools: ['React', 'Docker', 'Gatsby', 'Butter', 'AntD', 'SCSS'],
					link: 'https://www.techtonic.com/'
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
		padding: 0 1rem;
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
			.decoration {
				position: absolute;
			}
		}
	}
	@media (max-width: $breakpoint-md) {
		.heading {
			margin-left: 0;
			text-align: center;
		}
		.project {
			.project-number {
				align-self: flex-start;
				font-size: 10rem;
				grid-row: 1 / span 2;
				margin: 0 1rem 0 1rem;
			}
			.title {
				font-size: 5rem;
			}
			.description {
				grid-column: 2;
				margin-right: 2rem;
				max-width: 300px;
			}
			.project-link {
				font-size: 1.5rem;
				grid-column: 2;
			}
		}
	}
	@media (max-width: $breakpoint-sm) {
		margin-top: 5rem;
		.heading {
			font-size: 8rem;
		}
		.project {
			grid-template-columns: 1fr 2fr 1fr;
			.project-number {
				font-size: 6rem;
				grid-column: 1;
				grid-row: 1;
				line-height: 6rem;
				margin: 0;
			}
			.title {
				font-size: 4rem;
				grid-column: 2 / span 2;
			}
			.date {
				justify-self: start;
				grid-column: 1 / span 2;
				grid-row: 2;
				padding-bottom: 0;
			}
			.description {
				grid-column: 1 / span 2;
				margin-right: 10px;
				max-width: 100%;
			}
			.tools {
				grid-column: 3;
				grid-row: 3 / span 2;
			}
			.project-link {
				grid-column: 1 / span 2;
			}
		}
	}
}
</style>
