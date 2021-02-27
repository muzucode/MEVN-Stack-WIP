//Define model schema
module.exports = mongoose => {
    const User = mongoose.model(
      "user",
      mongoose.Schema(
        {
          name: String,
          password: String,
          stock_1: String,
          stock_2: String,
          stock_3: String,
          imageURL: String
        },
        { timestamps: true }
      )
    );
  
    return User;
  };