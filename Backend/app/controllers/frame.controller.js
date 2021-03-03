const db = require("../models");
const Frame = db.frames;

// Create and Save a new User
exports.create = (req, res) => {
    // Validate request
    if (!req.body.division) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
    // Create a User
    const frame = new Frame({
      division: req.body.division,
      team: req.body.team,
      view: req.body.view,
      panels: req.body.panels,
      theme: req.body.theme
    });

    console.log(frame)
    
    // Save User in the database
    frame
      .save(frame)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the User."
        });
      });
  };