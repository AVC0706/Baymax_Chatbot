const mongoose = require('mongoose');

const symptomSchema = mongoose.Schema({
  symptoms: [{}],
});

module.exports = mongoose.model('symptom', symptomSchema);
