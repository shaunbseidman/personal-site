<template>
<div id="projects">
  <img class='backgroundImg' src="../assets/dog.jpeg" alt="">
  <div class="animated fadeIn" id="projectShit">
  <div class="shoeGif">
    <h3>What's it Worth</h3>
    <hr>
    <img src="../assets/gif2.gif" alt="">
    <div class="tech">
      <h5>Technologies Used</h5>
      <img src="../assets/logo.png" alt="">
      <img src="../assets/css.png" alt="">
      <img src="../assets/post.png" alt="">
      <img src="../assets/js.png" alt="">
      <img src="../assets/node.png" alt="">
      <img src="../assets/boot.png" alt="">
      <hr>
      <p>A fun and simple web app that tracks the retail and resell prices for sneakers. Using the chart.js library, it creates an easy to read comparison chart which shows whether the price has gone up or down from the suggested retail price. </p>
      <a href="https://github.com/shaunbseidman/galvanizetower"><img src="../assets/git2.png" alt=""></a>
    </div>
  </div>
    <div class="newGif">
      <h3>fart</h3>
      <hr>
      <img src="../assets/gif2.gif" alt="">
      <div class="tech">
        <h5>Technologies Used</h5>
        <img src="../assets/logo.png" alt="">
        <img src="../assets/css.png" alt="">
        <img src="../assets/post.png" alt="">
        <img src="../assets/js.png" alt="">
        <img src="../assets/node.png" alt="">
        <img src="../assets/boot.png" alt="">
        <hr>
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
  /* width:100%;
  height:66.67vh; */
}
.shoeGif{
  /* padding: 30px; */
  margin: 2em;
  border-radius: 20px;
  background: rgba(191, 191, 191, 0.43);
  filter: alpha(opacity=60);
  float: left;
  text-align: center;
  padding: 30px;
}
.newGif{
  /* padding: 30px; */
  margin: 2em;
  border-radius: 20px;
  background: rgba(191, 191, 191, 0.43);
  filter: alpha(opacity=60);
  text-align: center;
  padding: 30px;
}

/* @media screen and (max-width: 400px) {
   #projectShit {

    float: none;
    margin-right:0;
    width:auto;
    border:0;
    border-bottom:2px solid #000;
  }
} */
#projectShit{
  max-width:100%;
  height:auto;
  position: relative;
  margin-top: 5em;
  display: flex;
  text-align: center;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}

a:hover{
  opacity: 0.8;
  filter: alpha(opacity=50);
}
.tech {
  padding: 15px;
  font-family: 'Julius Sans One', sans-serif;

}
</style>
