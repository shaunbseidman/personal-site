<template>
  <div id="contact">
    <img class='backgroundImg' src="../assets/pic.jpeg" alt="">
    <div class="animated fadeIn" id="contactForm">
      <h2>Let's work together</h2>
      <h6>As an aspiring junior dev, I would love to be able to showcase my talents and build something with you.</h6>
      <form action="https://getsimpleform.com/messages?form_api_token=01178de3065ef85c5dd46493fabaf917" method="post">
        Name:<br>
        <input type="text" name= "Name: "><br>
        E-mail:<br>
        <input type="text" name="fart"><br>
        Message:<br>
        <input type="text" name="comment" height= 100 size="24"><br><br>
        <!-- <input type='hidden' name='redirect_to' value='http://shut-effect.surge.sh/#/contact' /> -->
        <button v-on:click="formSubmitted" type='submit' name="button">Send an email to shaunseidman@gmail.com</button>
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
  },
  methods:{
    formSubmitted(){
      alert('Your message has been sent! I will respond back within 24 hours.')
    }
  }
}
</script>
<style  scoped>

@import url('https://fonts.googleapis.com/css?family=Open+Sans:300');

body,
html {
  height: 100vh;
  width: 100%;
  font-family: 'Open Sans', sans-serif;

}
h2{
  font-family: 'Open Sans', sans-serif;
}
h6{
  font-family: 'Open Sans', sans-serif;

}
button{
  border-radius: 4px;
}
button:hover{
  opacity: 0.8;
  filter: alpha(opacity=50);
  cursor: pointer;

}
.backgroundImg {
  opacity: 0.6;
  height: 100%;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: absolute;
}
#contactForm{
  margin:0 auto;
  padding: 20px;
  border-radius: 24px;
  background: rgba(44, 50, 56, 0.8);
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}
#contact{
  font-family: 'Open Sans', sans-serif;
}
@media only screen and (max-width: 900px) {
  #contact{
    background-image: url('../assets/pic.jpeg');
  }

  #contactForm{
    background: rgba(44, 50, 56, 0.8);
    width: 350px;
  }
  button{
    color: white;
  }
}
@media only screen and (max-width: 1400px) {
.backgroundImg{
    display: none;
  }
#contactForm{
  background: rgba(44, 50, 56, 0.8);

}
}
</style>
