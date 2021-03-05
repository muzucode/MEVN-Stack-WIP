<template>

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