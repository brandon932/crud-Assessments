var mongoose = require('mongoose');
var Exercise = mongoose.model("exercise");


var exerciseSeed= [
  {
    name: "crud assement",
    description: "Crud",
    tags: ["work", "work", "morWork"],
    student : "Bill"

  },
  {
    name: "Express assement",
    description: "express",
    tags: ["work", "express", "morWork"],
    student : "Cindy"
  },
  {
    name: "node assement",
    description: "node",
    tags: ["busy work", "work", "morWork", "yayTags"],
    student : "Lisa"
  }
];
function databaseSeed(){
  Exercise.find({}, function(err, documents){
    if (!err && documents.length === 0){
      for (var i = 0; i < exerciseSeed.length; i++) {
        var newExercise = new Exercise(exerciseSeed[i]);
        newExercise.save(function(err, success){
          if(!err){
            console.log("database seeded");
          }
        })
      }
    }
  });
}
module.exports= databaseSeed;
