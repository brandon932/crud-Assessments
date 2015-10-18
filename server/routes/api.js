var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");
var Exercise = mongoose.model("exercise");

router.get('/exercises', function(req, res, next) {
  Exercise.find(function(err, exercises){
    res.json(exercises);
  });
});

router.get('/exercises/:id', function(req, res, next){
  Exercise.findById(req.params.id, function(err, exercise){
    res.json(exercise);
  });
});

router.post('/exercises', function(req, res, next){
  console.log(req.body);
  console.log(req.body.tags);
  new Exercise(req.body)
  .save(function(err, exercise){
    res.json("success");
  });
});

router.put('/exercises/:id', function(req, res, next){
  var update = req.body;
  var options = {"new": true};
  Exercise.findByIdAndUpdate(req.params.id, update, options, function(err, exercise){
    res.json(exercise);
  });
});

router.delete('/exercises/:id', function(req, res, next){
  Exercise.findByIdAndRemove(req.params.id, function(err, exercise){
    res.json("success");
  });
});


module.exports = router;
