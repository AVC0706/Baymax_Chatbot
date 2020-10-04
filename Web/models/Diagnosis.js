const mongoose = require('mongoose');

const diagosisSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
  },
  diagnosis: {
    type: Number,
  },
});

module.exports = mongoose.model('diagnosis', diagosisSchema);
