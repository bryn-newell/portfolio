<template>
	<nav class="social-links">
		<a href="https://github.com/bryn-newell" target="_blank" ref="noopener noreferrer">
			<span class="sr-only">Visit my Github</span>
			<github class="logo" />
		</a>
		<a href="https://twitter.com/bryn_newell" target="_blank" ref="noopener noreferrer">
			<span class="sr-only">Visit my Twitter</span>
			<twitter class="logo" />
		</a>
		<a href="https://medium.com/@bryn.newell" target="_blank" ref="noopener noreferrer">
			<span class="sr-only"> Visit my Medium</span>
			<medium class="logo" />
		</a>
		<a href="https://www.linkedin.com/in/bryn-newell/" target="_blank" ref="noopener noreferrer">
			<span class="sr-only"> visit my Linked In</span>
			<linkedin class="logo" />
		</a>
	</nav>
</template>

<script>
import github from '@/assets/github.vue';
import medium from '@/assets/medium.vue';
import twitter from '@/assets/twitter.vue';
import linkedin from '@/assets/linkedin.vue';

export default {
	components: {
		github,
		medium,
		twitter,
		linkedin
	},
};
</script>

<style lang="scss">
.social-links {
  a {
    margin: 0 .75rem;
  }
  :first-child {
    margin-left: 0;
  }
  .logo {
    height: 2rem;
    fill: white;
  }
	@media (max-width: $breakpoint-sm) {
		text-align: left;
		width: 100%;
	}
}
</style>
