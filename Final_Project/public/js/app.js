'use strict'

var angular=require('angular');
require('angular-route');

var app=angular.module('MyMovie', ['ngRoute','angular.filter']);
require('./controller');
require('./service');

app.config(function($routeProvider,$locationProvider)
{
  $locationProvider.hashPrefix('');
  $routeProvider.when('/',{
            templateUrl:'views/home.html',
            controller: 'HomeController',
            access:{restricted: false}
          })
          
          .when('/home',{
            templateUrl:'views/home.html',
            controller: 'HomeController'
            
          })
          .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'LoginController',
            access: { restricted: false }
          })
          .when('/logout', {
              controller: 'LogoutController',
              access: { restricted: true }
          })
          .when('/register', {
              templateUrl: 'views/register.html',
              controller: 'RegisterController',
              access: { restricted: false }
          })
            .when('/Rating',{
              templateUrl:'views/rating.html',
              controller: 'RatingController'
          })
          .when('/Theater',{
            templateUrl:'views/Theater.html',
            controller: 'TheaterController',
            
          })
          .when('/Movie',{
            templateUrl:'views/Movie.html',
            controller: 'movieController'
          })
          .when('/TMMaping',{
            templateUrl:'views/TMMaping.html',
            controller: 'TMController',
            
          })
          .when('/Moviedetails',{
            templateUrl:'views/Moviedetails.html',
            controller: 'MoviedetailsController'
          })
          .when('/seatpage',{
            templateUrl:'views/seatpage.html',

            controller: 'seatController'
          })
          .when('/payment',{
            templateUrl:'views/payment.html',
            controller: 'paymentController'
          })
          .when('/ticket',{
            templateUrl:'views/ticket.html',
            controller: 'ticketController'
          })
          .otherwise({
            redirectTo:'/',
          });
  });

app.run(function($rootScope, $location, $route, AuthService) {
    $rootScope.$on('$routeChangeStart',
        function(event, next, current) {
            AuthService.getUserStatus()
                .then(function() {
                    if (next.access.restricted && !AuthService.isLoggedIn()) {
                        $location.path('/login');
                        $route.reload();
                    }
                });
        });
});