<template>
  <div>
    <div class="section">
        <h2 id="section-title">Division to watch: <strong>{{division}}</strong></h2>
        <b-container fluid class="bv-example-row">
          <b-row>
            <div>
              <b-form-select 
              :options="s1options"
              v-model="division"
              ></b-form-select>
            </div>
          </b-row>
        </b-container>
    </div>


    <div class="section">
        <h2 id="section-title">Team to watch: <strong>{{team}}</strong></h2>
        <b-container fluid class="bv-example-row">
          <b-row>
            <div>
              <b-form-select 
              :options="s2options" 
              v-model="team"
              ></b-form-select>
            </div>
          </b-row>
        </b-container>
    </div>


    <div class="section">
      <h2 id="section-title">Choose view: <strong>{{view}}</strong></h2>
      <b-form-group class="leftalign">
        <b-form-radio-group 
        :options="s3options"  
        v-model="view"
        name="radio-inline">

        </b-form-radio-group>
      </b-form-group>
    </div>


    <div class="section" id="footer-s1">
      <h2 id="section-title">Add to panel(s):</h2>
      <b-form-group class="leftalign">
        <b-form-checkbox-group id="checkbox" :options="s4options" v-model="panels">
        </b-form-checkbox-group>
      </b-form-group>
    </div>
    <div class="section" id="footer-s2">
      <b-button-group id="btn-grp">
          <b-button id="btn-grp-btn" variant="warning">Draft</b-button>
          <b-button @click="saveFrame" id="btn-grp-btn" variant="success">Add</b-button>
          <b-button id="btn-grp-btn" variant="danger">Discard</b-button>
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
  name: "baseball-content",
  data() {
    return{
      id: null,
      dataobj: {},
      division: '',
      team: '',
      view: '',
      panels: [],
      s1options: [
        { value: 'NL East',     text: 'NL East' },
        { value: 'NL West',     text: 'NL West' },
        { value: 'NL Central',  text: 'NL Central' },
        { value: 'AL East',     text: 'AL East'},
        { value: 'AL West',     text: 'AL West'},
        { value: 'AL Central',  text: 'AL Central'}
      ],
      s2options: [
        { value: 'Phillies',  text: 'Phillies' },
        { value: 'Yankees',   text: 'Yankees' },
        { value: 'Red Sox',   text: 'Red Sox'},
        { value: 'Cubs',      text: 'Cubs' },
        { value: 'Athletics', text: 'Athletics' },
        { value: 'Mariners' , text: 'Mariners' }
      ],
      s3options: [
        { text: 'Scores', value: 'Scores' },
        { text: 'News', value: 'News' },
        { text: 'Odds', value: 'Odds' }
      ],
      s4options: [
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
        division: this.division,
        team: this.team,
        view: this.view,
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
    }
  }
}
</script>

