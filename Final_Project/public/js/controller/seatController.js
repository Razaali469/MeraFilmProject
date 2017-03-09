module.exports = function($scope, $http,$rootScope,$location)
{

var hello123 = function()
{
  var ti=  $rootScope.movie;
  var ci=  $rootScope.city;
  var tn = $rootScope.tname;
  var ts=  $rootScope.time;

  $http.get('/bookingapi/blocking/'+ti+'/'+ci+'/'+tn+'/'+ts).then(successCallback, errorCallback);
  function successCallback(response)
  {
     // $scope.bookingData=response.data;
     // $scope.bookinglength=response.data.length;
     //  $scope.bookinglength1=response.data[2].seat_No.length;
     //    $scope.bookinglength2=response.data[2].seat_No[2];
   for(var i=0;i<response.data.length;i++)
    {
      for(var j=0;j<response.data[i].seat_No.length;j++)
      {
        //console.log(response[i].SeatNo);
        //console.log(response[i].SeatNo.length);
        $('#'+response.data[i].seat_No[j]).attr('src','images/G_chair.png');

      }
    }

  }
function errorCallback(error)
{
}
}; 
hello123();


	$(function(){
  var count=0;
  var sn="";
  var seats=[];
  var amount=0;

  $(".image").on('click', function() {

    var id = $(this).attr('id');

      var path = $('#'+id).attr('src');

      var x=path.substring(path.lastIndexOf('W'),path.length);

      var y=path.substring(path.lastIndexOf('O'),path.length);

    if (x=="W_chair.png") {

      $('#'+id).attr('src','images/O_chair.png');
      count++;
      seats.push(id);

      $rootScope.seat_No=JSON.stringify(seats);
      document.getElementById('seatNo').innerHTML=seats; 
}
    else if(y=="O_chair.png") 
    {
      $('#'+id).attr('src','images/W_chair.png');

           if(!count==0){
           var ind = seats.indexOf(id);
           seats.splice(ind,1);
           count--;
    }
  }
    amount=count*300;
    document.getElementById("seatNo").innerHTML = seats;
    document.getElementById("coun1").innerHTML = amount;
    document.getElementById("coun").innerHTML = count;
  });
});


$rootScope.pay = function()
{
  
  $rootScope.seatNo=  document.getElementById("seatNo").innerHTML;
  $rootScope.amount=document.getElementById("coun1").innerHTML; 
  $rootScope.count121=document.getElementById("coun").innerHTML;
  
  $location.path("/payment");
};

};