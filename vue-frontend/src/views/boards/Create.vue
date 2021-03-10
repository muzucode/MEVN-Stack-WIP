<template>

<div>
  <sub-navbar :tabs="tabs" :title="title" ></sub-navbar>


    <b-container fluid id="main-container">
      <div class="row">
        <quadrants></quadrants>
        <setup-frame v-if="!isHidden" :frametitle="frametitle">
          <baseball-content @discard="discardFrame" v-if="frametitle=='Baseball'"></baseball-content>
          <finance-content @discard="discardFrame" v-if="frametitle=='Finance'"></finance-content>
        </setup-frame>
      </div>
    </b-container>
</div>


</template>

<style>
#main-container{
  border: 0px solid green;
  display:flex;
  flex-flow:column;
  flex:1;
  padding-top:50px;
}

body{
  background-color:#dddddd;
}


</style>

<script>
import subNavbar from '../../components/boards/Sub-navbar.vue';
import quadrants from '../../components/boards/layouts/Quadrants.vue';

import setupFrame from '../../components/boards/frames/SetupFrame/SetupFrame.vue';
import baseballContent from '../../components/boards/frames/SetupFrame/Baseball-Content.vue'
import financeContent from '../../components/boards/frames/SetupFrame/Finance-Content.vue'



export default {
  name: "create-board",
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
    },
    discardFrame: function(){
      this.isHidden=true;
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