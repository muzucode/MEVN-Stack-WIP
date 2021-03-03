module.exports = app => {
    const frames = require("../controllers/frame.controller.js");
  
    var router = require("express").Router();
  
    // Create a new user
    router.post("/create", frames.create);

    app.use('/api/frames', router);

  };