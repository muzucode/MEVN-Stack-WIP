<template>

      <div id="halves-container">
        <div id="top-half" class="halves" v-bind:style="{height: halvesHeight}">
          <b-container id="quadrant-spacer-lg"></b-container>
          <b-container id="quadrant"></b-container>
          <b-container id="quadrant-spacer"></b-container>
          <b-container id="quadrant"></b-container>
          <b-container id="quadrant-spacer-lg"></b-container>
        </div>
        <b-container id="halves-spacer"></b-container>
        <div id="bottom-half" class="halves" v-bind:style="{height: halvesHeight}">
          <b-container id="quadrant-spacer-lg"></b-container>
          <b-container id="quadrant"></b-container>
          <b-container id="quadrant-spacer"></b-container>
          <b-container id="quadrant"></b-container>
          <b-container id="quadrant-spacer-lg"></b-container>
        </div>
      </div>


</template>

<style>

#boxy{
  border: 5px solid red;
}

#main-container{
  border: 0px solid green;
  display:flex;
  flex-flow:column;
  flex:1;
  padding-top:50px;
}
#halves-container{
  display:flex;
  flex-flow:column;
  border:solid orange 0px;
  width:100%;
}

.halves{
  border: 0px solid rgb(255, 89, 191);
  height:200px;
  display:flex;
  flex-flow:row;
  padding-right:-40px;
  
}
#quadrant{
  border: 5px solid #2c3e50;;
  border-radius:30px;
}
#quadrant-spacer{
  width:40px;
  height:100%;
}
#quadrant-spacer-lg{
  width:200px;
  height:100%;
}
#halves-spacer{
  width:100%;
  height:40px;
}
#footer{
  display:none;
  position:fixed;
  bottom:0px;
  width:100%;
  height:50px;
  background-color: #2c3e50;
}
</style>

<script>

export default {
  name: "quadrants-layout",
  data() {
    return{
      halvesHeight: '38vh',      
    }
  },  
};
</script>