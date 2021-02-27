const dbConfig = require("../config/db.config.js");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;

db.users = require("./user.model.js")(mongoose)

//Export database object with our schemas and URL
module.exports = db;