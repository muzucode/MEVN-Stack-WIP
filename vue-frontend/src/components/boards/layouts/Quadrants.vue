<template>

  <div id="halves-container">
    <div id="top-half" class="halves" v-bind:style="{height: halvesHeight}">
      <b-container id="quadrant-spacer-lg"></b-container>
      <b-container class="quadrant">
        <baseball-frame>
          <header-tabs></header-tabs>
        </baseball-frame>
      </b-container>





      <b-container id="quadrant-spacer"></b-container>

      <!-- Q2  -->
      <b-container class="quadrant">
        <finance-stock-chart-frame>
          <header-tabs></header-tabs>
        </finance-stock-chart-frame>
      </b-container>

      <b-container id="quadrant-spacer-lg"></b-container>
    </div>



    
    <b-container id="halves-spacer"></b-container>


    <div id="bottom-half" class="halves" v-bind:style="{height: halvesHeight}">

      <!-- Q3  -->
      <b-container id="quadrant-spacer-lg"></b-container>
      <b-container class="quadrant">
        <finance-stock-chart-frame>
          <header-tabs></header-tabs>
        </finance-stock-chart-frame>
      </b-container>

      <!-- Q4  -->
      <b-container id="quadrant-spacer"></b-container>
      <b-container class="quadrant">
        <baseball-frame>
          <header-tabs></header-tabs>
        </baseball-frame>
      </b-container>
      <b-container id="quadrant-spacer-lg"></b-container>
    </div>
  </div>  


</template>

<style>

#boxy{
  border: 5px solid rgb(199, 96, 96);
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
.quadrant{
  border: 0px solid #000000;
  padding:0px;
  background-color: rgb(141, 141, 141) ;
  filter: drop-shadow(0 0 0.3rem rgb(65, 65, 65));
}
#quadrant-spacer{
  width:40px;
  height:100%;
}
#quadrant-spacer-lg{
  width:200px;
  height:100%;
  border:solid 0px red;
}
#halves-spacer{
  width:100%;
  height:40px;
}

</style>

<script>
import baseballFrame from '../frames/Baseball/Baseball-Frame.vue';
import FinanceStockChartFrame from '../frames/Finance/Finance-Stock-Chart-Frame.vue';
import headerTabs from '../frames/Common/Header-tabs.vue';

export default {
  name: "quadrants",
  data() {
    return{
      halvesHeight: '38vh',
      // halvesContainer: {
      //     display:'flex',
      //     flexFlow:'column',
      //     border: 'solid orange 0px',
      //     width: '100%'
      // },
            
    }
  },
  components: {
    baseballFrame,
    FinanceStockChartFrame,
    headerTabs
  }  
};
</script>