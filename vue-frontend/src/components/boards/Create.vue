<template>

<div>
  <sub-navbar :tabs="tabs" :title="title"></sub-navbar>

  
    <b-container fluid id="main-container">
      <quadrants></quadrants>
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
import quadrants from './layouts/Quadrants.vue'
export default {
  name: "create-board",
  data() {
    return{
      title: 'Create board',
      heightInput:'',
      halvesHeight: '40vh',
      tabs: {
        dropdowns:{
          a: {
            title: 'Choose layout',
            options: {
              a: {name:'Quadrants (Default)',ev: this.ddiClick},
              b: {name:'Side-by-side',ev: this.ddiClick},
              c: {name: 'Tri-panel',ev: this.ddiClick}
            }
          }, 
          b: {
            title: 'Add frames',
            options: {
              a: {name: 'Sports',ev: this.ddiClick},
              b: {name: 'Finance',ev: this.ddiClick},
              c: {name: 'Cooking',ev: this.ddiClick}
            }
          }
        },
        static: {
          a: 'Save as draft',
          b: 'Publish'
        }
        },
      
    }
  },
methods:{
  ddiClick: function(){
    console.log('hi')
  }
},
  components:{
    subNavbar,
    quadrants

  },
  
    
};
</script>