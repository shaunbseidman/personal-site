<template>
  <div id="contact">
    <img class='backgroundImg' src="../assets/dog.jpeg" alt="">
    <div class="animated fadeIn" id="contactForm">
      <h2>Let's get in touch</h2>
      <form action="https://getsimpleform.com/messages?form_api_token=01178de3065ef85c5dd46493fabaf917" method="post">
        Name:<br>
        <input type="text" name= "Name: "><br>
        E-mail:<br>
        <input type="text" name="fart"><br>
        Comment:<br>
        <input type="text" name="comment" height= 100 size="50"><br><br>
        <input type='hidden' name='redirect_to' value='http://localhost:8080/#/contact' />
        <button v-on:click="formSubmitted" type='submit' name="button">Submit</button>
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
      alert('If I programmed this correctly I have hopefully have received your message and will get back to you as quickly as possible.')
    }
  }
}
</script>
<style  scoped>
@import url('https://fonts.googleapis.com/css?family=Julius+Sans+One');

body,
html {
  height: 100%;
  width: 100%;
}
h2{
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
    border: 16px solid #f3f3f3;
    border-top: 16px solid #3498db;
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
