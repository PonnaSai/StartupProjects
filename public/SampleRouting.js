var app = angular.module("sampleModule",['ngRoute','ngMessages']);
app.config(function($routeProvider, $locationProvider)
{
   $routeProvider
   .when('/about',{
            templateUrl:'/about.html',
            controller :'aboutController'
        })

         $locationProvider.html5Mode(true);
});
app.controller("SampleControl",function($scope)
{
    $scope.clicked = function(){
        window.location="/about.html";
         $scope.message = "Hello I am About Page"
    }
   
});
app.controller("HttpController", function($scope,$http)
{
    $http.get("Data.txt")
    .then (function(response){
        $scope.Mymessage = response.data;

    });
});


app.controller("HttpCntrl1",function($scope,$http)
{
 $http({
        method : "GET",
        url : "Home.html"
    }).then(function mySucces(response) {
        $scope.myWelcome = response.data;
    }, function myError(response) {
        $scope.myWelcome = response.statusText;
    });
});
