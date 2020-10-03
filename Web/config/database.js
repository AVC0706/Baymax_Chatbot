const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected...');
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;

// const connectDB = async () => {
//   try {
//       //Change Db with atlas url
//     await mongoose.connect("mongodb://localhost:27017/Bay-max", {
//       useNewUrlParser: true,
//       useCreateIndex: true,
//       useFindAndModify: false,
//       useUnifiedTopology: true,
//     });

//     console.log("****MongoDB Connected****");
//   } catch (e) {
//     console.error(e.message);
//   }
// };

// module.exports = connectDB;
