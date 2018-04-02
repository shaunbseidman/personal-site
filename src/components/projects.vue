<template>
<div id="projects">
  <img class='backgroundImg' src="../assets/dog.jpeg" alt="">
  <div class="animated fadeIn" id="projectShit">
  <div class="shoeGif">
    <h3>What's it Worth</h3>
    <img src="../assets/gif2.gif" alt="">
    <div class="tech">
      <h5>Technologies Used</h5>
      <img src="../assets/logo.png" alt="">
      <img src="../assets/css.png" alt="">
      <img src="../assets/post.png" alt="">
      <img src="../assets/js.png" alt="">
      <img src="../assets/node.png" alt="">
      <img src="../assets/boot.png" alt="">
      <p>A fun and simple web app that tracks the retail and resell prices for sneakers. Using the chart.js library, it creates an easy to read comparison chart which shows whether the price has gone up or down from the suggested retail price. </p>
      <a href="https://github.com/shaunbseidman/galvanizetower"><img src="../assets/git2.png" alt=""></a>
    </div>
  </div>
  <div class="newGif">
    <h3>fart</h3>
    <img src="../assets/gif2.gif" alt="">
    <div class="tech">
      <p>Technologies Used</p>
      <img src="../assets/logo.png" alt="">
      <img src="../assets/css.png" alt="">
      <img src="../assets/post.png" alt="">
      <img src="../assets/js.png" alt="">
      <img src="../assets/node.png" alt="">
      <img src="../assets/boot.png" alt="">
      <p>A fun and simple web app that tracks the retail and resell prices for sneakers. Using the chart.js library, it creates an easy to read comparison chart which shows whether the price has gone up or down from the suggested retail price. </p>
      <a href="https://github.com/shaunbseidman/galvanizetower"><img src="../assets/git2.png" alt=""></a>
    </div>
  </div>

  </div>


</div>
</template>
<script>
export default {
  name: "projects",
  data() {
    return {
      projectOpen: false
    }
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Julius+Sans+One');

body,
html {
  height: 100%;
  width: 100%;
}
h3{
  font-family: 'Julius Sans One', sans-serif;

}

.backgroundImg {
  opacity: 0.3;
  height: 100%;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: relative;
}
#projects {
}
.shoeGif{
  float: left;
  text-align: center;
  padding: 10px;
}
.newGif{
  float: flex;
  text-align: center;
  padding: 10px;
}
#projectShit{
  display: flex;
  text-align: center;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}

.tech {
  padding: 15px;
  font-family: 'Julius Sans One', sans-serif;

}
</style>
