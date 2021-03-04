<template>

      <div id="halves-container">
        <div id="top-half" class="halves" v-bind:style="{height: halvesHeight}">
          <b-container id="quadrant-spacer-lg"></b-container>
          <b-container id="quadrant"></b-container>
          <b-container id="quadrant-spacer"></b-container>
          <b-container id="quadrant"></b-container>
          <b-container id="quadrant-spacer-lg"></b-container>
        </div>
        <b-container id="halves-spacer"></b-container>
        <div id="bottom-half" class="halves" v-bind:style="{height: halvesHeight}">
          <b-container id="quadrant-spacer-lg"></b-container>
          <b-container id="quadrant"></b-container>
          <b-container id="quadrant-spacer"></b-container>
          <b-container id="quadrant"></b-container>
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
#quadrant{
  border: 5px solid #b9c4cf;
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