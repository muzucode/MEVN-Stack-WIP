const axios = require('axios');

//Exports a new axios instance with:
//BaseURL "http://localhost:8080/api"
//JSON request format header
export default axios.create({
    //The URL used and prepended to make server side requests
    //Within each set of routes on backend, there is app.use '/api/XYZ'
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-type": "application/json"
  }
});