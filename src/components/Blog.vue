<template>
	<section id="blog">
		<h2 class="heading outline-font">blog</h2>
		<div class="posts">
			<a
				class="link"
				href="https://medium.com/@bryn.newell/https-medium-com-bryn-newell-from-one-non-expert-to-another-fb31add2f3c6"
				target="_blank"
				ref="noopener noreferrer"
			>
				<span class="list-number">01. </span>From One Non-Expert to Another - Learning What I Didn't Know I Didn't Know
			</a>
			<a
				class="link"
				href="https://medium.com/@bryn.newell/a-request-to-stop-saying-accessibility-is-hard-7ff0314c3280"
				target="_blank"
				ref="noopener noreferrer"
			>
				<span class="list-number">02. </span>A Request to Stop Saying Accessibility Is Hard
			</a>
		</div>
	</section>
</template>

<style lang="scss">
#blog {
	padding-inline: 5%;
	.heading {
		margin-top: 5rem;
		margin-bottom: 2rem;
	}

	.posts {
		font-size: 2.25rem;
		font-weight: 500;
		max-width: 850px;
		margin: 0 auto;
		a {
			color: black;
			&:not(:last-child) {
				&:after {
					content: "/";
					display: inline-block;
					margin-right: 0.5rem;
				}
			}
		}
		.list-number {
			color: $rose-gold;
		}
	}
	@media (max-width: $breakpoint-md) {
		.posts {
			font-size: 2rem;
		}
	}

	@media (max-width: $breakpoint-sm) {
		.heading {
			font-size: 8rem;
			margin-top: 2rem;
		}
		.posts {
			font-size: 1.5rem;
		}
	}
}
</style>
