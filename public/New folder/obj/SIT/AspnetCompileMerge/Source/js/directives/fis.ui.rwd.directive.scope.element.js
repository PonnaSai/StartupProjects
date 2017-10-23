var fisUiRwdStarterKit = angular.module('fisUiRwdStarterKit');

fisUiRwdStarterKit.directive("fisUiRwdScopeElement", function () {
    "use strict";
    
    var directiveDefinitionObject = {
        restrict: "A",
        compile: function compile (tElement, tAttrs, transclude) {
            return {
                pre: function preLink (scope, iElement, iAttrs, controller) {
                    scope[iAttrs.fisUiRwdScopeElement] = iElement;
                }
            };
        }
    };
    return directiveDefinitionObject;
});
