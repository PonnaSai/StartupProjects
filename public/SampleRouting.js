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



