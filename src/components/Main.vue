<template>
  <div class="main" :style="{backgroundImage: `url(${bg})`}">
    <h1 class="header">bryn newell -</h1>
    <p>description</p>
    <div class="social-links">
      <a href="https://github.com/bryn-newell" target="_blank">
        <img :src="github" alt="Github" class="logo">
      </a>
      <a href="">
        <twitter class="logo" />
      </a>
      <a href="">
        <medium class="logo" />
      </a>
    </div>
    <ul>
      <li>Blog</li>
      <li>Projects</li>
      <li>Resume/CV</li>
    </ul>
  </div>
</template>

<script>
import bg from '@/assets/mainBG.jpg';
import github from '@/assets/github.png';
import medium from '@/components/medium.vue';
import twitter from '@/components/twitter.vue';

export default {
  name: 'Main',
  components: {
    medium,
    twitter,
  },
  data() {
    return {
      bg,
      github,
    };
  },
};
</script>

<style lang="scss">
  .main {
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
    width: 100vw;

    h1, ul {
      font-family: 'le murmure';
    }

    .header {
      font-size: 6rem;
      margin: 0;
    }

    .logo {
      height: 30px;
    }
  }
</style>
