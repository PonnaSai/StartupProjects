var fisUiRwdStarterKit = angular.module('fisUiRwdStarterKit');

fisUiRwdStarterKit.directive('fisUiRwdDroppable', function () {
    "use strict";
    
    return {
        scope: {
            drop: '&',
            bin: '='
        },
        link: function (scope, element) {
            if (navigator.userAgent.toLowerCase().indexOf('firefox') < 0) {
                var el = element[0];
                var bg = el.style.background;
                
                el.addEventListener('dragover', function (e) {
                    e.dataTransfer.dropEffect = 'move';
                    if (e.preventDefault) {
                        e.preventDefault();
                    }
                    // this.classList.add('over');
                    this.style.background = "lightblue";
                    return false;
                }, false);
                
                el.addEventListener('dragenter', function (e) {
                    // this.classList.add('over');
                    this.style.background = "lightblue";
                    return false;
                }, false);
                
                el.addEventListener('dragleave', function (e) {
                    this.classList.remove('over');
                    this.style.background = bg;
                    return false;
                }, false);
                
                el.addEventListener('drop', function (e) {
                    if (e.stopPropagation) {
                        e.stopPropagation();
                    }
                    // this.classList.remove('over');
                    this.style.background = bg;
                    var binId = this.id;
                    var item = document.getElementById(e.dataTransfer.getData('Text'));
                    // this.appendChild(item);
                    
                    scope.$apply(function (scope) {
                        var fn = scope.drop();
                        if ('undefined' !== typeof fn) {
                            fn(item.id.substring(2), binId.substring(2));
                        }
                    });
                    return false;
                }, false);
            }
        }
    };
});
