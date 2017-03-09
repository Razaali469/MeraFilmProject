module.exports = function($scope, $http,$rootScope,$location)
{
	//  $scope.movieData="";
 //$rootScope.data="";


var init= function(){

$http.get('/mappingapi/getmapping').then(successCallback, errorCallback);
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



var fn1 = function(){

$http.get('http://localhost:7000/movieapi/getmovie').then(successCallback, errorCallback);
function successCallback(response)
{
  $scope.moviedetails=response.data;
  // console.log(response.data);
}
function errorCallback(error)
{
    // console.log(error);
}
};
fn1();



var fn2 = function(){

$http.get('http://localhost:7000/theaterapi/gettheater').then(successCallback, errorCallback);
function successCallback(response)
{
  $scope.theaterdetails=response.data;
   //console.log(response.data);
}
function errorCallback(error)
{
   // console.log(error);
}

};
fn2();


$scope.addmapping = function()
{
	$scope.mapping.Date=$('#datepicker').val();

  $http.post('/mappingapi/addmapping',$scope.mapping).then(successCallback, errorCallback);
  function successCallback(response)
  {
  init();
  


 

$scope.mappingdata='';
  location.reload();
  init();
    alert('saved');
}
function errorCallback(error)
{
    console.log(error);
}
location.reload();

};


$scope.deletemapping = function(mapping){
 window.location.reload();

  var x=confirm("Are you sure you want to delete ?");
  if(x){
    $http.delete('/mappingapi/deletemapping/'+mapping._id).success(function (response) {
});
} 
  	init();
  	alert('removed');
};



$scope.updatestatus= function()
{
var val ='true';
	$http.put('/movieapi/updatemovie/'+$scope.mapping.Title+'/'+val).then(successCallback, errorCallback);
	{
		alert(val);
		function successCallback(response)
 		 {console.log(response);}
		function errorCallback(error)
		{console.log(error);}
	}
};
};