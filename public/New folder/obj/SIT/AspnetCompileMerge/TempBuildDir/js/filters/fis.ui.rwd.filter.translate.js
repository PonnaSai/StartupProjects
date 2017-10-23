(function () {
    "use strict";
    
    // this file should be used by application if application is not using angular-translate library
    var fisUiRwdStarterKit = angular.module("fisUiRwdStarterKit");
    
    var dummyfilter = 'dummyfilter';
    
    try {
        var tr = angular.module('pascalprecht.translate');
    }
    catch (err) {
        dummyfilter = 'translate';
    }
    
    // if 'pascalprecht.translate' is not loaded we will create 'translate' filter otherwise we will create
    // 'dummyfilter'
    fisUiRwdStarterKit.filter(dummyfilter, function () {
        return function (input) {
            return input;
        };
    });
    
})();

// We cannot use code below because translate is defined in different module
/*
 * fisUiRwdStarterKit.config(function($injector){ if($injector.has('translate')){ console.log('Yep, we got the
 * filter!'); } else { console.log('Create filter'); } });
 */
