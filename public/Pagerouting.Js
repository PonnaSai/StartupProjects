var PageNav = angular.module("PageNavigation", ['ngRoute']);

PageNav.config(function($routeProvider, $locationProvider){
$routeProvider
        .when('/',{
            templateUrl:'Home.html',
            controller :'mainController'
        })
        .when('/about',{
            templateUrl:'about.html',
            controller :'aboutController'
        })
        .when('/contact',{
            templateUrl:'contact.html',
            controller :'contactController'
        });

       $locationProvider.html5Mode(true);
});

PageNav.controller('mainController', function($scope){
    $scope.Homemessage = "We are in Home Controller now";
});
PageNav.controller('aboutController', function($scope){
    $scope.aboutmessage = "We are in about Controller now";
});

PageNav.controller('contactController', function($scope){
    $scope.Contactemessage = "We are in Contact Controller now";
});

var LoginAuth = angular.module("AuthModule", []);
LoginAuth.controller('AuthCntrl', function($scope){
    $scope.message ="Testing Log";

});






angular.module('DemoApp', ['ngMessages']);

