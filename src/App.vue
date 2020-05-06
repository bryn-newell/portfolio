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

<style>
@font-face {
  font-family: 'inter';
  src: url('./assets/Inter.var.woff2') format('woff2');
}

@font-face {
  font-family: 'le murmure';
  src: url('./assets/Le_Murmure.woff2') format('woff2');
}

body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
