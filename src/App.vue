<template>
  <div id="app">
    <Main />
    <About />
    <Blog />
    <Projects />
    <Resume />
    <Footer />
  </div>
</template>

<script>
import Main from '@/components/Main.vue';
import About from '@/components/About.vue';
import Blog from '@/components/Blog.vue';
import Projects from '@/components/Projects.vue';
import Resume from '@/components/Resume.vue';
import Footer from '@/components/Footer.vue';


export default {
	name: 'App',
	components: {
		Main,
		About,
		Blog,
		Projects,
		Resume,
		Footer,
	},
};
</script>

<style src="@/styles/main.scss" lang="scss">
  *, *:before, *:after {
    box-sizing: border-box
  }

  body {
    margin: 0;
  }

  h1, h2, h3, h4 {
    font-weight: normal;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
</style>
