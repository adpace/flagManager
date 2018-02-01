<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <the-header></the-header>
    <game-manager></game-manager>
    <router-view/>
  </div>
</template>

<script>
  import theHeader from './components/TheHeader'
  import gameManager from './components/GameManager'

  export default {
    name      : 'App',
    components:
      {
        'theHeader'  : theHeader,
        'gameManager': gameManager
      }
  }
</script>

<style>
  html {
    font-family: 'Ubuntu', 'sans-serif'!important;
  }

  body {
    margin: 0;
    padding: 0;
    background: #A6192E;
    font-family: 'Ubuntu', 'sans-serif'!important;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    background: #001E62;
    color: #A2AAAD;
    /*margin-top: 60px;*/
    /*ROYAL BLUE*/
    /*HEX COLOR: #001E62;*/
    /*RED*/
    /*HEX COLOR: #A6192E;*/
    /*GRAY */
    /*HEX COLOR: #A2AAAD;*/
  }
</style>
