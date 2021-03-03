const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
//Configures the Access-Control-Allow-Origin CORS header
//Allow requests to this API from the front-end server, 8100
//This is equal to the front end server.
var corsOptions = {
  origin: "http://localhost:8100"
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


//Database object containing our mongoose models
const db = require("./app/models");

//Access db object's mongoose instance listed in the 'mongoose' attribute
//Utilize the db's url
db.mongoose
  .connect(db.url, {
    //Set these due to deprecation of old services
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Sean's application." });
  console.log('Site has been accessed!');
});

//Sets routes for tutorial
require("./app/routes/frame.routes")(app);

// set port, listen for requests
// This links up with HTTP-common on frontend to form a backend server listener
const PORT = process.env.PORT || 8050;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});