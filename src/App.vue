<template>
<div id="app" class="animated fadeIn">
  <!-- <header class="animated fadeIn">
  </header> -->

<section>
      <div class="table">
      <router-link :to="{name: 'splash'}">
        <img id='logo' src="./assets/SSLogo 2.png" alt="">
      </router-link>
      <ul id='linkList'>
        <router-link :to="{name: 'who'}">
          <li class="animated fadeIn" id='linkListItem'>About Shaun</li>
        </router-link>
        <router-link :to="{name: 'projects'}">
          <li id='linkListItem'>Projects</li>
        </router-link>
      </ul>
      <a href="http://www.instagram.com/youth.and.lust"><img class = 'linkImages' id='img2' src="./assets/ig.png" alt=""></a>
      <a href="http://www.twitter.com/wangchung2nite_"><img class = 'linkImages' id='img2' src="./assets/twitter.png" alt=""></a>
      <a href="https://www.linkedin.com/in/shaun-seidman/"><img class = 'linkImages' id='img2' src="./assets/linked.png" alt=""></a>
      <a href="http://www.github.com/shaunbseidman"><img class = 'linkImages' id='img2' src="./assets/git2.png" alt="git"></a>
      <router-link :to="{name: 'contact'}">
        <img class='linkImages' src="./assets/mail.png" alt="">
      </router-link>
    </div>
</section>
  <info></info>
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

    }
  },
  methods: {}
}
</script>

<style scoped>
header{
position: absolute;

}

@import url('https://fonts.googleapis.com/css?family=Lato');
#app {
   font-family: 'Lato', sans-serif;
   height: 100%;
   width: 100%;
}

body{
  height: 100%;
  width: 100%;
  position: absolute;
}
section{
  
  /* list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden; */
}

.table {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.linkImages {
  float: right;
  text-align: center;
  margin-left: 11px;
  display: block;
}

#logo {
  float: left;
}

#menu {
  float: left;
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
  color: #9e9898;
  text-decoration: none;
}

#linkListItem:hover {
  cursor: pointer;
}

li:hover {
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
  background-color: #575757;
}

img:hover {
  animation: shake 0.5s;
  animation-iteration-count: 1s;
  cursor: pointer;
}

.backgroundImg {
  opacity: 0.3;
  height: 100%;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
}

@keyframes shake {
  0% {
    transform: translate(1px, 1px) rotate(0deg);
  }
  10% {
    transform: translate(-1px, -2px) rotate(-1deg);
  }
  20% {
    transform: translate(-2px, 0px) rotate(1deg);
  }
  30% {
    transform: translate(1px, 2px) rotate(0deg);
  }
  40% {
    transform: translate(1px, -1px) rotate(1deg);
  }

}
</style>
