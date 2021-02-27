<!-- v-model tracks whatever is written inside each of those inputs, 
and then when I perform a save function, all of those are saved to the data 
and passed on to the database through the routes-->
<template>
  <div class="submit-form">
      <div class="form-group">
        <label for="username-entry">Username</label>
        <input
          type="text"
          class="form-control"
          id="username-entry"
          v-model="user.name"
          name="username-entry"
          required
        />
      </div>

      <div class="form-group">
        <label for="password">Password</label>
        <input
          class="form-control"
          id="password"
          required
          v-model="user.password"
          name="password"
        />
      </div>

      <div class="form-group">
        <label for="stock-1">Stock to watch #1</label>
        <input
          class="form-control"
          id="stock-1"
          required
          v-model="user.stock_1"
          name="stock-1"
        />
      </div>

      <div class="form-group">
        <label for="stock-2">Stock to watch #2</label>
        <input
          class="form-control"
          id="stock-2"
          required
          v-model="user.stock_2"
          name="stock-2"
        />
      </div>

      <div class="form-group">
        <label for="stock-3">Stock to watch #3</label>
        <input
          class="form-control"
          id="stock-3"
          required
          v-model="user.stock_3"
          name="stock-3"
        />
      </div>

      <div class="form-group">
        <label for="pro-pic">URL to profile picture</label>
        <input
          class="form-control"
          id="pro-pic"
          required
          v-model="user.imageURL"
          name="pro-pic"
        />
      </div>


      <button @click="saveUser" class="btn btn-success">Submit</button>
  </div>
</template>

<script>
import UserDataService from "../services/UserDataService";

export default {
  name: "create-user",
  data() {
    return {   
        user: {
        id: null,
        name: "",
        password: "",
        stock_1: "",
        stock_2: "",
        stock_3: "",
        imageURL: "",
      },
    };
  },
  methods: {
    saveUser() {
      var data = {
        id: null,
        name: this.user.name,
        password: this.user.password,
        stock_1: this.user.stock_1,
        stock_2: this.user.stock_2,
        stock_3: this.user.stock_3,
        imageURL: this.user.imageURL
      };

      UserDataService.create(data)
        .then(response => {
          this.user.id = response.data.id;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
  }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>