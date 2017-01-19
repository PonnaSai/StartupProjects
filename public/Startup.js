var app = angular.module("MyModule", ['ngRoute'])
app.config(function ($routeProvider, $locationProvider)
{
    $routeProvider
    .when("/first", {
        templateUrl: "ChildTemplates/HomePage.html",
        controller: "firstCntrl"
    })
    .when("/second", {
        templateUrl: "ChildTemplates/Second.html",
        controller: "secondCntrl"
    })
    .when("/emplist", {
        templateUrl: "ChildTemplates/emplist.html",
        controller: "httpcntrl"
    })
        .when("/emplist/:id", {
            templateUrl: "ChildTemplates/EmployeeList.html",
            controller: "employeeCntrl"
        })
    .otherwise({
        redirectTo: "/first"
    })
    $locationProvider.html5Mode(true);
});
app.controller("firstCntrl", function ($scope) {
    $scope.message = "Hello I am Home Page";
});
///sample control
app.controller("secondCntrl", function ($scope) {
    $scope.second = "Hello I am second Page";
});
app.controller("Mycontroller", function ($scope) {
    var employee = {
        FirstName: "Sai",
        LastName: "Prakash",
        Role : "Software Engineer"
    }

    $scope.employee = employee;
});
/// Repeater Example
app.controller("RepeaterCntrlExp", function ($scope) {
    var employeeDetails = [
        {FirstName: "Sai", LastName: "Ponna", Gender: "Male", Salary: "5000" },
        {FirstName: "Prakash", LastName: "Gnana", Gender: "Male", Salary: "6000" },
        {FirstName: "Suman", LastName : "Gummalla", Gender :"Male" , Salary : "7000" },
        {FirstName: "Venkat", LastName : "Bop", Gender :"Male" , Salary : "8000" },
        {FirstName: "Ramesh", LastName : "Tallada", Gender :"Male" , Salary : "9000" }
    ];

    $scope.employeeDetails = employeeDetails;
});
///Nested Repeater Example
app.controller("NestedRepeaterExp", function ($scope) {
    var CountryList = [
    {
        CountryName: "India",
        Cities: [
           { Name: "Hyderabad" },
            {Name: "Banglore"},
           { Name: "Noida" }
        ]
    },
       {
           CountryName: "USA",
           Cities: [
              { Name: "Florida" },
               { Name: "NewJeresy" },
              { Name: "Virginia" }
           ]

       },
       {
           CountryName: "Russia",
           Cities: [
              { Name: "SaintPetersburg" },
               { Name: "Moscow" },
              { Name: "Morroco" }
           ]

       }
    ];
    $scope.CountryList = CountryList;
});
/// Handling Events
app.controller("HandlingEvent", function ($scope) {
    var technologies = [
    { Name: "C#", Likes: 0, Dislikes: 0 },
    { Name: "Asp.net", Likes: 0, Dislikes: 0 },
    { Name: "VB.net", Likes: 0, Dislikes: 0 },
    { Name: "MVC", Likes: 0, Dislikes: 0 },
    { Name: "Angular", Likes: 0, Dislikes: 0 }
    ];

    $scope.techm = technologies;
    $scope.IncrementLikes = function (technology) {
        technology.Likes++;
    }

    $scope.IncrementDisLikes = function (technology) {
        technology.Dislikes++;
    }
});
/// Filter Examples
app.controller("FilterExample", function ($scope) {
    var Empfilters = [
    { name: "Sai", DateofBirth: new Date("August, 12 , 1983"), Gender: "Male", Salary: 57000.789 },
    { name: "Prakash", DateofBirth: new Date("September, 12 , 1983"), Gender: "Male", Salary: 67000.078},
    { name: "Suman", DateofBirth: new Date("October, 15 , 1978"), Gender: "Male", Salary: 77000},
    { name: "Ramesh", DateofBirth: new Date("Nov, 1 , 1973"), Gender: "Male", Salary: 87000 },
    { name: "Venkat", DateofBirth: new Date("December, 2 , 1980"), Gender: "Male", Salary: 27000.7 },
    ];

    $scope.Filter = Empfilters;
    $scope.rowlimit = 3;
});
///Sorting example
app.controller("Sortingcntrl", function ($scope) {
    var employee = [
        { name: "Sai", DateofBirth: "09/12/1983", Gender: "Male", Salary: "4000" },
        { name: "ASai1", DateofBirth: "09/12/1984", Gender: "Male", Salary: "5000" },
        { name: "BSai2", DateofBirth: "09/12/1985", Gender: "Male", Salary: "6000" },
        { name: "CSai3", DateofBirth: "09/12/1986", Gender: "Male", Salary: "7000" },
        { name: "KSai4", DateofBirth: "09/12/1987", Gender: "Male", Salary: "8000" },
        { name: "MSai5", DateofBirth: "09/12/1988", Gender: "Male", Salary: "9000" }
    ];
    $scope.emp = employee;
    $scope.sortColumn = "name";
});

