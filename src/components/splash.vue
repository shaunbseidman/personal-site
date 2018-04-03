<template>
<div class="animated fadeIn" id="splash">
  <img src="../assets/dog.jpeg" alt="">
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
import headShit from '@/components/headShit'

export default {
  name: "splash",
  components:{
    headShit
  },
  data: () => ({

  })
}
</script>
<style scoped >
@import url('https://fonts.googleapis.com/css?family=Julius+Sans+One');

body{
  height: 100%;
  width: 100%;
}
html {
  height: 100%;
  width: 100%;
}
h1,
h4{
  color: black;
}
img {
  opacity: 0.6;
  height: 100%;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: relative;
}
.textBox{
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
    /* margin: 30px;
    background-color: #ffffff;
    border: 1px solid black;
    opacity: 0.6;
    filter: alpha(opacity=60); /* For IE8 and earlier */

}
.hero-text {
  /* margin: 30px; */
  width: 400px;
  height: 400px;
  -moz-border-radius: 200px;
  -webkit-border-radius: 200px;
  border-radius: 200px;
  background-color: #C9D4CB
;
  opacity: 0.5;
  filter: alpha(opacity=60); /* For IE8 and earlier */

  font-weight: bold;
  font-family: 'Julius Sans One', sans-serif;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;

}
</style>
