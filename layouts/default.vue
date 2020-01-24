<template>
<div>
  <div class="img-container">
    <img v-bind:src="img" />
  </div>
  <div class="app-layout">
    <div class="main-content">
      <nuxt />
    </div>
  </div>
  </div>
</template>
<script>

export default {

    data() {
      return {
          img:'https://pbs.twimg.com/profile_images/1131882065337602049/0JRUGd3S_400x400.jpg'

      }
    }
}
</script>
<style >
.img-container {
  width: 5%;
  margin-bottom: -3px;
  height: 5%;
}

img{
 width: 100%;
 height: 100%;
 padding: 0px;
}

.app-layout {
 display: flex;
}



.sidebar p {
  color:#dddd;
  padding-top:14px;
}

.main-content {
 width: 100%;
 background:  #F1F1F1;
 height: 95vh;
}

html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
