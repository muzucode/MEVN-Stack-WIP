//Define model schema
module.exports = mongoose => {
    const Frame = mongoose.model(
      "frame",
      mongoose.Schema(
        {
          division: String,
          team: String,
          view: String,
          panels: Array,
          theme: String
        },
        { timestamps: true }
      )
    );
  
    return Frame;
  };