<template>
<div class="animated fadeIn" id="splash">
  <img src="../assets/pic.jpeg" alt="">
  <div class="hero-text">
    <div class="textBox">
    <h1>Shaun Seidman</h1>
    <hr>
    <h4>Full Stack Developer</h4>
  </div>
  </div>
</div>
</template>
<script>

export default {
  name: "splash",
  components:{
  },
  data: () => ({

  })
}
</script>
<style scoped >
@import url('https://fonts.googleapis.com/css?family=Julius+Sans+One');
#splash{
  height: 100vh;

}
body{
  height: 100vh;
  width: 100%;
}
html {
  height: 100vh;
  width: 100%;
}
h1,
h4{
  color: black;
}
.mobilePic{
  display: none;
}
img {
  opacity: 0.6;
  height: 100vh;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: absolute;
}
.textBox{
  margin: 10px;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.hero-text {
  width: 400px;
  height: 400px;
  -moz-border-radius: 200px;
  -webkit-border-radius: 200px;
  border-radius: 200px;
  background-color: #C9D4CB;
  opacity: 0.5;
  filter: alpha(opacity=60);
  font-weight: bold;
  font-family: 'Julius Sans One', sans-serif;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}
@media only screen and (max-width: 900px) {

  body {
    height: 90vh;
    width: 100%;
    overflow-y: hidden;
  }
  /* .mobilePic{
    display: block;
    height: 100%;
    width: 130%;
    background-size: 100% auto;

  } */
  img{
    display: none;
    /* background: ../assets/pic2.jpeg; */
    /* position: relative; */
    height: 100%;
    width: auto;
    background-repeat:no-repeat;
    /* background-size:cover; */
     background-size: 100% auto;

  }
  .hero-text{
    height: 350px;
    opacity: 0.7;
    width: 350px;

  }
  .textBox{
  }
}
@media only screen and (max-width: 1400px) {
  img{
    display: none;
    height: 100%;
    width: auto;
    background-repeat:no-repeat;
     background-size: 100% auto;
  }
  .hero-text{
    height: 390px;
    opacity: 0.7;
    width: 390px;

  }
}

</style>
