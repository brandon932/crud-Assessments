var mongoose = require("mongoose");
var Schema =  mongoose.Schema;

var Exercise = new Schema({
  name: String,
  description: String,
  tags: [String]
});

mongoose.model("exercise", Exercise);
mongoose.connect("mongodb://localhost/exercise");
