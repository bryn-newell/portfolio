<template>
	<section id="resume">
		<h2 class="heading outline-font">resume<br class="sm-only" />/cv</h2>
		<a
			:href="Resume"
			target="_blank"
			class="download-button link"
			download
		>DOWNLOAD THE PDF</a>
	</section>
</template>

<script>
import Resume from "../assets/BrynNewellResume.pdf";

export default {
	data() {
		return {
			Resume,
		};
	},
};
</script>

<style lang="scss">
#resume {
	align-items: baseline;
	justify-content: space-between;
	display: flex;
	flex-wrap: wrap;
	margin: 12rem 5% 10rem 5%;

	.heading {
		margin-top: 0rem;
		margin-right: 4rem;
		.sm-only {
			display: none;
		}
	}

	.download-button {
		border: 1px solid black;
		color: black;
		font-size: 1.25rem;
		font-weight: 600;
		height: fit-content;
		letter-spacing: 1.5px;
		padding: 15px 26px;
		&:hover {
			text-decoration: none;
			color: white;
			background-color: black;
		}
	}

	@media (max-width: $breakpoint-md) {
		flex-direction: column;
		align-items: center;
		.heading {
			margin-right: 0;
		}
	}
	@media (max-width: $breakpoint-sm) {
		margin-top: 5rem;
		.heading {
			margin-bottom: 2rem;
			.sm-only {
				display: inline;
			}
		}
	}
}
</style>
