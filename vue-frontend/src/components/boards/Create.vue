<template>

<div>
  <sub-navbar :tabs="tabs" :title="title" ></sub-navbar>


    <b-container fluid id="main-container">
      <div class="row">
        <setup-frame 
          v-if="!isHidden" 
          :frametitle="frametitle" 
          :s1options="s1options"
          :s1Title="s1Title"
          :s2options="s2options"
          :s2Title="s2Title"
          >
          
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
  border: 5px solid #2c3e50;
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
import setupFrame from './frames/SetupFrame.vue';
import subNavbar from './Sub-navbar.vue';
import quadrants from './layouts/Quadrants.vue';
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
              a: {name:'Quadrants (Default)', ev: this.setupFrame},
              b: {name:'Side-by-side', ev: this.setupFrame},
              c: {name: 'Tri-panel', ev: this.setupFrame}
            }
          }, 
          b: {
            title: 'Add frames',
            options: {
              a: {name: 'Baseball', 
                  ev: this.setupFrame,
                  setup: {
                    s1: {
                      title: 'Division to watch:',
                      options: [
                        { value: 'a', text: 'NL East' },
                        { value: 'b', text: 'NL West' },
                        { value: 'c', text: 'NL Central'},
                        { value: 'd', text: 'AL East' },
                        { value: 'e', text: 'AL Wast' },
                        { value: 'f', text: 'AL Central' }
                      ] 
                    },
                    s2: {
                      title: 'Team to watch:',
                      options: [
                        { value: 'a', text: 'Phillies' },
                        { value: 'b', text: 'Yankees' },
                        { value: 'c', text: 'Red Sox'},
                        { value: 'd', text: 'Cubs' },
                        { value: 'e', text: 'Athletics' },
                        { value: 'f', text: 'Mariners' }
                      ] 
                    }
                  }
              },
              b: {name: 'Finance',
                  ev: this.setupFrame,
                  setup: {
                    s1: {
                      title: 'Market to watch:',
                      options: [
                        { value: 'a', text: 'NYSE' },
                        { value: 'b', text: 'NASDAQ' },
                        { value: 'c', text: 'London Stock Exchange'},
                        { value: 'd', text: 'Shanghai Stock Exchange' },
                        { value: 'e', text: 'National Stock Exchange of India' },
                        { value: 'f', text: 'Tokyo Stock Exchange' }
                      ] 
                    },
                    s2: {
                      title: 'Stock to watch:',
                      options: [
                        { value: 'a', text: 'AMZN' },
                        { value: 'b', text: 'TSLA' },
                        { value: 'c', text: 'WMT'},
                        { value: 'd', text: 'AAPL' },
                        { value: 'e', text: 'MSFT' },
                        { value: 'f', text: 'GME' }
                      ] 
                    }
                  }
              },
              c: {name: 'Cooking', ev: this.setupFrame}
            }
          }
        },
        static: {
          a: 'Save as draft',
          b: 'Publish'
        }
        },
      isHidden: true,
      frametitle: '',
      s1options: [],
      s1Title: ''
    }
  },
  methods:{
    setupFrame: function(frameName, content){
      console.log(frameName);
      console.log(content);
      this.isHidden=false;
      this.frametitle=frameName;
      this.s1Title=content.s1.title;
      this.s1options=content.s1.options;
      this.s2Title=content.s2.title;
      this.s2options=content.s2.options;
      
      // this.options=content.setup.section1;
    }
  },
  components:{
    subNavbar,
    quadrants,
    setupFrame

  },
  
    
};
</script>