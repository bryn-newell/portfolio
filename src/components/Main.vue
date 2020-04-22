<template>
  <div class="main" :style="{backgroundImage: `url(${bg})`}">
    <h1 class="header">bryn newell</h1>
    <p>description</p>
    <div class="social-links">
      <a href="https://github.com/bryn-newell" target="_blank">
        <img :src="github" alt="Github" class="logo">
      </a>
      <a href="https://twitter.com/bryn_newell" target="_blank">
        <twitter class="logo" />
      </a>
      <a href="https://medium.com/@bryn.newell" target="_blank">
        <medium class="logo" />
      </a>
      <a href="https://www.linkedin.com/in/bryn-newell/" target="_blank">
        <linkedin class="logo" />
      </a>
    </div>
    <ul class="section-list">
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
import linkedin from '@/components/linkedin.vue';

export default {
  name: 'Main',
  components: {
    medium,
    twitter,
    linkedin,
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
    align-items: flex-end;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
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

    .section-list {
      font-size: 3rem;
      list-style-type: none;
    }
  }
</style>
