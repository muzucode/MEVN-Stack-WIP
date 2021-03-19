<template>
<div>
    <div class="section" id="1">
        <h2 id="section-title">Market to watch:</h2>
        <b-container fluid class="bv-example-row">
            <b-row>
                <div>
                    <b-form-select :options="s1options"></b-form-select>
                </div>
            </b-row>
        </b-container>
    </div>
    <div class="section">
        <h2 id="section-title">Stocks to watch</h2>
        <b-container fluid class="bv-example-row">
            <b-row>
            <div>
                <b-form-select :options="s2options"></b-form-select>
            </div>
            </b-row>
        </b-container>
    </div>

    <div class="section" id="footer-s1">
      <h2 id="section-title">Add to panel(s):</h2>
      <b-form-group class="leftalign">
        <b-form-checkbox-group id="checkbox" :options="footerOptions" v-model="panels">
        </b-form-checkbox-group>
      </b-form-group>
    </div>
    <div class="section" id="footer-s2">
      <b-button-group id="btn-grp">
          <b-button id="btn-grp-btn" variant="warning">Draft</b-button>
          <b-button @click="saveFrame(), emitDiscard()" id="btn-grp-btn" variant="success">Add</b-button>
          <b-button @click="emitDiscard" id="btn-grp-btn" variant="danger">Discard</b-button>
      </b-button-group>
    </div>

</div>
</template>

<style>
#btn-grp-btn{
  color:black;
  font-size:20px;
}
#btn-grp{
  display:flex;
}
.leftalign{
  display:flex;
  flex-flow:row;
  align-content: left;
}
</style>

<script>
import FrameDataService from '../../../../services/FrameDataService'
export default {
  name: "finance-content",
  
  data() {
    return{
        id:null,
        panels: [],
        market:'',
        stock: '',
        theme:'',
      s1options: [
        { value: 'a', text: 'NYSE' },
        { value: 'b', text: 'NASDAQ' },
        { value: 'c', text: 'London Stock Exchange'},
        { value: 'd', text: 'Shanghai Stock Exchange' },
        { value: 'e', text: 'National Stock Exchange of India' },
        { value: 'f', text: 'Tokyo Stock Exchange' }
        ],
      s2options: [
        { value: 'a', text: 'AMZN' },
        { value: 'b', text: 'TSLA' },
        { value: 'c', text: 'WMT'},
        { value: 'd', text: 'AAPL' },
        { value: 'e', text: 'MSFT' },
        { value: 'f', text: 'GME' }
        ] ,
        footerOptions: [
        { text: '1', value: 'first' },
        { text: '2', value: 'second' },
        { text: '3', value: 'third' },
        { text: '4', value: 'fourth' }
        
      ]
    }
    
    },
    methods: {
    saveFrame(){
      var dataobj = {
        id: this.id,
        market: this.market,
        stock: this.stock,
        panels: this.panels,
        theme: 'placeholder',
      };

      console.log(dataobj)

      FrameDataService.create(dataobj)
      .then(response => {
          this.id = response.data._id;
          console.log(response.data._id);
        })
        .catch(e => {
          console.log(e);
        });
    },
    //Emits 'discard' event which is accessed with @discard in the parent component
    //After accessing that event with @discard, a method is called to perform a func.
    emitDiscard(){
      this.$emit('discard');
    }
  }
}
</script>