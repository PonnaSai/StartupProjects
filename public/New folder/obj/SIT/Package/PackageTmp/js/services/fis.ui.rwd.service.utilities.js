var fisUiRwdStarterKit = angular.module('fisUiRwdStarterKit');

/*
 * Utility function to find a parent element. Arguments: source: jqLite source element targetClass: a class
 * that the target element contains
 * 
 * Returns: targetElement: jqLite element
 */
fisUiRwdStarterKit.factory('FisRWdUtilities', [
    '$rootScope',
    '$window',
    '$timeout',
    function ($rootScope, $window, $timeout) {
        "use strict";
        
        return {
            findFirstParentElementByClass: function (source, targetClass) {
                // set target element to the source element's parent
                var targetElement = source.parent();
                var continueLoop = true;
                
                do {
                    if (!targetElement.length) {
                        targetElement = null;
                        continueLoop = false;
                    } else if (targetElement && targetElement.hasClass(targetClass)) {
                        continueLoop = false;
                    } else {
                        targetElement = targetElement.parent();
                    }
                } while (continueLoop);
                
                return targetElement;
            }/*,
            toggleBrand: function () {
                if ($rootScope.cssToLoad == "css/fis.ui.rwd.combined-min.css") {
                    $rootScope.cssToLoad = 'css/ref.impl.combined.css';
                } else {
                    $rootScope.cssToLoad = 'css/fis.ui.rwd.combined-min.css';
                }
                $timeout(function () {
                    angular.element($window).triggerHandler('resize');
                }, 100);
            }	*/
        };
    }]);
