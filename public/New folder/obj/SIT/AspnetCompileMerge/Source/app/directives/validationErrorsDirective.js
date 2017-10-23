(function () {
    var app = angular.module('bTransfer');

    app.directive('validationErrors', function () {
        return {
            restrict: 'E',
            scope: {
                errors: "=",
                messages: "=",
                warnings: "="
            },
            templateUrl : "app/templates/validationErrors.html"
        }
    });
})();