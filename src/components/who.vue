<template>
<div class="fart">
  <img class='backgroundImg' src="../assets/pic.jpeg" alt="">
  <div id="who">
    <div class="animated fadeIn" id="aboutMe">
      <p>Thanks for taking a look. I am a full stack developer with a passion for creating, problem solving and continuing to learn and grow. My previous experience in managing a small business and team building have helped to solidify my work techniques
        with others and also instill a never-quit attitude. <br><br>I would love to establish myself in the web development world and believe my skills, as well as my willingness to learn, would make me a great candidate for a junior dev position. <br><br>Please
        feel free to take a look at my resume below.<br> I look forward to talking and hopefully working together.
      </p><br>
      <a href="https://github.com/shaunbseidman/resume/blob/master/res.pdf"><img class = 'linkImages' id='img2' src="../assets/res.png" alt="git"></a>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: "who",
  data() {
    return {}
  },
  methods: {}
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300');

body {
  height: 100%;
  width: 100%;
}

html {
  height: 100%;
  width: 100%;
}

p {
  font-family: 'Open Sans', sans-serif;
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

#aboutMe {
  margin: 0 auto;
  padding: 20px;
  border-radius: 24px;
  background: rgba(191, 191, 191, 0.43);
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}
@media only screen and (max-width: 700px) {
  .backgroundImg {
    display: none;
  }
  #aboutMe {
    margin-top: 50px;
    background: rgba(44, 50, 56, 0.8);
    opacity: 7;
    width: 300px;
    text-align: center;
    align-items: center;
  }

}

@media only screen and (max-width: 1400px) {
  .backgroundImg {
    display: none;
  }
  #aboutMe {
    margin-top: 50px;
    background: rgba(44, 50, 56, 0.8);
    opacity: 7;
    width: 300px;
    text-align: center;
    align-items: center;
  }

}
</style>
