<template>
  <div class="animated fadeIn" id="contact">
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
#contact{
  font-family: 'Droid Sans', arial, serif;
  padding: 70px;
  margin: 10px;
  /* color: yellow; */
  text-align: center;
}
</style>
