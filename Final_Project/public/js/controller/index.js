'use strict'

var app = require('angular').module('MyMovie');

app.controller('HomeController',require('./homeController'));

app.controller('TheaterController',require('./theaterController'));

app.controller('movieController',require('./movieController'));

app.controller('TMController',require('./tmController'));

app.controller('MoviedetailsController',require('./moviedetailsController'));

app.controller('seatController',require('./seatController'));

app.controller('paymentController',require('./paymentController'));

app.controller('ticketController',require('./ticketController'));

app.controller('RatingController',require('./ratingController'));

app.controller('LoginController', require('./loginController'));

app.controller('LogoutController', require('./logoutController'));

app.controller('RegisterController', require('./registerController'));