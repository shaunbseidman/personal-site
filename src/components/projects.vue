<template>
<div class="animated fadeIn" id="projects">
  <div class="shoeGif">
    <h3>What's it Worth</h3>
    <img src="../assets/gif2.gif" alt="">
    <div class="tech">
      <h6>Technologies Used</h6>
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
      <h6>Technologies Used</h6>
      <p>Lorem ipsum dolor sit amet, mel iriure temporibus contentiones te, congue convenire usu at. Dicat pertinax at per, decore repudiandae pro ut. Eam dicat commodo vituperatoribus eu, vix nibh tota id, probo dictas vim te. Sea ad lorem discere intellegam,
        graece erroribus an nec. Ei eam propriae reprehendunt, cu pro </p>
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
#projects {
  padding: 70px;
  margin: 10px;
  display: flex;
  text-align: center;
}

.tech {
  padding: 15px;
}
</style>
