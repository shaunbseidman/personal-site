<template>

<div id="app" class="animated fadeIn">
  <header class="animated fadeIn">
    <div class="table">
      <ul id='linkList'>
        <router-link :to="{name: 'who'}">
          <li class="animated fadeIn" id='linkListItem'>About Shaun</li>
        </router-link>
        <router-link :to="{name: 'projects'}">
          <li id='linkListItem'>Projects</li>
        </router-link>
        <router-link :to="{name: 'splash'}">
          <img src="./assets/SSLogo 2.png" alt="">
        </router-link>
      </ul>
      <a href="http://www.instagram.com/youth.and.lust"><img id='img2' src="./assets/ig.png" alt=""></a>
      <a href="http://www.twitter.com/wangchung2nite_"><img id='img2' src="./assets/twitter.png" alt=""></a>
      <a href="https://www.linkedin.com/in/shaun-seidman/"><img id='img2' src="./assets/linked.png" alt=""></a>
      <a href="http://www.github.com/shaunbseidman"><img id='img2' src="./assets/git2.png" alt="git"></a>
      <router-link :to="{name: 'contact'}">
        <img src="./assets/mail.png" alt="">

      </router-link>

    </div>
  </header>
  <info></info>
  <section v-show="contactOpen">
    <contact></contact>
  </section>
  <section v-show="isOpen">
    <who></who>
  </section>
  <footerStuff></footerStuff>
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
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400");
 #app {
   /* font-family: 'Lato', Helvetica, Arial, Thin, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   color: #9e9898; */
   font-family: 'Open Sans', sans-serif;
 }
/* @import url('https://fonts.googleapis.com/css?family=Varela+Round');

 #app {
   font-family: 'Varela Round', Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   color: #9e9898;
 } */

body {
  height: 100%;
}

.table {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  /* background: linear-gradient( #333333); */
}

img {
  float: right;
  text-align: center;
  margin-left: 11px;
  display: block;
}

#linkImg {
  font-family: 'Droid Sans', arial, serif;
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
  cursor: pointer;
}
li:hover{
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    background-color: #575757;
}

img:hover {
  animation: shake 0.5s;
  animation-iteration-count: 1s;
  cursor: pointer;
}
@keyframes shake {
    0% { transform: translate(1px, 1px) rotate(0deg); }
    10% { transform: translate(-1px, -2px) rotate(-1deg); }
    20% { transform: translate(-2px, 0px) rotate(1deg); }
    30% { transform: translate(1px, 2px) rotate(0deg); }
    40% { transform: translate(1px, -1px) rotate(1deg); }

}
</style>
