<template>
<div class="animated fadeIn" id="footerStuff">
  <small>Shaun Seidman 2018 &copy</small>
</div>
</template>
<script>
export default {
  name: "footerStuff",
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style scoped>
.myLinks {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 5em;
  text-align: center;
}

ul {
  list-style-type: none;
  margin: 0;
  padding-bottom: 1em;
  overflow: hidden;
}

li,
img {
  float: left;
  text-align: center;
  padding: 16px;
  display: block;
  color: white;
  text-decoration: none;
}

li:hover {
  color: red;
}

small {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1rem;
  background: linear-gradient( #333333);
  text-align: center;
}
</style>
