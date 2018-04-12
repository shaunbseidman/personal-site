<template>
<div id="app" class="animated fadeIn">
  <div class="table">
    <div class="leftLinks">
    <router-link :to="{name: 'splash'}">
      <img id='logo' src="./assets/SSLogo 2.png" alt="">
    </router-link>
    <ul id='linkList'>
      <router-link :to="{name: 'who'}">
        <li id='linkListItem'>About Shaun</li>
      </router-link>
      <router-link :to="{name: 'projects'}">
        <li id='linkListItem'>Projects</li>
      </router-link>
    </ul>

    </div>
    <div class="link2shit">

      <router-link :to="{name: 'contact'}">
        <img class='linkImages' src="./assets/mail.png" alt="">
      </router-link>
      <a href="http://www.github.com/shaunbseidman"><img class = 'linkImages' id='img2' src="./assets/git2.png" alt="git"></a>
      <a href="https://www.linkedin.com/in/shaun-seidman/"><img class = 'linkImages' id='img2' src="./assets/linked.png" alt=""></a>
      <a href="http://www.instagram.com/youth.and.lust"><img class = 'linkImages' id='img2' src="./assets/ig.png" alt=""></a>
      <a href="http://www.twitter.com/wangchung2nite_"><img class = 'linkImages' id='img2' src="./assets/twitter.png" alt=""></a>
      <!-- </div> -->

    </div>
  </div>
  <router-view/>
<!-- </nav> -->
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
    return {}
  },
  methods: {}
}
</script>

<style scoped>
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;}
@import url('https://fonts.googleapis.com/css?family=Lato');

#app {
  font-family: 'Lato', sans-serif;
  width: 100%;
  height: 100vh;
  position: absolute;
}

body {
  height: 100%;
  width: 100%;
}

html {
  height: 100%;
  width: 100%;
}

.table {
  display: flex;
  justify-content: space-between;
  /* list-style-type: none;
  margin: 0;
  overflow: hidden;
  position: relative; */
  /* justify-content: space-between; */

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

#logo:hover {
  opacity: 0.8;
  filter: alpha(opacity=50);
}

.link2shit {
  display: flex;
  flex-direction:row;
  align-items: flex-end;
  padding-bottom: 12px;
  padding-right: 15px;

  /* margin-right: 10px;
  position: relative; */

}

.leftLinks{
  display: flex;
  flex-direction: row;
  align-items: flex-end;

}
.linkImages:hover {
  animation: shake 0.5s;
  animation-iteration-count: 1s;
  cursor: pointer;
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
  color: #F513AA;
}

li:hover {
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
  opacity: 0.3;
  background-color: #D9FAED;
  opacity: 0.6;
  cursor: pointer;
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
@media only screen and (max-width: 900px) {
  #app{
    background-image:url("./assets/pic2.jpeg");
    opacity: 0.6;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
  }

  .backgroundImg {
  }
  #linkListItem{
    font-size: 10.1px;
    display: inline-block;
  }
  #logo{

  }
  .linkImages{
    margin-top: 10px;
    height: 14px;
  }
  .link2shit {
    margin-bottom: 13px;
  }
  .leftLinks {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap-reverse;
  }
  .table{
    background-color:black;
    /* position: relative; */

  }
}
@media only screen and (max-width: 1400px) {
  .backgroundImg {
    display: none;
  }
    #app{
      background-image:url("./assets/pic2.jpeg");
      opacity: 0.6;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      position: absolute;
    }
    .table{
      background-color:black;
    }


}


</style>
