<template>
  <b-navbar toggleable="lg" type="light" variant="light" style="box-shadow: 0 4px 4px -2px gray;">
    <b-navbar-brand>{{title}}</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item-dropdown v-for="item in tabs.dropdowns" :text="item.title" :key="item.id" >
            <b-dropdown-item 
              v-for="option in item.options" 
              :key="option.id"
              @click="option.ev(option.name)"
            >
              {{option.name}}
            </b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item 
          v-for="item in tabs.static" 
          :key="item.id"
        >
          {{item.title}}
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>


</template>

<script>
export default {
  name: "sub-navbar",
  data() {
    return{
      elH: '100%',
      heightInput:'',
      halvesHeight: '40vh'
    }
  },
  props: ['tabs','title']
}
</script>