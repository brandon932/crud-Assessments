var database = require("mongoose");



var Exercise = new Schema({
  name: String,
  description: String,
  tags: [String]
});
