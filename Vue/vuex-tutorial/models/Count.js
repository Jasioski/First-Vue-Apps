const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const CountSchema = new Schema({
  value: Number,
});

const Count = mongoose.model('Count', CountSchema)
module.exports = Count;