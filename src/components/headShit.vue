<template>
  <div id="headShit">
          <div class="table">
            <div class="pageLinks">
            <router-link :to="{name: 'splash'}">
            <img id='logo' src="../assets/SSLogo 2.png" alt="">
          </router-link>
          <ul id='linkList'>
            <router-link :to="{name: 'who'}">
              <li class="animated fadeIn" id='linkListItem'>About Shaun</li>
            </router-link>
            <router-link :to="{name: 'projects'}">
              <li id='linkListItem'>Projects</li>
            </router-link>
          </ul>
        </div>
      </div>

      <div class="linkImg">
          <a href="https://www.instagram.com/youth.and.lust"><img class = 'linkImages' id='img2' src="../assets/ig.png" alt=""></a>
          <a href="https://www.twitter.com/wangchung2nite_"><img class = 'linkImages' id='img2' src="../assets/twitter.png" alt=""></a>
          <a href="https://www.linkedin.com/in/shaun-seidman/"><img class = 'linkImages' id='img2' src="../assets/linked.png" alt=""></a>
          <a href="https://www.github.com/shaunbseidman"><img class = 'linkImages' id='img2' src="../assets/git2.png" alt="git"></a>
          <router-link :to="{name: 'contact'}">
          <img class='linkImages' src="../assets/mail.png" alt="">
          </router-link>
        </div>
  </div>
</template>
<script>
export default {
  name: "headShit",
  data: () => ({

  })
}
</script>
<style scoped>
#logo {
  float: left;
}

.headShit{
  z-index: 1;
}
#linkList{
  float: left;
  text-align: center;
  padding: 20px;
  color: #9e9898;
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

.table{
  position: absolute;
  color: white;
}
.linkImg {
  float: right;
  text-align: center;
  padding: 20px;
  display: block;
  color: white;
  text-decoration: none
}
img:hover {
  animation: shake 0.5s;
  animation-iteration-count: 1s;
  cursor: pointer;
}
</style>
