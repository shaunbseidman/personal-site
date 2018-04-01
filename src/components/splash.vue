<template>
<div class="animated fadeIn" id="splash">
  <img src="../assets/dog.jpeg" alt="">
  <div class="hero-text">
    <h1>Shaun Seidman</h1>
    <h3>Full Stack Developer</h3>
    <h6>Dog Lover</h6>
    <h6>Former baby</h6>
    <h6>Future mayor of the White House</h6>
  </div>
</div>
</template>
<script>
export default {
  name: "",
  data: () => ({

  })
}
</script>
<style scoped >
/* @import url('https://fonts.googleapis.com/css?family=Lato');
 #app {
   font-family: 'Lato', Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   color: #9e9898;
 } */
body,
html {
  height: 100%;
  width: 100%;
}

img {
  height: 100%;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

.hero-text {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}
</style>
