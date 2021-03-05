<template>

      <div id="halves-container">
        <div id="top-half" class="halves" v-bind:style="{height: halvesHeight}">
          <b-container id="quadrant-spacer-lg"></b-container>
          <b-container id ="q1" class="quadrant">
            <div style="height:100%">
              <div class="fcontainer">
                <div class="frow">
                  <div class="ftab">
                    Phillies
                  </div>
                  <div class="ftab">
                    Natl. League
                  </div>
                  <div class="ftab">
                    News
                  </div>
                </div>
              </div>
              <div class="fcontent-container">
                <div class="fcontent-1">
                  <div class="content-header">
                    March 4, 2021
                  </div>
                  <div class="current-game">
                    <img class="team-img" src="../../../assets/baseball-logos/phillies.png"/>
                    <div>vs</div>
                    <img class="team-img" src="../../../assets/baseball-logos//dodgers.png"/>
                  </div>
                  <div class="boxscore">
                  <table>
                    <tr id="inning">
                      <td class="row-label">Inning</td>
                      <td v-for="index in 9" :key="index">{{index}}</td>
                      <td>Totals</td>
                    </tr>
                    <tr id="away">
                      <td class="row-label">Away</td>
                      <td v-for="index in 10" :key="index"></td>
                    </tr>
                    <tr id="home">
                      <td class="row-label">Home</td>
                      <td v-for="index in 10" :key="index"></td>
                    </tr>
                    <tr id="hits">
                      <td class="row-label">Hits</td>
                      <td v-for="index in 10" :key="index"></td>
                    </tr>
                  </table>
                  </div>
                </div>

              <div class="fcontent-divider">

              </div>


                <div class="fcontent-2">
                  <div class="content-header">
                    League Scores
                  </div>
                  <div class="league-scores">
                    <table>
                      <tr v-for="i in 7" :key="i">
                        <td class="league-scores-outer-td">
                          <tr>
                            <td>PHI</td>
                          </tr>
                          <tr>
                            <td>PIT</td>
                          </tr>
                        </td>
                        <td class="league-scores-outer-td">
                          <tr>
                            <td>5</td>
                          </tr>
                          <tr>
                            <td>6</td>
                          </tr>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            
          </b-container>





          <b-container id="quadrant-spacer"></b-container>

          <!-- Q2  -->
          <b-container class="quadrant">
            <baseball-frame></baseball-frame>
          </b-container>

          <b-container id="quadrant-spacer-lg"></b-container>
        </div>



        
        <b-container id="halves-spacer"></b-container>


        <div id="bottom-half" class="halves" v-bind:style="{height: halvesHeight}">

          <!-- Q3  -->
          <b-container id="quadrant-spacer-lg"></b-container>
          <b-container class="quadrant">
            <baseball-frame></baseball-frame>
          </b-container>

          <!-- Q4  -->
          <b-container id="quadrant-spacer"></b-container>
          <b-container class="quadrant">
            <baseball-frame></baseball-frame>
          </b-container>
          <b-container id="quadrant-spacer-lg"></b-container>
        </div>
      </div>


</template>

<style>
.fcontent-divider{
  width:2px;
  background-color:rgb(0, 0, 0);
}
.league-scores-outer-td > tr > td{
  padding-left:10px;
}
.league-scores{
  height:100%;
  overflow:auto;
  border:solid 0px blue;
}
.league-scores > table{
  width:100%;
  color:black;
  height:100%;

}
.league-scores > table > tr > td{
  border-bottom: solid 1px black;
  font-size: .6vw;
}
.row-label{
  width:4vw;
}
.boxscore > table{
  width:100%;
  color:black;

}
.boxscore > table > tr > td{
  border: solid 0px black;
  font-size:.7vw;
}
.boxscore{
  display:flex;
  overflow:auto;
  border-top:solid 2px rgb(0, 0, 0);
}
.team-img{
  height:11vh;
}
.current-game > div {
  font-size: 2.5em;
  margin: 0px 5vw 0px 5vw;
  color:black;
  font-weight: bold;
}
.current-game{
  border: solid 0px rgb(0, 0, 0);
  color:white;
  font-size:1vw;
  display:flex;
  flex-flow:row;
  width:100%;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
}
.content-header{
  border: solid 0px rgb(255, 184, 104);
  border-top: solid 2px black;
  border-bottom:solid 2px rgb(0, 0, 0);
  background-color:rgb(121, 116, 192);
  font-weight:bold;
  color:black;
  font-size:1vw;
  padding:5px;
}

.fcontent-1{
  border: solid 0px rgb(1, 214, 221);
  display:flex;
  flex-flow: column;
  height:100%;
  background-color: white;
  flex-grow:1;
}
.fcontent-2{
  border:solid 0px rgb(1, 214, 221);
  display:flex;
  flex-flow: column;
  height:100%;
  background-color: white;
  float:right;
}
.fcontent-container{
  border:solid 0px red;
  display:flex;
  flex-flow: row;
  height:90%;
  background-color: white;
}
.frow{
  height:100%;
  display:flex;
  flex-flow: row;
}
.ftab{
  border-right: solid 2px #5e5e5e;
  display:flex;
  flex-flow: row;
  padding:0px 10px 0px 10px;
  background-color: rgb(141, 141, 141);
  height:100%;
  font-size:.8vw;
  align-items: center;
  color:white;
}
.ftab:hover{
  background-color: rgb(185, 185, 185);
  cursor:pointer;
  color:black;
}
.fcontainer{
  border-bottom:solid 10px rgb(185, 185, 185);
  height:10%;
  color:black;
  align-items: left;
}
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
  border: 3px solid #000000;
  padding:0px;
  background-color: rgb(141, 141, 141) ;
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
import baseballFrame from '../frames/Baseball/Baseball-Frame.vue'
export default {
  name: "quadrants-layout",
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
    baseballFrame
  }  
};
</script>