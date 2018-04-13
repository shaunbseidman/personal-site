<template>
<div id="projects">
  <img class='backgroundImg' src="../assets/pic.jpeg" alt="">

  <div class="animated fadeIn" id="projectShit">
    <div class="shoeGif">

      <h3>What's it Worth</h3>
      <img class='gif' src="../assets/gif2.gif" alt="">
      <div class="tech">
        <h5>Technologies Used</h5>
        <img class = 'techPic' src="../assets/logo.png" alt="">
        <img class = 'techPic' src="../assets/cypress.png" alt="">
        <img class = 'techPic' src="../assets/js.png" alt="">
        <img class = 'techPic' src="../assets/css.png" alt="">
        <img class = 'techPic' src="../assets/post.png" alt="">
        <img class = 'techPic' src="../assets/node.png" alt="">
        <img class = 'techPic' src="../assets/boot.png" alt="">
        <p>A fun and simple web app that tracks the retail and resell prices for sneakers. Using the chart.js library, it creates an easy to read comparison chart which shows whether the price has gone up or down from the suggested retail price. </p>
        <a class='gitLink' href="http://cute-middle.surge.sh/#/"><img class = 'bottomPic' src="../assets/link.png" alt=""></a>
        <a class='gitLink' href="https://github.com/shaunbseidman/galvanizetower"><img class = 'bottomPic' src="../assets/git2.png" alt=""></a>
      </div>
    </div>
    <div class="poopGround">
      <img src="../assets/floor.jpeg" alt="">
    </div>
    <div class="newGif">
      <h3>Fridgely</h3>
      <img class='gif2' src="../assets/fridge.gif" alt="">
      <div class="tech">
        <h5>Technologies Used</h5>
        <img class = 'techPic' src="../assets/react.png" alt="">
        <img class = 'techPic' src="../assets/swift.png" alt="">
        <img class = 'techPic' src="../assets/js.png" alt="">
        <img class = 'techPic' src="../assets/css.png" alt="">
        <img class = 'techPic' src="../assets/post.png" alt="">
        <img class = 'techPic' src="../assets/node.png" alt="">
        <img class = 'techPic' src="../assets/jest.png" alt="">
        <img class = 'techPic' src="../assets/aws.png" alt="">
        <p>A collaborative group project implementing React Native, Clarafi image recognition and Amazon Web Services S3 image hosting. My role in this project was to create the back-end Express server, create the Knex database as well as help post the images
          taken from the iPhone’s native camera to an S3 bucket. Fridgely was created with the intent to scan an item in your fridge, take a photo and send it off to the image recognition API and then return a list of recipes based on the food item that
          was scanned.</p>
        <a class='gitLink' href="https://github.com/DavidNAspesi/fridgely-server"><img class = 'bottomPic' src="../assets/git2.png" alt=""></a>
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
.poopGround{
  display: none;
}

h3 {
  font-family: 'Open Sans', sans-serif;
}

.gif2 {
  height: 300px;
  width: 480px
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

#projects {}

.shoeGif {
  padding-top: 10px;
  text-align: center;
  border-radius: 24px;
  margin: 10px;
  color: white;
  background: rgba(191, 191, 191, 0.43);
}

.newGif {
  padding-top: 10px;
  border-color: rgba(191, 191, 191, 0.43);
  text-align: center;
  border-radius: 24px;
  margin: 10px;
  color: white;
  background: rgba(191, 191, 191, 0.43);
}

#projectShit>div {
  flex: 1;
  min-width: 290px;
}

#projectShit {
  padding: 50px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
}

.gitLink {
  text-align: center;
}

.gitLink:hover {
  opacity: 0.8;
  filter: alpha(opacity=50);
}

.tech {
  padding: 15px;
  font-family: 'Open Sans', sans-serif;
}
@media only screen and (max-width: 700px) {
  .backgroundImg {
    display: none;
  }
  .techPic{
    height: 30px;
  }
  .bottomPic{
    height: 25px;
  }
  h3{
    font-size: 23px;
  }
  h5{
    font-size: 23px;

  }
  .newGif{
    background-image: url("../assets/floor.jpeg");

  }
  #projectShit {
    margin-top: -30px;
    max-height: 100%;
    width: auto;
    margin-left: -16px;
    align-items: center;
    overflow-y: auto;
    overflow: scroll;
    max-height:20vh;
    position: relative;
    /* background-image: url("../assets/floor.jpeg"); */
  }
  .shoeGif {
    display: inline-block;
    background: rgba(44, 50, 56, 0.8);
    width: 300px;
    text-align: center;
    display: inline-block;
    align-items: center;
  }
  .gif2 {
    width: 290px;
    height: auto;
    text-align: center;
    align-items: center;
    /* background-image: url("../assets/floor.jpeg"); */

  }
  .gif {
    width: 290px;
    height: auto;
    text-align: center;
    align-items: center;
  }
  .newGif {
    display: inline-block;
    background: rgba(44, 50, 56, 0.8);

  }
  #projects {
    align-items: center;
    position: relative;
  }
}
@media only screen and (max-width: 1400px) {
  .backgroundImg {
    display: none;
  }
  .techPic{
    height: 30px;
  }
  .bottomPic{
    height: 25px;
  }
  h3{
    font-size: 23px;
  }
  h5{
    font-size: 23px;

  }
  .newGif{
    background-image: url("../assets/floor.jpeg");

  }
  #projectShit {
    margin-top: -30px;
    max-height: 100%;
    width: auto;
    margin-left: -16px;
    align-items: center;
    overflow-y: auto;
    overflow: scroll;
    max-height:90vh;
    position: relative;
    /* background-image: url("../assets/floor.jpeg"); */
  }
  .shoeGif {
    display: inline-block;
    background: rgba(44, 50, 56, 0.8);
    width: 300px;
    text-align: center;
    display: inline-block;
    align-items: center;
  }
  .gif2 {
    width: 290px;
    height: auto;
    text-align: center;
    align-items: center;
    /* background-image: url("../assets/floor.jpeg"); */

  }
  .gif {
    width: 290px;
    height: auto;
    text-align: center;
    align-items: center;
  }
  .newGif {
    display: inline-block;
    background: rgba(44, 50, 56, 0.8);

  }
  #projects {
    align-items: center;
    position: relative;
  }



}
</style>
