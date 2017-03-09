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

var bookingSchema = mongoose.Schema({
 
  movie_name: String,
   cust_name: String,
   cust_email:String,
   cust_phno:String,
   th_city:String,
   th_name:String,
   m_time:String,
   m_date:String,
   s_count:String,
   total_amt:String,
   seat_No:Array
});

var Booking = mongoose.model('Booking',bookingSchema, 'booking');

router.post('/addbooking/:m/:n/:e/:p/:c/:t/:tt/:d/:sc/:ta/:sn', function (req, res) {
  var booking = new Booking({
      movie_name: req.params.m,      
      cust_name: req.params.n,
      cust_email: req.params.e,
      cust_phno: req.params.p,
      th_city:req.params.c,
      th_name:req.params.t,
      m_time:req.params.tt,
      m_date:req.params.d,
      s_count:req.params.sc,
      total_amt:req.params.ta,
      seat_No:JSON.parse(req.params.sn)
  });
  booking.save(function(err,docs){
    console.log('booking Saved Successfully');
  });
});


router.get('/blocking/:ti/:ci/:th/:ts', function (req, res) {

    Booking.find({
        movie_name:req.params.ti,
        th_city:req.params.ci,
        th_name:req.params.th,
        m_time:req.params.ts
      }, function (err, docs) {
         res.json(docs);

    });
});




module.exports = router;
