module.exports = function($scope, $http,$rootScope,$location)
{
	
var init= function(){

$http.get('http://localhost:7000/mappingapi/getmapping').then(successCallback, errorCallback);
function successCallback(response)
{
  $scope.mappingdata=response.data;
  // console.log(response.data);
}
function errorCallback(error)
{
    // console.log(error);
}
};
init();


$rootScope.page = function(c,d,s,tn)
{
	
	$rootScope.city=c;
	$rootScope.date=d;
	$rootScope.time=s;
  $rootScope.tname=tn;

	$location.path("/seatpage");
}

$scope.movdates=[];
var showdate = function()
{
  for(var i=0; i < 4; i++)
  {
    var date = new Date();
    date.setDate(date.getDate() + i);
    $scope.movdates[i]=date;
  }
};
showdate();



};