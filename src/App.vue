<template>
  <div id="app">
    <!--    <img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style>
  /*@import "common/css/defaults.scss";*/
  body, html {
    width: 100%;
    height: 100%;
    position: absolute;
    margin: 0;
    font-size: 16px;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    font-size: 16px;
  }
</style>
