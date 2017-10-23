var fisUiRwdStarterKit = angular.module('fisUiRwdStarterKit');

/* Draggable directive */

fisUiRwdStarterKit.directive('fisUiRwdDraggable', function () {
    "use strict";
    
    return function (scope, element) {
        var ff = navigator.userAgent.toLowerCase().indexOf('firefox');
        if (ff < 0) {
            var el = element[0];
            
            el.draggable = true;
            
            el.addEventListener('dragstart', function (e) {
                e.dataTransfer.effectAllowed = 'move';
                e.dataTransfer.setData('Text', this.id);
                this.classList.add('drag');
                return false;
            }, false);
            
            el.addEventListener('dragend', function (e) {
                this.classList.remove('drag');
                return false;
            }, false);
        }
    };
});
