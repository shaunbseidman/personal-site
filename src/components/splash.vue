<template>
<div class="animated fadeIn" id="splash">
  <img src="../assets/dog.jpeg" alt="">
  <div class="hero-text">
    <h1>Shaun Seidman</h1>
    <h6>Full Stack Developer</h6>
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
@import url('https://fonts.googleapis.com/css?family=Julius+Sans+One');
html {
  height: 100%;
  width: 100%;
}

img {
  opacity: 0.5;
  height: 100%;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
}

.hero-text {
  font-family: 'Julius Sans One', sans-serif;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}
</style>
