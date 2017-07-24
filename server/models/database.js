var mongoose = require("mongoose");
var Schema =  mongoose.Schema;

var Exercise = new Schema({
  name: String,
  description: String,
  tags: Array,
  student: String
});

module.exports = mongoose.model("exercise", Exercise);

mongoose.connect("mongodb://localhost/exercise");
