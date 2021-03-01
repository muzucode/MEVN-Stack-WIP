<template>

<div>
  <sub-navbar :tabs="tabs" :title="title"></sub-navbar>

  
    <b-container fluid id="main-container">
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
    </b-container>
  

  <div id="footer"></div>
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
import subNavbar from './Sub-navbar.vue'
export default {
  name: "modify-board",
  data() {
    return{
      elH: '100%',
      heightInput:'',
      halvesHeight: '40vh',
      tabs: {
        dropdowns:{
          a: {
            title: 'Layouts',
            options: {
              a: 'Quadrants',
              b: 'Side-by-side',
              c: 'Third option'
            }
          }, 
          b: {
            title: 'Frames',
            options: {
              a: 'Sports',
              b: 'Finance',
              c: 'Cooking'
            }
          }
        },
        static: {
          a: 'Change visibility',
          b: 'Delete board'
        }
        },
      title:'Modify board'
    }
  },
  methods:{
    setHeight: function(input){
      this.elH = input
    },
    setLayout: function(){
      
    }
  },

  components:{
    subNavbar

  },
  
    
};


</script>