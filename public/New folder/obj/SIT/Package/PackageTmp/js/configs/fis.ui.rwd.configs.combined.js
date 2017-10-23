var fisUiRwdStarterKit = angular.module('fisUiRwdStarterKit');

fisUiRwdStarterKit.config(['$provide', function ($provide) {
    "use strict";
    
    $provide.decorator('uibAccordionDirective', function ($delegate) {
        var directive = $delegate[0];
        directive.templateUrl = "partials/fis.ui.rwd.accordion.ui.bootstrap.template.html";
        return $delegate;
    });
    
    $provide.decorator('uibAccordionGroupDirective', function ($delegate) {
        var directive = $delegate[0];
        directive.templateUrl = "partials/fis.ui.rwd.accordion.group.ui.bootstrap.template.html";
        return $delegate;
    });
    
    $provide.decorator('uibDatepickerDirective', function ($delegate) {
        var directive = $delegate[0];
        directive.templateUrl = "partials/fis.ui.rwd.datepicker.ui.bootstrap.template.html";
        return $delegate;
    });
    
    $provide.decorator('uibDaypickerDirective', function ($delegate) {
        var directive = $delegate[0];
        directive.templateUrl = "partials/fis.ui.rwd.datepicker.day.ui.bootstrap.template.html";
        return $delegate;
    });
    
    $provide.decorator('uibMonthpickerDirective', function ($delegate) {
        var directive = $delegate[0];
        directive.templateUrl = "partials/fis.ui.rwd.datepicker.month.ui.bootstrap.template.html";
        return $delegate;
    });
    
    $provide.decorator('uibYearpickerDirective', function ($delegate) {
        var directive = $delegate[0];
        directive.templateUrl = "partials/fis.ui.rwd.datepicker.year.ui.bootstrap.template.html";
        return $delegate;
    });
    
    $provide.decorator('uibDatepickerPopupWrapDirective', function ($delegate) {
        var directive = $delegate[0];
        directive.templateUrl = "partials/fis.ui.rwd.datepicker.popup.ui.bootstrap.template.html";
        return $delegate;
    });
    
}]);
