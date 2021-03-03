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
</div>
</template>

<script>
export default {
  name: "finance-content",
  data() {
    return{
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
        ] 
    }
    
    }
}
</script>