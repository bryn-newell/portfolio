<template>
	<section id="projects">
		<h2 class="heading outline-font">projects</h2>
		<div
			class="project"
			v-for="(project, index) in projects"
			:key="index"
		>
			<span class="outline-font black project-number">0{{ index + 1 }}</span>
			<h3 class="title">{{ project.title }}</h3>
			<p class="date">{{ project.date }}</p>
			<p
				class="description"
				v-html="project.description"
			></p>
			<ul class="tools">
				<li
					v-for="(tool, index) in project.tools"
					:key="index"
				>{{ tool }}</li>
			</ul>
			<a
				v-if="project.link"
				:href="project.link"
				class="project-link link"
				target="_blank"
				ref="noopener noreferrer"
			>see the work<span
					class="decoration"
					aria-hidden="true"
				>—</span></a>
		</div>
	</section>
</template>

<script>
export default {
	data() {
		return {
			projects: [
				{
					title: "My Epic App",
					date: "2021 - 2023",
					description:
						"A completely new design and rebuild of the Epic mobile application. In tandem with Vail Resort’s data and infrastructure, we introduced a new and innovative way for skiers to interact with individual ski resorts and manage their Epic pass. My primary focus was on developing the SVG map, including custom styling and animated interactions, as well the individual trails and lifts pages and data. ",
					tools: ["React Native", "Bluetooth"],
					link: "https://www.epicpass.com/app.aspx",
				},
				{
					title: "Vidanta World",
					date: "2023",
					description:
						"We built a new website for Vidanta World Resorts. While the site is not yet live (as of Fall/Winter 2024), I was a part of the core development team that initially built out all of the content models through Contentstack. These models were mapped to reusable pages and components, streamlining the site’s structure and content management. I also contributed to the initial styling of many shared components.",
					tools: ["React", "Contentstack", "Apollo", "GraphQL", "CSS"],
				},
				{
					title: "ACR",
					date: "2021 - 2022",
					description:
						"A full redesign and rebuild for the American College of Rheumatology. Leveraging Contentstack, we developed a suite of reusable page templates and content models and using GraphQL, we automated the creation of dynamic pages. This allowed ACR to easily manage their content to better support doctors and clients with any number of condition pages and resources. The project began with a development team of five and gradually streamlined until I took over as the sole developer interacting with the client.",
					tools: ["React", "Contentstack", "Apollo", "GraphQL", "CSS"],
					link: "https://rheumatology.org/",
				},
				{
					title: "Initiative",
					date: "Fall 2019",
					description:
						'A modern tabletop RPG companion application, built with love and some pals, aka the <a href="https://crit.fail/" target="_blank" ref="noopener noreferrer" class="link rosegold">Crit Fail Team</a>',
					tools: ["React", "Axios", "Firebase", "SCSS"],
					link: "https://github.com/xdesro/initiative-react",
				},
				{
					title: "Food Truck Slack Bot",
					date: "Spring 2019",
					description:
						"A custom office wide Slack bot with custom AI to inform the company each day before lunch time which food trucks were going to be in the area.",
					tools: [
						"JavaScript",
						"Node",
						"Express",
						"Slack",
						"Next JS",
						"cron-job",
						"Twitter API",
						"Google Calendar API",
					],
					link: "https://github.com/bryn-newell/food-truck-bot",
				},
			],
		};
	},
};
</script>

<style lang="scss">
#projects {
	padding-inline: 5%;
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
			font-family: "Le Murmure";
			margin: 0;
			max-width: 520px;
		}

		.date {
			align-self: center;
			justify-self: end;
			margin: 0;
			white-space: nowrap;
		}

		.description {
			max-width: 400px;
			margin: 0;
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
			color: $rose-gold;
			font-family: "le murmure";
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
