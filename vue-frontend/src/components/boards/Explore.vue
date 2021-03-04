<template>

<div>
  <sub-navbar :tabs="tabs" :title="title" ></sub-navbar>


    <b-container fluid id="main-container">
      <div class="row">
        <setup-frame v-if="!isHidden" :frametitle="frametitle">
          <baseball-content v-if="frametitle=='Baseball'"></baseball-content>
          <finance-content v-if="frametitle=='Finance'"></finance-content>
        </setup-frame>
        <quadrants></quadrants>
      </div>
    </b-container>
  

  <div id="footer"></div>
</div>


</template>

<style>

#boxy{
  border: 5px solid red;
}
body{
  background-color:#2c3e50;
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
  border: 5px solid #a5a5a5;
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
import subNavbar from './Sub-navbar.vue';
import quadrants from './layouts/Quadrants.vue';
import setupFrame from './frames/SetupFrame/SetupFrame.vue';
import baseballContent from './frames/SetupFrame/Baseball-Content.vue'
import financeContent from './frames/SetupFrame/Finance-Content.vue'



export default {
  name: "explore-boards",
  data() {
    return{
      title: 'Explore boards',
      tabs: {
        dropdowns:{
          a: {
            title: 'Categories',
            options: {
              a: {name:'Investing & Finance', ev: this.setupFrame},
              b: {name:'Sports', ev: this.setupFrame},
              c: {name: 'News & Politics', ev: this.setupFrame}
            }
          }, 
          b: {
            title: 'Companies',
            options: {
              a: {name: 'Apple', ev: this.setupFrame},
              b: {name: 'Moody\'s', ev: this.setupFrame},
              c: {name: 'Tesla', ev: this.setupFrame}
            }
          },
          c: {
            title: 'Top-rated',
            options: {
              a: {name:'The Armchair Investor', ev: this.setupFrame},
              b: {name:'Cooking In 3..2..1..', ev: this.setupFrame},
              c: {name: 'The Bedroom Scout', ev: this.setupFrame}
            }
          }
        },
        static: {
          a: {title:'Random'}
        }
        },
      isHidden: true,
      frametitle: ''
    }
  },
  methods:{
    setupFrame: function(frameName){
      console.log(frameName);
      this.isHidden=false;
      this.frametitle=frameName;
      
      // this.options=content.setup.section1;
    }
  },
  components:{
    subNavbar,
    quadrants,
    setupFrame,
    baseballContent,
    financeContent

  },
  
    
};
</script>