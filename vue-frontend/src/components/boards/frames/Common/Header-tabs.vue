<template>


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

</template>


<style>

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

</style>

<script>

export default {
  name: "header-tabs",
  data() {
    return{
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