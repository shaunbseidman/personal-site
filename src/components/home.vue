<template>
<div id="app">
  <header>
    <div class="table">
      <ul id='linkList'>
        <router-link :to="{name: 'who'}">
          <li id='linkListItem'>Who</li>
        </router-link>
        <router-link :to="{name: 'projects'}">
          <li id='linkListItem'>Projects</li>
        </router-link>
        <a href="localhost:8080"><img  src="./assets/SSLogo 2.png" alt=""></a>
      </ul>
      <a href="http://www.github.com/shaunbseidman"><img id='img2' src="../assets/git2.png" alt="git"></a>
      <a href="https://www.linkedin.com/in/shaun-seidman/"><img id='img2' src="../assets/linked.png" alt=""></a>
      <a href="http://www.twitter.com/wangchung2nite_"><img id='img2' src="../assets/twitter.png" alt=""></a>
      <img v-on:click="toggleContact" src="../assets/mail.png" alt="">
    </div>
  </header>
  <info></info>

  <section v-show="contactOpen">
    <contact></contact>
  </section>
  <section v-show="isOpen">
    <who></who>
  </section>
  <!-- <footerStuff></footerStuff> -->
  <router-view/>
</div>
</template>

<script>
import who from '@/components/who'
import projects from '@/components/projects'
export default {
  name: 'App',
  components: {
    who,
    projects
  },
  data() {
    return {
      isOpen: false,
      contactOpen: false,
      projectOpen: false
    }
  },
  methods: {
    toggleWho() {
      this.isOpen = !this.isOpen
    },
    toggleContact() {
      this.contactOpen = !this.contactOpen
    },
    toggleProjects() {
      this.projectOpen = !this.projectOpen
    }
  }
}
</script>

<style scoped>
body {
  height: 100%;
}

.table {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333333;
}

img {
  float: right;
  text-align: center;
  margin-left: 11px;
  display: block;
}

#linkImg {
  float: right;
  text-align: center;
  padding: 16px;
  display: block;
  color: white;
  text-decoration: none
}

#linkListItem {
  float: left;
  text-align: center;
  padding: 20px;
  display: block;
  color: white;
  text-decoration: none;
}

#linkListItem:hover {
  color: red;
  cursor: pointer;

}

img:hover {
  color: yellow;
  cursor: pointer;
}
</style>
