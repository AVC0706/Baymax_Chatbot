const mongoose = require("mongoose");

const connectDB = async () => {
  try {
      //Change Db with atlas url
    await mongoose.connect("mongodb://localhost:27017/Bay-max", {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });

    console.log("****MongoDB Connected****");
  } catch (e) {
    console.error(e.message);
  }
};

module.exports = connectDB;