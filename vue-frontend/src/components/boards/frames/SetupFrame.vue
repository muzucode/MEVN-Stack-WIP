<template>

<!-- Designs the setup frame -->

<div id="setup-frame">
    <div id="setup-frame-title">
      <h1>New {{frametitle}} Frame</h1>
    </div>
    <div id="hr"></div>
    <div class="section" id="1">
      <h2 id="section-title">{{s1Title}}</h2>
      <b-container fluid class="bv-example-row">
        <b-row>
          <div>
            <b-form-select :options="s1options"></b-form-select>
          </div>
        </b-row>
      </b-container>
    </div>
    <div class="section" id="2">
      <h2 id="section-title">{{s2Title}}</h2>
      <b-container fluid class="bv-example-row">
        <b-row>
          <div>
            <b-form-select :options="s2options"></b-form-select>
          </div>
        </b-row>
      </b-container>
    </div>
      
</div>


</template>

<style>
#gridbox{
  border:1px solid green;
}
.section{
  border:0px solid orange;
  width:100%;
  margin-bottom:20px;
}
#section-title{
  font-size:1.2em;
  text-align: left;
}
.bv-example-row{
  border:solid 0px red;
}
#setup-frame{
  height:60%;
  border: solid 5px #2c3e50;
  position: fixed;
  width:50%;
  left:25%;
  filter: drop-shadow(0 0 1rem rgb(65, 65, 65));
  border-radius:30px;
  background-color: rgb(240, 240, 240);
  display:flex;
  flex-flow:column;
  padding:20px;
}

#setup-frame-title{
  border: solid 0px red;
  display:flex;
  flex-flow:row;
  margin-bottom:5px;
}
#setup-frame-title h1{
  font-size:2em;
  font-style: bold;
}
#hr{
  height:2px;
  width:100%;
  background-color: rgb(121, 131, 139);
  margin-bottom:20px;
}
#spacer{
  width:100%;
  border:5px solid blue;
}

</style>

<script>
export default {
  name: "setup-frame",
  data() {
    return{

    }
    
},
// Prop is defined down here.  I want it to be 
// dynamically displayed within the title div so I put it in curly braces.
// On the importing component, I bind the the prop below to importED component.
// And I set it's value equal to a variable in the data section.
// NOTE: Be sure to include an empty variable for this prop in the data section
// or the property won't react to change states
  props: ['frametitle','s1Title','s1options','s2Title','s2options']
}
</script>