var app =
   angular.module('bTransfer', ['fisUiRwdStarterKit', 'ngRoute', 'ui.router', 'smart-table',
                                'tmh.dynamicLocale', 'ngMessages', 'ui.grid', 'ui.grid.resizeColumns',
                                'angular-loading-bar', 'ngAnimate']);
 

app.config(['$locationProvider', function ($locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false,
    });
}]);

app.run(function ($rootScope, dataService, appValues) {
    $rootScope.myFooter = "© 2015 - 2016 Fidelity National Information Services, Inc. and its subsidiaries. All rights reserved. - Ver " + appValues.ver;

    $rootScope.bannerData = {
        "fi_show_image": "true",
        "product_name": "Balance Transfer - " + appValues.env,
        "product_name_suffix1": "Name",
        "show_user_dropdown": "true",
    }

    $rootScope.userInfo = {
        "firstName": "",
        "lastName": "",
        "lastLogin": "",
        "profileImg": ""
    }

    dataService.getUser()
        .then(function (response) {
            if (!response.error) {
                $rootScope.userInfo.firstName = response.userId;
                $rootScope.userInfo.lastLogin = response.lastLogin;
            }
        });
});