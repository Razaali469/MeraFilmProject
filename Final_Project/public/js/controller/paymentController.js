module.exports = function($scope, $http,$rootScope,$location)
{
	function nullname()
	{if(myform.fname.value.length==0)
		{
		document.getElementById("errfn").innerHTML="Please fill name. ";
		}
	}

	

$scope.addbooking1=function()
{


	$rootScope.name=document.getElementById("NameOfCustomer").value;
	$rootScope.email=document.getElementById("IdOfCustomer").value; 
 	$rootScope.no=document.getElementById("NumberOfCustomer").value;

	var a1=$rootScope.movie;
	var a2 =$rootScope.name;
	var a3 =$rootScope.email;
	var a4 =$rootScope.no;
	 var a5=$rootScope.city;
	 var a6=$rootScope.tname;
	 var a7=$rootScope.time;
	 var a8=$rootScope.date;

	 var a9=$rootScope.count121;
	 var a10=$rootScope.amount;
	var a11=$rootScope.seat_No;


$http.post('/bookingapi/addbooking/'+a1+"/"+a2+"/"+a3+"/"+a4+"/"+a5+"/"+a6+"/"+a7+"/"+a8+"/"+a9+"/"+a10+"/"+a11).then(successCallback, errorCallback);
  function successCallback(response)
  {

  }
function errorCallback(error)
{
    console.log(error); 
}

 $location.path("/ticket");

};

};