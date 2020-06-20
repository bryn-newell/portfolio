<template>
<div id="resume">
	<h2 class="heading outline-font">resume<br class="sm-only"/>/cv</h2>
	<a :href="Resume" target="_blank" class="download-button link" download>DOWNLOAD THE PDF</a>
</div>
</template>

<script>
import Resume from '../assets/BrynNewellResume.pdf';

export default {
	data() {
		return {
			Resume
		};
	}
};

</script>

<style lang="scss">
#resume {
	align-items: baseline;
	justify-content: space-between;
	display: flex;
	margin: 0 10% 10rem 10%;

	.heading {
		margin-top: 3rem;
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
		padding: 15px 26px;
	}

	@media (max-width: $breakpoint-md) {
		flex-direction: column;
		align-items: center;
	}
	@media (max-width: $breakpoint-sm) {
		.heading {
			font-size: 8rem;
			word-wrap: break-word;
			.sm-only {
				display: inline
			}
		}
	}
}
</style>
