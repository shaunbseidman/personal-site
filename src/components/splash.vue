<template>
<div class="animated fadeIn" id="splash">
    <div id="particleJS-container">
   </div>
  <img class = 'fart' src="../assets/pic.jpeg" alt="">
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
  data(){
    return{
    }
  },
  mounted () {
  	this.$nextTick(() => {
    	this.initParticleJS()
    })

  },
  methods: {
  initParticleJS () {
    particlesJS('particleJS-container', {
             "particles": {
               "number": {
                 "value": 320,
                 "density": {
                   "enable": true,
                   "value_area": 4813.800613956863
                 }
               },
               "color": {
                 "value": "#f0f7f2"
               },
               "shape": {
                 "type": "circle",
                 "stroke": {
                   "width": 2,
                   "color": "#000000"
                 },
                 "polygon": {
                   "nb_sides": 6
                 },
                 "image": {
                   "src": "img/github.svg",
                   "width": 100,
                   "height": 100
                 }
               },
               "opacity": {
                 "value": 0.3,
                 "random": false,
                 "anim": {
                   "enable": false,
                   "speed": 1,
                   "opacity_min": 0.1,
                   "sync": false
                 }
               },
               "size": {
                 "value": 100.21325380409519,
                 "random": true,
                 "anim": {
                   "enable": true,
                   "speed": 46.288401101176675,
                   "size_min": 52.785018799587434,
                   "sync": false
                 }
               },
               "line_linked": {
                 "enable": true,
                 "distance": 150,
                 "color": "#ffffff",
                 "opacity": 0.4,
                 "width": 1
               },
               "move": {
                 "enable": true,
                 "speed": 6,
                 "direction": "none",
                 "random": false,
                 "straight": false,
                 "out_mode": "out",
                 "bounce": false,
                 "attract": {
                   "enable": false,
                   "rotateX": 600,
                   "rotateY": 1200
                 }
               }
                 },
                 "interactivity": {
               "detect_on": "canvas",
               "events": {
                 "onhover": {
                   "enable": true,
                   "mode": "repulse"
                 },
                 "onclick": {
                   "enable": true,
                   "mode": "push"
                 },
                 "resize": true
               },
               "modes": {
                 "grab": {
                   "distance": 400,
                   "line_linked": {
                     "opacity": 1
                   }
                 },
                 "bubble": {
                   "distance": 400,
                   "size": 40,
                   "duration": 2,
                   "opacity": 8,
                   "speed": 3
                 },
                 "repulse": {
                   "distance": 200,
                   "duration": 0.4
                 },
                 "push": {
                   "particles_nb": 4
                 },
                 "remove": {
                   "particles_nb": 2
                 }
               }
             },
             "retina_detect": true
           });
  }
}
}
</script>
<style scoped >
@import url('https://fonts.googleapis.com/css?family=Julius+Sans+One');
#splash{
  height: 100vh;
}
.fart{
  display: none;
}
#particleJS-container{
  max-width: 100%;
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
  opacity: 0.9;
  filter: alpha(opacity=70);
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
  .fart{
    display: none;
  }

  body {
    height: 90vh;
    width: 100%;
    overflow-y: hidden;
  }
  #particleJS-container{
    max-width: 100%;
    max-height: 100%;
  }

  .hero-text{
    height: 350px;
    opacity: 0.9;
    width: 350px;

  }
  .textBox{
  }
}
@media only screen and (max-width: 1400px) {
  #particleJS-container{
    max-width: 100%;
    height: 100%;
  }
  .fart{
    display: none;
  }
  .hero-text{
    height: 390px;
    opacity: 0.9;
    width: 390px;

  }
}

</style>
