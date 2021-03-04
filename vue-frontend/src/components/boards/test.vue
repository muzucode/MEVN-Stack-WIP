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
</style>

<script>
import subNavbar from './Sub-navbar.vue';
import quadrants from './layouts/Quadrants.vue';

import setupFrame from './frames/SetupFrame/SetupFrame.vue';
import baseballContent from './frames/SetupFrame/Baseball-Content.vue'
import financeContent from './frames/SetupFrame/Finance-Content.vue'



export default {
  name: "test-board",
  data() {
    return{
      title: 'Create board',
      tabs: {
        dropdowns:{
          a: {
            title: 'Choose layout',
            options: {
              a: {name:'Quadrants (Default)', ev: this.setupFrame},
              b: {name:'Side-by-side', ev: this.setupFrame},
              c: {name: 'Tri-panel', ev: this.setupFrame}
            }
          }, 
          b: {
            title: 'Add frames',
            options: {
              a: {name: 'Baseball', ev: this.setupFrame},
              b: {name: 'Finance', ev: this.setupFrame},
              c: {name: 'Cooking', ev: this.setupFrame}
            }
          }
        },
        static: {
          a: {title:'Save as draft'},
          b: {title: 'Publish'}
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