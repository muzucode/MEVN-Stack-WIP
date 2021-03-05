<template>

      <div id="halves-container">
        <div id="top-half" class="halves" v-bind:style="{height: halvesHeight}">
          <b-container id="quadrant-spacer-lg"></b-container>
          <b-container id ="q1" class="quadrant">
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
              <div class="current-date">
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
                  </tr>
                  <tr id="away">
                    <td class="row-label">Away</td>
                    <td v-for="index in 9" :key="index"></td>
                  </tr>
                  <tr id="home">
                    <td class="row-label">Home</td>
                    <td v-for="index in 9" :key="index"></td>
                  </tr>
                  <tr id="hits">
                    <td class="row-label">Hits</td>
                    <td v-for="index in 9" :key="index"></td>
                  </tr>
                </table>
              </div>
            </div>
              <div class="fcontent-2">
              
              </div>
            </div>
            
            
          </b-container>





          <b-container id="quadrant-spacer"></b-container>
          <b-container class="quadrant"></b-container>
          <b-container id="quadrant-spacer-lg"></b-container>
        </div>
        <b-container id="halves-spacer"></b-container>
        <div id="bottom-half" class="halves" v-bind:style="{height: halvesHeight}">
          <b-container id="quadrant-spacer-lg"></b-container>
          <b-container class="quadrant"></b-container>
          <b-container id="quadrant-spacer"></b-container>
          <b-container class="quadrant"></b-container>
          <b-container id="quadrant-spacer-lg"></b-container>
        </div>
      </div>


</template>

<style>
.row-label{
  width:4vw;
}
td{
  font-size:.7vw;
}
table{
  width:100%;
  color:black;
}
table > tr > td{
  border: solid 1px black;
}
.boxscore{
  display:flex;
  overflow:auto;
  border:solid 5px blue;
}
.team-img{
  height:10vh;
}
.current-game > div {
  font-size: 2.5em;
  margin: 0px 5vw 0px 5vw;
  color:black;
  font-weight: bold;
}
.current-game{
  border: solid 5px greenyellow;
  color:white;
  font-size:1vw;
  display:flex;
  flex-flow:row;
  width:100%;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
}
.current-date{
  border: solid 5px rgb(255, 184, 104);
  color:black;
  font-size:1vw;
  padding:5px;
}

.fcontent-1{
  border:solid 5px red;
  display:flex;
  flex-flow: column;
  height:100%;
  background-color: white;
}
.fcontent-2{
  border:solid 5px rgb(1, 214, 221);
  display:flex;
  flex-flow: column;
  width:100%;
  height:100%;
  background-color: white;
}
.fcontent-container{
  border:solid 5px red;
  display:flex;
  flex-flow: row;
  height:85%;
  background-color: white;
}
.frow{
  height:100%;
  display:flex;
  flex-flow: row;

}
.ftab{
  border-right: solid 2px #b9c4cf;
  display:flex;
  flex-flow: row;
  padding:0px 10px 0px 10px;
  background-color: rgb(36, 39, 70);
  font-weight: bold;
  height:100%;
  font-size:1vw;
  align-items: center;
}
.ftab:hover{
  background-color: rgb(64, 69, 124);
  cursor:pointer;
}
.fcontainer{
  border-bottom:solid 5px #b9c4cf;
  height:15%;
  color:white;
  align-items: left;
}
#q1{
  border:solid 5px #b9c4cf;
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
  border: 5px solid #b9c4cf;
  padding:0px;
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
};
</script>