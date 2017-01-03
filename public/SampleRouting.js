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
    }
});




