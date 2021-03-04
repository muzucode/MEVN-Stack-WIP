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
.frow{
  height:100%;
  display:flex;
  flex-flow: row;

}
.ftab{
  border-right: solid 2px #b9c4cf;
  display:flex;
  flex-flow: row;
  padding:15px 10px 10px 10px;
  background-color: rgb(36, 39, 70);
  font-weight: bold;
}
.ftab:hover{
  background-color: rgb(64, 69, 124);
  cursor:pointer;
}
.fcontainer{
  border-bottom:solid 5px #b9c4cf;
  height:15%;
  color:white;
  min-height:30px;
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