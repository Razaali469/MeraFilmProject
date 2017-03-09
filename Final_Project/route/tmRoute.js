var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));

// mongoose.connect('mongodb://localhost:27017/crud');
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function(){
//   console.log("Connected to DB");
// });

var mappingschema = mongoose.Schema({
                    Date:String,
                    Title:String,
                    theatername:String,
                    theatercity:String,
                    Runtime:String,
                    Director:String,
                    Poster: String,
                    Time:String
});

var Mapping = mongoose.model('Mapping',mappingschema, 'mapping');

router.post('/addmapping', function (req, res) {
  var mapping = new Mapping({
    Date: req.body.Date,      
    Title: req.body.Title,      
    theatername:req.body.theatername,
    theatercity:req.body.theatercity,
    Director:req.body.Director,
    Runtime:req.body.Runtime,
    Poster:req.body.Poster,
    Time:req.body.Time
  });
  mapping.save(function(err,docs){
    console.log('Maping Saved Successfully');
  });
});

router.delete('/deletemapping/:id',function(req, res){
  Mapping.remove({_id:req.params.id},function(err, docs){
    console.log('Maping Removed Successfully');
  });
});

router.get('/getmapping', function (req, res) {
    Mapping.find({}, function (err, docs) {
    res.json(docs);
    });
});

module.exports = router;
