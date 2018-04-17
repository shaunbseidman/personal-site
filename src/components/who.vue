<template>
<div class="fart">
  <img class='backgroundImg' src="../assets/pic.jpeg" alt="">
  <div id="who">
    <div class="animated fadeIn" id="aboutMe">
      <p>Thanks for taking a look. I am a full stack developer with a passion for creating, problem solving and continuing to learn and grow. My previous experience in managing a small business and team building have helped to solidify my work techniques
        with others and also instill a never-quit attitude. <br><br>I would love to establish myself in the web development world and believe my skills, as well as my willingness to learn, would make me a great candidate for a junior dev position. <br><br>Please
        feel free to take a look at my resume below.<br> I look forward to talking and hopefully working together.
      </p><br>
      <div class='res'>
        <b-button @click="showModal">
          View Resume
        </b-button>
        <b-modal id="modallg" size="lg" v-b-modal.modallg variant="primary" ref="myModalRef" hide-footer>
          <div id='modalText' class="d-block text-center">
            <a href="https://drive.google.com/file/d/1HXEnGaDENhbT4ay98wwoSGmy-IZ-aA3i/view?usp=sharing"></a>
            <img class='resume' src="../assets/resume.png" alt="">
          </div>
        </b-modal>
      </div>
      <a href="https://github.com/shaunbseidman/resume"><img class = 'resPic' src="../assets/res.png" alt=""></a>
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
  methods: {
    showModal() {
      this.$refs.myModalRef.show()
    },
    hideModal() {
      this.$refs.myModalRef.hide()
    }
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300');

body {
  height: 100vh;
  width: 100%;
}

.resume {
  height: 980px;
  width: 680px;
}

.resPic {
  display: none;
}

p {
  font-family: 'Open Sans', sans-serif;
  color: white;
  font-size: 19px;
}
.backgroundImg {
  opacity: 0.8;
  height: 100%;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: absolute;
}

/* .res {
  padding: 400px;
  text-align: center;
  position: absolute;
  top: 64%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white
} */

#aboutMe {
  margin: 0 auto;
  padding: 40px;
  border-radius: 24px;
  background: rgba(44, 50, 56, 0.8);
  margin-right: 100px;
  text-align: center;
  position: absolute;
  top: 20%;
  /* right: -20%; */
  left: 40%;
  /* transform: translate(-50%, -50%); */
  color: white;
}

@media only screen and (max-width: 800px) {
  .backgroundImg {
    display: none;
  }
  .fart{
    background-image: url("../assets/pic.jpeg");
  }
  p{
    font-size: 16px;
  }
  .resume {
    height: 530px;
    width: 317px;
  }
  #aboutMe {
    padding-top: 10px;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    height: auto;
    align-items: center;
    display: inline-block;
    width: 350px;
    /* background: rgba(44, 50, 56, 0.8);
    display: inline-grid;
    left: 50%;
    top: 50%;
    height:610px;
    width: 350px;
    opacity: 7;
    text-align: center;
    align-items: center */

  }
  .resPic {
    /* display: grid; */
  }
}

@media only screen and (max-width: 1400px) {
  .backgroundImg {
    display: none;
  }
  .res {
    /* display: none; */
  }
  .resume {
    /* height: 830px;
    width: 480px; */
  }
  #aboutMe {
    background: rgba(44, 50, 56, 0.8);
    margin-top: 50px;
  }

}
</style>
