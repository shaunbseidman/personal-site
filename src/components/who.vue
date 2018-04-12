<template>
  <div class="fart">
    <img class='backgroundImg' src="../assets/pic.jpeg" alt="">
<div id="who">
  <!-- <div class="aboutClass"> -->
    <div class="animated fadeIn" id="aboutMe">
      <p>Thanks for taking a look. I am a full stack developer with a passion for creating, problem solving and continuing to learn and grow. My previous experience in managing a small business and team building have helped to solidify my work techniques with others as well as instill a never-quit attitude. <br><br>I would love to establish myself in the web development world and believe my skills as well as willingness to learn would make me a great candidate for a junior dev position. <br><br>Please feel free to take a look at my resume below.<br>
        I look forward to talking and hopefully working together.
</p><br>
        <a href="https://github.com/shaunbseidman/resume/blob/master/res.pdf"><img class = 'linkImages' id='img2' src="../assets/res.png" alt="git"></a>
    </div>
  <!-- </div> -->
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
@media only screen and (max-width: 600px) {

  .backgroundImg {
    display: none;
  }
  .aboutClass{
width: 10000px;
}
  #aboutMe{
    width: 300px;
    /* margin: 200px; */
    /* height:auto; */
    text-align: center;
    align-items: center;
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
    /* margin-top: 10em;
    height: 100%;
    width: auto; */
  }
}
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
  width: auto;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: absolute;
}

#aboutMe {
  margin:0 auto;
  padding: 20px;
  /* padding-top: 15px;

  padding-left: 7px;
  padding-right: 7px; */
  border-radius: 24px;
  background: rgba(191, 191, 191, 0.43);
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}
</style>
