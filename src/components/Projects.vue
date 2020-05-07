<template>
<div class="projects">
		<h2 class="heading outline-font">projects</h2>
    <div class="project">
      <h3 class="outline-font black project-number">01</h3>
      <div class="content">
        <div class="project-heading">
          <h3 class="title">Initiative<span class="decoration" aria-hidden="true">—</span></h3>
          <p  class="date">October 2019</p>
        </div>
        <div class="body">
          <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <ul class="tools">
            <li>React</li>
            <li>Axios</li>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </div>
        <a href="#">see the work<span class="decoration" aria-hidden="true">—</span></a>
      </div>
    </div>
</div>
</template>

<script>

</script>

<style lang="scss">
.projects {
  .heading {
    font-size: 10rem;
  }
  .project {
    display: flex;
    justify-content: space-around;
    .project-number {
      font-size: 9rem;
    }
    .content {
      text-align: left;
      .project-heading {
        display: flex;
        align-items: center;
        .title {
          font-size: 6rem;
          font-family: 'Le Murmure';
          margin: 2rem 0;
        }
        .date {
          margin: 0;
        }
      }
      .body {
        display: flex;
        justify-content: space-between;
        .description {
          max-width: 400px;
        }
        .tools {
          list-style: none;
          padding: 0;
        }
      }
    }
  }
}
</style>
