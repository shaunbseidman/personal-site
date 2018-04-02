<template>
  <div id="contact">
    <img class='backgroundImg' src="../assets/dog.jpeg" alt="">
    <div class="animated fadeIn" id="contactForm">

          <h2>Let's get in touch</h2>
    <form action="mailto:shaunseidman@gmail.com" method="post" enctype="text/plain">
    Name:<br>
    <input type="text" name= "Name: "><br>
    E-mail:<br>
    <input type="text" name="fart"><br>
    Comment:<br>
    <input type="text" name="comment" height= 100 size="50"><br><br>
    <input type="submit" value="Send">
    <input type="reset" value="Reset">
    </form>
  </div>

  </div>
</template>
<script>
export default {
  name: "contact",
  data(){
    return{
      contactOpen: false
    }
  }
}
</script>
<style  scoped>
body,
html {
  height: 100%;
  width: 100%;
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
.loader{
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white
}
#contactForm{
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}
#contact{
  font-family: 'Droid Sans', arial, serif;
  /* padding: 70px; */
  /* margin: 10px; */
  text-align: center;
}

.loader {
    border: 16px solid #f3f3f3; /* Light grey */
    border-top: 16px solid #3498db; /* Blue */
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
</style>
