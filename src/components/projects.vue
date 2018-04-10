<template>
<div id="projects">
  <img class='backgroundImg' src="../assets/pic.jpeg" alt="">
  <div class="animated fadeIn" id="projectShit">
  <div class="shoeGif">
    <h3>What's it Worth</h3>
    <img class='gif' src="../assets/gif2.gif" alt="">
    <div class="tech">
      <h5>Technologies Used</h5>
      <img src="../assets/logo.png" alt="">
      <img src="../assets/cypress.png" alt="">
      <img src="../assets/js.png" alt="">
      <img src="../assets/css.png" alt="">
      <img src="../assets/post.png" alt="">
      <img src="../assets/node.png" alt="">
      <img src="../assets/boot.png" alt="">
      <p>A fun and simple web app that tracks the retail and resell prices for sneakers. Using the chart.js library, it creates an easy to read comparison chart which shows whether the price has gone up or down from the suggested retail price. </p>
      <a class='gitLink' href="https://github.com/shaunbseidman/galvanizetower"><img src="../assets/git2.png" alt=""></a>
    </div>
  </div>
    <div class="newGif">
      <h3>Fridgely</h3>
      <img class='gif2' src="../assets/fridge.gif" alt="">
      <div class="tech">
        <h5>Technologies Used</h5>
        <img src="../assets/react.png" alt="">
        <img src="../assets/swift.png" alt="">
        <img src="../assets/js.png" alt="">
        <img src="../assets/css.png" alt="">
        <img src="../assets/post.png" alt="">
        <img src="../assets/node.png" alt="">
        <img src="../assets/jest.png" alt="">
        <img src="../assets/aws.png" alt="">
        <p>A collaborative group project implementing React Native, Clarafi image recognition and Amazon Web Services S3 image hosting. My role in this project was to create the back-end Express server, create the Knex database as well as help post the images taken from the iPhone’s native camera to an S3 bucket. Fridgely was created with the intent to scan an item in your fridge, take a photo and send it off to the image recognition API and then return a list of recipes based on the food item that was scanned.</p>
        <a class='gitLink' href="https://github.com/DavidNAspesi/fridgely-server"><img src="../assets/git2.png" alt=""></a>
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
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300');

body,
html {
  height: 100%;
  width: 100%;
  font-family: 'Open Sans', sans-serif;

}
h3{
  font-family: 'Open Sans', sans-serif;
}
.gif2{
  height: 300px;
  width: 480px
}

@media only screen and (max-width: 600px) {
    .gif {
      width: 290px;
      height:170px;
    }
    .gif2{
      width: 290px;
      height:170px;

    }
}


.backgroundImg {
  opacity: 0.2;
  height: 100%;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: absolute;
}
#projects {
  /* height: 100%;
  width: 100%;
  position: relative; */
}
.shoeGif{
  padding-top: 10px;
  /* background: rgba(191, 191, 191, 0.43);
  border-radius: 24px;
  padding: 20px;
  text-align: center;
  float: left;
  margin: 0 auto;
  color: white;
  display:inline-block;
  position: absolute; */

  /* background-color: red; */
  text-align: center;
  border-radius: 24px;
  margin: 10px;

  /* padding: 20px; */

  color: white;

  /* height: 70%;
  width:40%;
  float:left; */
  background: rgba(191, 191, 191, 0.43);

  /* margin:0 auto;
  padding: 20px;
  border-radius: 24px;
  background: rgba(191, 191, 191, 0.43);
  text-align: center;
  position: absolute; */
  /* top: 20%; */
  /* left: 20%; */
  /* transform: translate(-20%, -20%); */

  /* float: left; */
  /* display:inline-block; */
  /* float: left; */
  /* background-color: red; */
  /* padding: 30px; */
  /* margin: 2em; */
  /* text-align: center; */
  /* padding: 30px; */
  /* margin: 2em;
  border-radius: 20px;
  background: rgba(191, 191, 191, 0.43);
  filter: alpha(opacity=60);
  float: left;
  text-align: center;
  padding: 30px; */
}
.newGif{
  padding-top: 10px;
  /* display:inline-block;
  background: rgba(191, 191, 191, 0.43);
  border-radius: 24px;
  padding: 20px;
  text-align: center;
  margin: 0 auto;
  color: white;
  float: left; */
  border-color: rgba(191, 191, 191, 0.43);
  text-align: center;
  border-radius: 24px;
  margin: 10px;
  /* padding: 20px; */

  color: white;

  /* height: 50%; */
  /* display:block; */
  /* width:40%; */

  background: rgba(191, 191, 191, 0.43);

  /* float:right; */



  /* display:flex; */
  /* position: relative; */

  /* padding: 30px; */
  /* margin: 2em;
  border-radius: 20px;
  background: rgba(191, 191, 191, 0.43);
  filter: alpha(opacity=60);
  text-align: center;
  padding: 30px; */
}

#projectShit > div {
  flex: 1;          /* Distribute space equally among the flex items */
  min-width: 290px; /* But force them to be at least300px wide */
  /* border: 1px solid; */
}

#projectShit{
  padding: 50px;
  width: 100%;
  height: 100%;
  display: flex;    /* Magic begins */
  flex-wrap: wrap;  /* Allow multiple lines */
  /* overflow: hidden; */
  /* margin:0 auto;
  padding: 20px;
  border-radius: 24px;
  background: rgba(191, 191, 191, 0.43);
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white; */
  /* max-width:100%;
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
  color: white; */
}
.gitLink{
  text-align: center;
}
.gitLink:hover{
  opacity: 0.8;
  filter: alpha(opacity=50);
}
.tech {
  padding: 15px;
  font-family: 'Open Sans', sans-serif;
}
</style>
