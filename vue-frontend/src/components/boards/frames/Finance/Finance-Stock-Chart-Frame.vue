
<template>

  <div style="height:100%">
    <slot></slot>
    <div class="fcontent-container_2">
      <div class="fcontent-1_2">
        <div id="stocktitle" class="content-header_2">
          Tesla Motors, Inc. (TSLA)
        </div>

        <div class="stock-overview">
          <img id="mylogo" src="../../../../assets/stocks-logos/company.png"/>
          <div v-for="stat in stockOverview" :key="stat.id">
            <div id="overview-stat-label">
              {{stat.label}}
            </div>
            <div id="overview-stat-number">
              {{stat.number}}
            </div>
          </div>
        </div>


        <div class="links-section">
          <div id="itemlinks">
            <div v-for="link in stockLinks" :key="link.id" class="link-item_left">
              {{link.title}}
            </div>
          </div>
          <div id="itemlinks-options">
            <div v-for="option in 6" :key="option.id" class="link-item_right">
              - Option # {{option}}
            </div>
          </div>
        </div>
        
      </div>





      <div class="fcontent-divider_2"></div>
      
      
      
      <div class="fcontent-2_2">
        <div id="stock-stats-header" class="content-header_2">
        The Numbers
      </div>
      <div class="stock-stats">
        <table>
          <tr v-for="i in stockStats" :key="i.id">
            <td class="stock-stats-outer-td">
              <tr>
                <td>{{i.label}}</td>
              </tr>
            </td>
            <td class="stock-stats-outer-td">
              <tr>
                <td>{{i.number}}</td>
              </tr>
            </td>
          </tr>
        </table>
      </div>
      </div>
    </div>
  </div>
</template>


<style>
#itemlinks-options{
  display:flex;
  flex-flow:column;
  flex-grow: 1;
  border-top: solid 2px black;

  font-size:70%;
  background-color: rgb(255, 255, 255);
}
.link-item_left:hover{
  background-color: rgb(255, 255, 255);
  border-right:none;
  cursor:pointer;
}
.link-item_left{
  border-top:solid 2px rgb(0, 0, 0);
  border-right:solid 2px rgb(0, 0, 0);
  display: flex;
  flex-grow: 1;
  padding-left: 20px;
  padding-top:5px;
  color:black;
  background-color: rgb(204, 200, 255);
}
.link-item_right{
  border-top:solid 0px rgb(0, 0, 0);
  border-right:solid 0px rgb(0, 0, 0);
  display: flex;
  flex-grow: 1;
  padding-left: 20px;
  padding-top:5px;
  color: black;
}
.link-items{
  border:0px;
}
.links-section{
  height:100%;
  display:flex;
  flex-flow:row;
  border-top:0px solid black;
  
}
#itemlinks{
  width:40%;
  border: solid 0px red;
  display:flex;
  flex-flow:column;
}

#overview-stat-number{
  font-size:1.5em;
}
.stock-overview > div > div{
  display:flex;
  flex-grow: 1;
  flex-flow:column;
}
.stock-overview > div{
  display:flex;
  border:solid 0px yellowgreen;
  flex-grow: 1;
  margin:0px 10px 0px 10px;
  align-items: center;
  flex-flow:column;
}
#mylogo{
  width:100px;
}
.stock-overview{
  width:100%;
  border:solid 0px green;
  display:flex;
  flex-flow: row;
  padding-left:20px;
  padding-bottom:20px;
  margin-top:10px;
}
#stocktitle{
  text-align: left;
}
.fcontent-divider_2{
  width:2px;
  background-color:rgb(0, 0, 0);
}
.stock-stats-outer-td > tr > td{
  padding-left:10px;
}
.stock-stats{
  height:100%;
  overflow:auto;
  border:solid 0px blue;
}
.stock-stats > table{
  width:100%;
  color:black;
  height:100%;

}
.stock-stats > table > tr > td{
  border-top: solid 1px black;
  font-size: .6vw;
}
.fchart{
  border: solid 0px rgb(0, 0, 0);
  color:white;
  font-size:1vw;
  display:flex;
  flex-flow:row;
  width:100%;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  background-color:rgb(63, 61, 94);
}
#stock-stats-header{
  background-color:rgb(255, 255, 255);
  padding:5px;
}
.content-header_2{
  border: solid 0px rgb(255, 184, 104);
  border-top: solid 2px black;
  border-bottom:solid 0px rgb(0, 0, 0);
  background-color:rgb(255, 255, 255);
  color:rgb(112, 112, 112);
  font-size:1vw;
  padding:5px 5px 5px 20px;
}
.fcontent-1_2{
  border: solid 0px rgb(1, 214, 221);
  display:flex;
  flex-flow: column;
  height:100%;
  background-color: white;
  flex-grow:1;
}
.fcontent-2_2{
  border:solid 0px rgb(1, 214, 221);
  display:flex;
  flex-flow: column;
  height:100%;
  background-color: white;
  float:right;
}
.fcontent-container_2{
  border:solid 0px red;
  display:flex;
  flex-flow: row;
  height:90%;
  background-color: white;
}

</style>

<script>
export default {
  name: "finance-stock-chart-frame",
  data() {
    return{
      stockStats:{
          a: {label: 'Price', number:76},
          b: {label: 'Volume', number:48},
          c: {label: 'EPS', number:96},
          d: {label: 'Open', number:34},
          e: {label: 'Close', number:4238},
          f: {label: '% Change', number:14}
      },
      stockLinks:{
          a: {title: 'Charts (Finviz)', outlet: 'Yahoo Finance'},
          b: {title: 'News', outlet: 'Yahoo Finance'},
          c: {title: 'Investor Analysis', outlet: 'Yahoo Finance'},
          d: {title: 'Company Bio', outlet: 'Yahoo Finance'}
      },
      stockOverview:{
          a: {label: 'Price', number:'$673.60'},
          b: {label: 'EPS', number:'$5.32'},
          c: {label: 'Volume', number:'96,000,000'},
      },
    }
  }
};

</script>