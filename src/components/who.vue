<template>
  <div id="who">
    <img class='backgroundImg' src="../assets/dog.jpeg" alt="">
    <div class="animated fadeIn" id="aboutMe">
      <p>Lorem ipsum dolor sit amet, mel iriure temporibus contentiones te, congue convenire usu at. Dicat pertinax at per, decore repudiandae pro ut. Eam dicat commodo vituperatoribus eu, vix nibh tota id, probo dictas vim te. Sea ad lorem discere intellegam, graece erroribus an nec. Ei eam propriae reprehendunt, cu pro esse dictas doctus, nec oratio abhorreant ex.
  </p>
    </div>

  </div>
</template>
<script>
export default {
  name: "who",
  data(){
    return{
      isOpen:false

    }
  },
  methods:{

  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Julius+Sans+One');

body,
html {
  height: 100%;
  width: 100%;
}
p{
  font-family: 'Julius Sans One', sans-serif;
}
.backgroundImg {
  opacity: 0.3;
  height: 100%;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: relative;
}
#aboutMe{
  padding: 20px;
  margin: 30px;
  border-radius: 18px;
  background: rgba(191, 191, 191, 0.43);
  text-align: center;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}
#who{
  position: relative;
  text-align: center;}
</style>
