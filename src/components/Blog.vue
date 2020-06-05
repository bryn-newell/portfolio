<template>
<div class="blog">
	<h2 class="heading outline-font">blog</h2>
	<div class="posts">
		<a href="#"><span class="list-number">01. </span>From One Non-Expert to Another - Learning What I Didn't Know I Didn't Know/ </a>
		<a href="#"><span class="list-number">02. </span>Another Blog Post with a Different Title/ </a>
		<a href="#"><span class="list-number">03. </span>A smol title/ </a>
	</div>
</div>
</template>

<script>

</script>

<style lang="scss">
.blog {
	.heading {
		margin-top: 5rem;
	}

	.posts {
		font-size: 2.25rem;
		font-weight: 500;
		max-width: 850px;
		margin: 0 auto;
		a {
			color: black;
			text-decoration: none;
			&:hover {
				text-decoration: underline;
			}
		}
		.list-number {
			color: $rose-gold;
		}
	}
}
</style>
