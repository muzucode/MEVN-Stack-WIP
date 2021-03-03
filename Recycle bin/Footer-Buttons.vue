<template>
    <div>
        <div class="section">
            <h2 id="section-title">Add to panel(s):</h2>
            <b-form-group class="leftalign">
                <b-form-checkbox-group id="checkbox" :options="cboptions">

                </b-form-checkbox-group>
            </b-form-group>
        </div>
        <div class="section">
        <b-button-group id="btn-grp">
            <b-button id="btn-grp-btn" variant="warning">Draft</b-button>
            <b-button @click="addFrame" id="btn-grp-btn" variant="success">Add</b-button>
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

</style>



<script>
export default {
  name: "footer-buttons",
  data() {
    return{
        cboptions: [
            { text: '1', value: 'first' },
            { text: '2', value: 'second' },
            { text: '3', value: 'third' },
            { text: '4', value: 'fourth' }
        ]
      
    }
    },
    methods:{
        addFrame: function(){
            console.log()
        }
    }
}
</script>