/// bi-directional Sorting by clicking on the table header
app.controller("twoSortingcntrl", function ($scope) {
    
    var employee = [
        { name: "Sai", DateofBirth: "09/12/1983", Gender: "Male", Salary: "4000" },
        { name: "ASai1", DateofBirth: "09/12/1984", Gender: "Male", Salary: "5000" },
        { name: "BSai2", DateofBirth: "09/12/1985", Gender: "Male", Salary: "6000" },
        { name: "CSai3", DateofBirth: "09/12/1986", Gender: "Male", Salary: "7000" },
        { name: "KSai4", DateofBirth: "09/12/1987", Gender: "Male", Salary: "8000" },
        { name: "MSai5", DateofBirth: "09/12/1988", Gender: "Male", Salary: "9000" }
    ];
    $scope.emp = employee;
    $scope.sortColumn = "name";
    $scope.reverseSort = false;

    $scope.sortData = function (column) {
        $scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort : false
        $scope.sortColumn = column;
    }
    $scope.getSort = function (column) {
        if ($scope.sortColumn == column) {
            return $scope.reverseSort ? 'arrow-up' : 'arrow-down'
        }
        return '';
    }
    
});

/// Searching the records based on the entered value in the Text box
app.controller("Searchcntrl", function ($scope) {
    //$scope.message = "hheee";
    var search = [
    {Sno: "1",EmpName: "Saiprakash", Gender: "Male", Salary: "5000", City:"Hyderabad"},
    { Sno: "2", EmpName: "Ragu", Gender: "Male", Salary: "4000", City: "Secundrabad" },
    { Sno: "3", EmpName: "Ram", Gender: "Male", Salary: "3000", City: "Chennai" },
    { Sno: "4", EmpName: "Rosy", Gender: "FeMale", Salary: "2000", City: "Hyderabad" },
    { Sno: "5", EmpName: "Jolie", Gender: "FeMale", Salary: "1000", City: "Blnglore" },
    { Sno: "6", EmpName: "Henry", Gender: "Male", Salary: "5000", City: "Pune" }
    ];

    $scope.search1 = search;
    /// $scope.column = "Sno";
});
/// working with the web service 
app.controller("httpcntrl", function ($scope, $http) {

    $scope.ServiceMsg = "Displaying data from Webservice";
    $http.get('EmpService.asmx/GetAllEmployees')
        .then(function myresponse(response) {
        $scope.welcome = response.data;
    }, function myerror(response) {
        $scope.welcome = response.data;
        });
});
/// Routing using the Paramaters 
app.controller("employeeCntrl", function ($scope, $http, $routeParams) {

    $scope.ServiceMsg = "Displaying data from Webservice";
    $http({
        url: "EmpService.asmx/GetEmployee",
        params : {id : $routeParams.id},
        method :"GET"
    })
        .then(function myresponse(response) {
            $scope.emp = response.data;
        }, function myerror(response) {
            $scope.emp = response.data;
        });
});

