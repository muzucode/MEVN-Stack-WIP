<template>
  <div id="app">
    <!-- Sitewide menu bar -->
    <nav-bar></nav-bar>

    
      <router-view />
    

  </div>


</template>

<script>
import navBar from './components/Navbar'
export default {
  name: 'App',
  components:{
    navBar
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#siteTitle{
  font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size:3.8em;
}

#my-menubar{
    width:100%;
    height:100%;
    background-color:#e3e3e3;
    display:flex;
    flex-flow:row;
    padding:20px;
    box-sizing: border-box;
}
#menu-item{
  margin-right: 60px;
  border:blue solid 0px;
  align-content: center;
  font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.menu-nav{
  font-size:2em;
  border:red solid 0px;
  display:flex;
  flex-flow:row;
}
#menu-divider{
  width:7px;
  background-color: #2c3e50;
  height:100%;
}

</style>
