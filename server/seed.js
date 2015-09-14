var mongoose = require('mongoose');
var Exercise = mongoose.model("exercise");


var exerciseSeed= [
  {
    name: "crud assement",
    description: "Crud",
    tags: ["work", "work", "morWork"]
  },
  {
    name: "Express assement",
    description: "express",
    tags: ["work", "express", "morWork"]
  },
  {
    name: "node assement",
    description: "node",
    tags: ["busty work", "work", "morWork", "yayTags"]
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
