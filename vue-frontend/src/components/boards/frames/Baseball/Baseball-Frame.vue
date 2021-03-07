<template>

<div style="height:100%">
  <slot></slot>
  <div class="fcontent-container">
    <div class="fcontent-1">
      <div id="gametitle" class="content-header">
        Game: PHI vs LAD (March 5, 2021)
      </div>
      <div class="current-game">
        <img class="team-img" src="../../../../assets/baseball-logos/phillies.png"/>
        <div>vs</div>
        <img class="team-img" src="../../../../assets/baseball-logos/dodgers.png"/>
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


</template>


<style>
#gametitle{
  text-align: left;
  padding-left: 15px;
}
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
  border-top: solid 1px black;
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
  border-bottom:solid 0px rgb(0, 0, 0);
  background-color:rgb(255, 255, 255);
  color:rgb(112, 112, 112);
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


</style>


<script>


export default {
  name: "baseball-frame",
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
};

</script>