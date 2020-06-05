<template>
<div class="resume">
	<h2 class="heading outline-font">resume/cv</h2>
	<a :href="Resume" target="_blank" class="download-button" download>DOWNLOAD THE PDF</a>
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
.resume {
	display: flex;
	align-items: baseline;

	.heading {
		margin-left: 10%;
		margin-top: 3rem;
	}

	.download-button {
		border: 1px solid black;
		color: black;
		font-size: 1.25rem;
		font-weight: 500;
		height: fit-content;
		padding: 5px 10px;
		text-decoration: none;
		margin-left: 20%;
	}
}
</style>
