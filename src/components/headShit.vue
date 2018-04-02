<template>
  <div id="headShit">
    <nav role="navigation">
<div id="menuToggle">
<!--
A fake / hidden checkbox is used as click reciever,
so you can use the :checked selector on it.
-->
<input type="checkbox" />

<!--
Some spans to act as a hamburger.

They are acting like a real hamburger,
not that McDonalds stuff.
-->
<span></span>
<span></span>
<span></span>

<!--
Too bad the menu has to be inside of the button
but hey, it's pure CSS magic.
-->
<ul id="menu">
  <a href="#"><li>Home</li></a>
  <a href="#"><li>About</li></a>
  <a href="#"><li>Info</li></a>
  <a href="#"><li>Contact</li></a>
  <a href="https://erikterwan.com/" target="_blank"><li>Show me more</li></a>
</ul>
</div>
</nav>
  </div>
</template>
<script>
export default {
  name: "headShit",
  data: () => ({

  })
}
</script>
<style scoped>
#logo {
  float: left;
}

.headShit{
  z-index: 1;
}
#linkList{
  float: left;
  text-align: center;
  padding: 20px;
  color: #9e9898;
  text-decoration: none
}
#linkListItem {
  float: left;
  text-align: center;
  padding: 20px;
  display: block;
  color: #9e9898;
  text-decoration: none;
}

.table{
  position: absolute;
  color: white;
}
.linkImg {
  float: right;
  text-align: center;
  padding: 20px;
  display: block;
  color: white;
  text-decoration: none
}
img:hover {
  animation: shake 0.5s;
  animation-iteration-count: 1s;
  cursor: pointer;
}
</style>
