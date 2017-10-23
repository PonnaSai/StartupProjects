(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("angular"));
	else if(typeof define === 'function' && define.amd)
		define(["angular"], factory);
	else if(typeof exports === 'object')
		exports["fisRWDFramework"] = factory(require("angular"));
	else
		root["fisRWDFramework"] = factory(root["angular"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_64__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _rwd = __webpack_require__(1);

	var _rwd2 = _interopRequireDefault(_rwd);

	exports.rwd = _rwd2["default"];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	//import angular from 'angular';
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	//import angularTranslate from 'angular-translate';
	//let angularTranslate = require('angular-translate');

	//import bootstrap from 'bootstrap';
	//let bootstrap = require('bootstrap');

	var _register = __webpack_require__(2);

	var _register2 = _interopRequireDefault(_register);

	var _banner = __webpack_require__(5);

	var _dialogs = __webpack_require__(8);

	var _footer = __webpack_require__(18);

	var _forms = __webpack_require__(21);

	var _mainSideNavigation = __webpack_require__(26);

	var _navigation = __webpack_require__(30);

	var _rdc = __webpack_require__(34);

	var _segmentControl = __webpack_require__(40);

	var _tables = __webpack_require__(42);

	var _tabs = __webpack_require__(51);

	var _workspace = __webpack_require__(55);

	var _sessionTimeout = __webpack_require__(57);

	var _userDropdownMenu = __webpack_require__(61);

	var angular = __webpack_require__(64);

	var moduleName = 'fisUiRwdStarterKit';
	//let rwd = angular.module(moduleName, [bootstrap, angularTranslate]);//'pascalprecht.translate'
	//let rwd = angular.module(moduleName);
	var rwd = angular.module(moduleName, ['ui.bootstrap', 'pascalprecht.translate']);
	(0, _register2['default'])(rwd).directive('fisUiRwdBanner', _banner.fisUiRwdBanner);
	(0, _register2['default'])(rwd).directive('fisRwdOpenDialogOnclick', _dialogs.fisRwdOpenDialogOnclick);
	(0, _register2['default'])(rwd).directive('fisRwdNonmodalDraggable', _dialogs.fisRwdNonmodalDraggable);
	(0, _register2['default'])(rwd).directive('fisRwdDialog', _dialogs.fisRwdDialog);
	(0, _register2['default'])(rwd).directive('fisRwdDialogHeader', _dialogs.fisRwdDialogHeader);
	(0, _register2['default'])(rwd).directive('fisRwdDialogBody', _dialogs.fisRwdDialogBody);
	(0, _register2['default'])(rwd).directive('fisRwdDialogFooter', _dialogs.fisRwdDialogFooter);
	(0, _register2['default'])(rwd).directive('fisUiRwdFooter', _footer.fisUiRwdFooter);
	(0, _register2['default'])(rwd).directive('fisRwdNotification', _forms.fisRwdNotification);
	(0, _register2['default'])(rwd).directive('fisUiRwdToggleswitch', _forms.fisUiRwdToggleswitch);
	(0, _register2['default'])(rwd).directive('fisUiRwdMainsidenavbar', _mainSideNavigation.fisUiRwdMainsidenavbar);
	(0, _register2['default'])(rwd).factory('MainSideNavData', _mainSideNavigation.MainSideNavData);
	(0, _register2['default'])(rwd).directive('fisUiRwdNavbar', _navigation.fisUiRwdNavbar);
	(0, _register2['default'])(rwd).factory('SideNavData', _navigation.SideNavData);
	(0, _register2['default'])(rwd).directive('fisUiRwdDocumentClick', _rdc.fisUiRwdDocumentClick);
	(0, _register2['default'])(rwd).directive('ngFileSelect', _rdc.ngFileSelect);
	(0, _register2['default'])(rwd).directive('fisUiRwdRdc', _rdc.fisUiRwdRdc);
	(0, _register2['default'])(rwd).directive('fisUiRwdSegmentControl', _segmentControl.fisUiRwdSegmentControl);
	(0, _register2['default'])(rwd).directive('fisUiRwdPaginationLocal', _tables.fisUiRwdPaginationLocal);
	(0, _register2['default'])(rwd).directive('stRatio', _tables.stRatio);
	(0, _register2['default'])(rwd).directive('fisUiRwdPaginationServer', _tables.fisUiRwdPaginationServer);
	(0, _register2['default'])(rwd).directive('fisUiRwdDropdownMultiselect', _tables.fisUiRwdDropdownMultiselect);
	(0, _register2['default'])(rwd).directive('fisUiRwdShowhideColumns', _tables.fisUiRwdShowhideColumns);
	(0, _register2['default'])(rwd).directive('fisUiRwdTabs', _tabs.fisUiRwdTabs);
	(0, _register2['default'])(rwd).service('TabsManager', _tabs.TabsManager);
	(0, _register2['default'])(rwd).directive('fisUiRwdWorkspaceResize', _workspace.fisUiRwdWorkspaceResize);
	(0, _register2['default'])(rwd).factory('FisRwdTimeoutService', _sessionTimeout.FisRwdTimeoutService);
	(0, _register2['default'])(rwd).directive('fisUiRwdTimeout', _sessionTimeout.fisUiRwdTimeout);
	(0, _register2['default'])(rwd).directive('fisUiRwdUserDropdownMenu', _userDropdownMenu.fisUiRwdUserDropdownMenu);

	exports['default'] = rwd;
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }

	var _register = __webpack_require__(3);

	exports['default'] = _interopRequire(_register);
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	var _bind = Function.prototype.bind;
	exports['default'] = register;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _lodashIsstring = __webpack_require__(4);

	var _lodashIsstring2 = _interopRequireDefault(_lodashIsstring);

	/**
	 * A helper class to simplify registering Angular components and provide a consistent syntax for doing so.
	 */

	function register(moduleRef) {

	    var app = (0, _lodashIsstring2['default'])(moduleRef) ? angular.module(moduleRef) : moduleRef;

	    return {
	        provider: provider,
	        factory: factory,
	        service: service,
	        value: app.value,
	        constant: app.constant,
	        decorator: app.decorator,
	        animation: app.animation,
	        filter: app.filter,
	        controller: controller,
	        directive: directive,
	        config: app.config,
	        run: app.run,
	        requires: app.requires,
	        name: app.name
	    };

	    function directive(name, constructorFn) {

	        constructorFn = _normalizeConstructor(constructorFn);

	        if (!constructorFn.prototype.compile) {
	            // create an empty compile function if none was defined.
	            constructorFn.prototype.compile = function () {};
	        }

	        var originalCompileFn = _cloneFunction(constructorFn.prototype.compile);

	        // Decorate the compile method to automatically return the link method (if it exists)
	        // and bind it to the context of the constructor (so `this` works correctly).
	        // This gets around the problem of a non-lexical "this" which occurs when the directive class itself
	        // returns `this.link` from within the compile function.
	        _override(constructorFn.prototype, 'compile', function () {
	            return function () {
	                originalCompileFn.apply(this, arguments);

	                if (constructorFn.prototype.link) {
	                    return constructorFn.prototype.link.bind(this);
	                }
	            };
	        });

	        var factoryArray = _createFactoryArray(constructorFn);

	        app.directive(name, factoryArray);
	        return this;
	    }

	    function controller(name, contructorFn) {
	        app.controller(name, contructorFn);
	        return this;
	    }

	    function service(name, contructorFn) {
	        app.service(name, contructorFn);
	        return this;
	    }

	    function provider(name, constructorFn) {
	        app.provider(name, constructorFn);
	        return this;
	    }

	    function factory(name, constructorFn) {
	        constructorFn = _normalizeConstructor(constructorFn);
	        var factoryArray = _createFactoryArray(constructorFn);
	        app.factory(name, factoryArray);
	        return this;
	    }

	    /**
	     * If the constructorFn is an array of type ['dep1', 'dep2', ..., constructor() {}]
	     * we need to pull out the array of dependencies and add it as an $inject property of the
	     * actual constructor function.
	     * @param input
	     * @returns {*}
	     * @private
	     */
	    function _normalizeConstructor(input) {
	        var constructorFn;

	        if (input.constructor === Array) {
	            //
	            var injected = input.slice(0, input.length - 1);
	            constructorFn = input[input.length - 1];
	            constructorFn.$inject = injected;
	        } else {
	            constructorFn = input;
	        }

	        return constructorFn;
	    }

	    /**
	     * Convert a constructor function into a factory function which returns a new instance of that
	     * constructor, with the correct dependencies automatically injected as arguments.
	     *
	     * In order to inject the dependencies, they must be attached to the constructor function with the
	     * `$inject` property annotation.
	     *
	     * @param constructorFn
	     * @returns {Array.<T>}
	     * @private
	     */
	    function _createFactoryArray(constructorFn) {
	        // get the array of dependencies that are needed by this component (as contained in the `$inject` array)
	        var args = constructorFn.$inject || [];
	        var factoryArray = args.slice(); // create a copy of the array
	        // The factoryArray uses Angular's array notation whereby each element of the array is the name of a
	        // dependency, and the final item is the factory function itself.
	        factoryArray.push(function () {
	            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	                args[_key] = arguments[_key];
	            }

	            //return new constructorFn(...args);
	            var instance = new (_bind.apply(constructorFn, [null].concat(args)))();
	            for (var key in instance) {
	                instance[key] = instance[key];
	            }
	            return instance;
	        });

	        return factoryArray;
	    }

	    /**
	     * Clone a function
	     * @param original
	     * @returns {Function}
	     */
	    function _cloneFunction(original) {
	        return function () {
	            return original.apply(this, arguments);
	        };
	    }

	    /**
	     * Override an object's method with a new one specified by `callback`.
	     * @param object
	     * @param methodName
	     * @param callback
	     */
	    function _override(object, methodName, callback) {
	        object[methodName] = callback(object[methodName]);
	    }
	}

	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports) {

	/**
	 * lodash 3.0.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.2 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */

	/** `Object#toString` result references. */
	var stringTag = '[object String]';

	/**
	 * Checks if `value` is object-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the [`toStringTag`](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a `String` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isString('abc');
	 * // => true
	 *
	 * _.isString(1);
	 * // => false
	 */
	function isString(value) {
	  return typeof value == 'string' || (isObjectLike(value) && objToString.call(value) == stringTag);
	}

	module.exports = isString;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }

	var _fisUiRwdDirectiveBanner = __webpack_require__(6);

	exports.fisUiRwdBanner = _interopRequire(_fisUiRwdDirectiveBanner);

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _fisUiRwdBannerHtml = __webpack_require__(7);

	var _fisUiRwdBannerHtml2 = _interopRequireDefault(_fisUiRwdBannerHtml);

	fisUiRwdBanner.$inject = ['SideNavData', 'MainSideNavData', 'FisRWdUtilities', '$translate', 'tmhDynamicLocale'];

	function fisUiRwdBanner(SideNavData, MainSideNavData, FisRWdUtilities, $translate, tmhDynamicLocale) {
		"use strict";
		return {
			restrict: 'AE',
			replace: 'true',
			transclude: true,
			scope: {
				banner: '='
			},
			template: _fisUiRwdBannerHtml2['default'],
			link: function link($scope, $element, $attrs) {
				/* listener */
				$scope.$on('locale::change', function (event, language) {
					$scope.updateDescription(language);
				});
			},
			controller: ['$scope', '$rootScope', '$window', '$timeout', function ($scope, $rootScope, $window, $timeout) {

				$scope.sideNavData = SideNavData;
				$scope.mainSideNavData = MainSideNavData;
				$scope.fisRWdUtilities = FisRWdUtilities;
				$scope.$translate = $translate;
				$scope.tmhDynamicLocale = tmhDynamicLocale;

				$scope.bannerProductNameClass = function () {
				    var classValue = "fis-rwd-banner-product-name visible-sm-inline visible-md-inline visible-lg-inline";
					if ($scope.banner.fi_image && ($scope.banner.product_name || $scope.banner.product_name_suffix)) {
					    classValue += ' fis-rwd-banner-product-name-border';
					}

					return classValue;
				};

				/* needed ?? */
				$scope.bannerLogoURL = function () {
					var bImage = '';
					if ($scope.banner.fi_image) {
						bImage = $scope.banner.fi_image + '_' + $rootScope.logoModifier;
					}
					return bImage;
				};

				$scope.bannerListItemClass = function (last, link) {
					var classValue = "";

					if (link.linkType === "responsiveLink" || link.linkType === "responsiveMenu") classValue += " fis-rwd-responsive-banner-item";

					if (link.linkType === "menu" || link.linkType === "responsiveMenu") classValue += " dropdown";

					return classValue;
				};

				$scope.bannerEvaluateAction = function (bannerItem, event) {
					return $scope.$eval(bannerItem.action);
				};

				$scope.updateDescription = function (language) {
					document.getElementById("bannerLocaleDD").children[0].children[0].textContent = language;
				};

				$scope.onHamburger = function () {
					// Toggle the state
					$scope.sideNavData.toggle();
					$scope.mainSideNavData.toggleMainSideNav();
					$scope.mainSideNavData.addTransitionEffect();
				};

				// Adjust the banner class for
				// min-width
				$scope.adjustMinWidth = function () {
					return $scope.sideNavData.open ? "fis-rwd-banner-adjust-min-width" : "";
				};
				$scope.applyBackground = function () {
					/* check if the page has mainside nav */
					if (document.querySelector(".fis-rwd-mainside-navigation")) {
						// Find the banner element and add the class to display the required banner background
						// color
						var x = angular.element(document.querySelector(".fis-rwd-banner"));
						if (!x.hasClass('fis-rwd-msnav-banner')) {
							x.addClass('fis-rwd-msnav-banner');
						}
						// Find the banner image element and add class to set to required white banner
						// logo
						var y = angular.element(document.querySelector(".fis-rwd-banner-image"));
						if (!y.hasClass('fis-rwd-msnav-banner-image')) {
							y.addClass('fis-rwd-msnav-banner-image');
						}
					}
				};
			}]
		};
	}

	exports['default'] = fisUiRwdBanner;
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports) {

    module.exports = "\n<div class=\"fis-rwd-banner\" ng-class=\"adjustMinWidth()\">\n\t<div class=\"fis-rwd-banner-content\" ng-class=\"applyBackground()\">\n\t\t<button type=\"button\" class=\"navbar-toggle fis-rwd-navbar-toggle\"\n\t\t\tng-click=\"onHamburger()\">\n\t\t\t<span class=\"sr-only\"></span> <span class=\"icon-bar\"></span> <span\n\t\t\t\tclass=\"icon-bar\"></span> <span class=\"icon-bar\"></span>\n\t\t</button>\n\t\t<div class=\"fis-rwd-banner-group\">\n\t\t\t<span class=\"fis-rwd-banner-image\"></span>\n            <span ng-if=\"banner.product_name\"\n\t\t\t\tng-class=\"bannerProductNameClass()\">{{banner.product_name}}</span> \n            <span\n\t\t\t\tng-if=\"banner.product_name_suffix\"\n\t\t\t\tclass=\"fis-rwd-banner-product-name-suffix\">{{banner.product_name_suffix}}</span>\n\t\t</div>\n\n\t\t<div id=\"banner_navigation\" class=\"fis-rwd-banner-navigation\">\n\t\t\t<ul>\n\n\t\t\t\t<li data-ng-repeat=\"link in banner.links\" id=\"{{link.id}}\"\n\t\t\t\t\tng-class=\"bannerListItemClass($last, link)\" class=\"dropdown fis-rwd-banner-list-item\" uib-dropdown><a\n\t\t\t\t\tng-if=\"link.linkType == 'link' || link.linkType == 'responsiveLink'\"\n\t\t\t\t\tclass=\"fis-rwd-banner-link\" href=\"\"\n\t\t\t\t\tng-click=\"bannerEvaluateAction(link, $event)\">{{link.desc|translate}}</a>\n\t\t\t\t\t<a\n\t\t\t\t\tng-if=\"link.linkType == 'menu' || link.linkType == 'responsiveMenu'\"\n\t\t\t\t\thref=\"\" class=\"dropdown-toggle\" uib-dropdown-toggle><span>{{link.desc|translate}}\n\t\t\t\t\t</span> <b class=\"caret\"></b></a>\n\t\t\t\t\t<ul\n\t\t\t\t\t\tng-if=\"link.linkType == 'menu' || link.linkType == 'responsiveMenu'\"\n\t\t\t\t\t\tclass=\"dropdown-menu fis-rwd-dropdown-menu\">\n\t\t\t\t\t\t<li ng-repeat=\"menuItem in link.menuItems\"><a href=\"\"\n\t\t\t\t\t\t\tng-click=\"bannerEvaluateAction(menuItem, $event);\">{{menuItem.desc|translate}}</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul></li>\n\t\t\t\t<li ng-if=\"banner.show_user_dropdown=='true'\" class=\"dropdown fis-rwd-banner-list-item fis-rwd-user\" ng-transclude ></li>\n\t\t\t\t<li class=\"fis-rwd-banner-list-item-last\">\n\t\t\t\t\t<a href=\"User\\Logout\" class=\"fis-rwd-banner-link\" target=\"_self\" href=\"\"\n\t\t\t\t\t\tng-click=\"banner.bannerLinksFunction('Sign Off !!')\">{{\"Sign Out\"|translate}}</a>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n</div>\n\n";

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }

	var _fisRwdDirectiveOpenDialogOnClick = __webpack_require__(9);

	exports.fisRwdOpenDialogOnclick = _interopRequire(_fisRwdDirectiveOpenDialogOnClick);

	var _fisUiRwdDirectiveNonModalDraggable = __webpack_require__(10);

	exports.fisRwdNonmodalDraggable = _interopRequire(_fisUiRwdDirectiveNonModalDraggable);

	var _fisUiRwdDirectiveDialog = __webpack_require__(11);

	exports.fisRwdDialog = _interopRequire(_fisUiRwdDirectiveDialog);

	var _fisUiRwdDirectiveDialogHeader = __webpack_require__(12);

	exports.fisRwdDialogHeader = _interopRequire(_fisUiRwdDirectiveDialogHeader);

	var _fisUiRwdDirectiveDialogBody = __webpack_require__(14);

	exports.fisRwdDialogBody = _interopRequire(_fisUiRwdDirectiveDialogBody);

	var _fisUiRwdDirectiveDialogFooter = __webpack_require__(16);

	exports.fisRwdDialogFooter = _interopRequire(_fisUiRwdDirectiveDialogFooter);

/***/ },
/* 9 */
/***/ function(module, exports) {

	
	/*not working if passing below variables to windowtemplate variable and loading through bundle.js instead
	of loading through windowtemplateurl and sending ajax request to load the url. custom css classes are not getting 
	applied and default bootstrap modal  is shown */
	//import partialmodal from './fis.ui.rwd.dialog.modal.html';
	//import partialnonmodal from './fis.ui.rwd.dialog.nonModal.html';

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	fisRwdOpenDialogOnclick.$inject = ['$uibModal', '$parse'];

	function fisRwdOpenDialogOnclick($uibModal, $parse) {
		"use strict";
		return {
			restrict: 'A',
			scope: {
				fisRwdDialogSize: "@",
				fisRwdDialogType: "@",
				fisRwdDialogTemplate: "@",
				fisRwdDialogCtrl: "@"
			},
			compile: function compile(tElm, tAttrs) {
				return function (scope, elm) {
					scope.fxn = function () {
						scope.openModal(scope.fisRwdDialogSize, scope.fisRwdDialogType, scope.fisRwdDialogTemplate, scope.fisRwdDialogCtrl);
					};

					scope.items = [scope.fisRwdDialogType];

					scope.openModal = function (modalSize, modalType, modalTemplate, modalCtrl) {
						var backdropClass = "fis-rwd-modal-backdrop";
						var backdrop = "static";
						var windowTemplateUrl = 'partials/fis.ui.rwd.dialog-modal.html';

						if (modalType === "non-modal") {
							backdropClass = '';
							backdrop = false;
							windowTemplateUrl = 'partials/fis.ui.rwd.dialog-non-modal.html';
						}

						var modalInstance = $uibModal.open({
							templateUrl: modalTemplate,
							controller: modalCtrl,
							windowTemplateUrl: windowTemplateUrl,
							size: modalSize,
							backdropClass: backdropClass,
							backdrop: backdrop,
							resolve: {
								items: function items() {
									return scope.items;
								}
							}
						});

						// TODO: remove console.log
						modalInstance.result.then(function () {
							console.log('Finished');
						}, function () {
							console.log('Modal dismissed at : ' + new Date());
						});
					};

					var exp = $parse('fxn()');

					elm.bind('click', function () {
						exp(scope);
					});
				};
			}
		};
	}

	exports['default'] = fisRwdOpenDialogOnclick;
	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports) {

	
	/* Directive for making non-modals draggable
	 * fis-nonmodal-draggable
	 * 
	 * */

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	   value: true
	});
	fisRwdNonmodalDraggable.$inject = ['$document', 'FisRWdUtilities'];

	function fisRwdNonmodalDraggable($document, FisRWdUtilities) {
	   return function (scope, element, attr) {
	      var startX = 0,
	          startY = 0,
	          x = 0,
	          y = 0;

	      element.on('mousedown', function (event) {
	         var dialogElt = FisRWdUtilities.findFirstParentElementByClass(element, "fis-rwd-modal");

	         if (dialogElt) // If the dialog is non-modal,only then
	            // bind etc. Reduces chances of a memory leak
	            {
	               // Prevent default dragging of selected content
	               event.preventDefault();
	               startX = event.pageX - x;
	               startY = event.pageY - y;
	               $document.on('mousemove', mousemove);
	               $document.on('mouseup', mouseup);
	            }
	      });

	      element.on('$destroy', function () {
	         // to ensure no memory leaks are there
	         $document.unbind('mousemove', mousemove);
	         $document.unbind('mouseup', mouseup);
	      });

	      element.on('hidden.bs.modal.header', function (e) {
	         e.preventDefault();
	         startX = 0;
	         startY = 0;
	         x = 0;
	         y = 0;
	      });

	      function mousemove(event) {
	         y = event.pageY - startY;
	         x = event.pageX - startX;

	         var dialogElt = FisRWdUtilities.findFirstParentElementByClass(element, "fis-rwd-modal")[0];

	         var dialogEltWidth = dialogElt.offsetWidth;
	         var dialogEltHeight = dialogElt.offsetHeight;
	         var dialogEltCssLeft = dialogElt.offsetLeft;
	         var dialogEltCssTop = dialogElt.offsetTop;

	         var dialogElementOffset = dialogElt.getBoundingClientRect();

	         var bodyWidth = $document[0].body.clientWidth;
	         var bodyHeight = $document[0].body.clientHeight;

	         if (!dialogEltCssLeft) {
	            dialogEltCssLeft = 0;
	         }

	         if (!dialogEltCssTop) {
	            dialogEltCssTop = 0;
	         }

	         bodyHeight -= 10;
	         bodyWidth -= 10;

	         if ((dialogElementOffset.left >= 1 || x > dialogEltCssLeft) && ( // R
	         dialogElementOffset.left + 1 <= bodyWidth - dialogEltWidth || x < dialogEltCssLeft)) // L
	            {
	               dialogElt.style.left = x + 'px';
	            }
	         if ((dialogElementOffset.top >= 1 || y > dialogEltCssTop) && ( // Up
	         dialogElementOffset.top + 1 <= bodyHeight - dialogEltHeight || y < dialogEltCssTop)) // D
	            {
	               dialogElt.style.top = y + 'px';
	            }
	      }

	      function mouseup() {
	         $document.unbind('mousemove', mousemove);
	         $document.unbind('mouseup', mouseup);
	      }
	   };
	}

	exports['default'] = fisRwdNonmodalDraggable;
	module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports) {

	/* Directive for dialogs - modal and non-modal. Outermost shell.
	 * Adds the modal / non-modal classes for the outershell.
	 * Always an attribute to be added to divs.
	 * fis-dialog
	 * */

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	   value: true
	});
	function fisRwdDialog() {
	   return {
	      restrict: 'E',
	      scope: true,
	      link: function link(scope, element, attrs, controllers) {},
	      controller: ['$scope', '$element', '$attrs', function ($scope, tElement, tAttrs) {}]
	   };
	}

	exports['default'] = fisRwdDialog;
	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	   value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _fisUiRwdDialogHeaderHtml = __webpack_require__(13);

	var _fisUiRwdDialogHeaderHtml2 = _interopRequireDefault(_fisUiRwdDialogHeaderHtml);

	/* Directive for dialogs - header component 
	 * Always an element.This avoids additional DIVs and also mixup of directives.
	 * This transcludes contents as is, with appropriate class attached. 
	 * This directive is more for providing a shell, and lending a structure for the dialogs
	 * fis-dialog-header. 
	 * Will make non-modals draggable by adding appropriate "fis-rwd-nonmodal-draggable" directive.
	 * */
	function fisRwdDialogHeader() {
	   return {
	      restrict: 'E',
	      transclude: true,
	      scope: true,
	      require: "^fisRwdDialog", /* just for structure validation. We dont use the controller.*/
	      link: function link(scope, element, attrs, controllers) {
	         scope.cancel = function () {
	            scope.$parent.cancel();
	         };
	      },
	      template: _fisUiRwdDialogHeaderHtml2['default']

	   };
	}

	exports['default'] = fisRwdDialogHeader;
	module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = "<div ng-if=\"modalType == 'modal' \"\n\tclass=\"modal-header fis-rwd-modal-header fis-rwd-dialog-header\">\n\t<button type=\"button\" class=\"close fis-rwd-close\" data-dismiss=\"modal\" ng-click=\"cancel($event)\">\n\t\t<span aria-hidden=\"true\"><span\n\t\t\tclass=\"icon-Close_tab sm-ic\"></span></span><span class=\"sr-only\">Close</span>\n\t</button>\n\t<h4 class=\"modal-title fis-rwd-modal-title\" ng-transclude></h4>\n</div>\n<div ng-if=\"modalType == 'non-modal' \"\n\tclass=\"modal-header fis-rwd-modal-header fis-rwd-dialog-header fis-rwd-non-modal-dialog-header\"\n\tfis-rwd-nonmodal-draggable>\n\t<button type=\"button\" class=\"close fis-rwd-close\" data-dismiss=\"modal\" ng-click=\"cancel($event)\">\n\t\t<span aria-hidden=\"true\"><span\n\t\t\tclass=\"icon-Close_tab sm-ic\"></span></span><span class=\"sr-only\">Close</span>\n\t</button>\n\t<h4 class=\"modal-title fis-rwd-modal-title\" ng-transclude></h4>\n</div>";

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	   value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _fisUiRwdDialogBodyHtml = __webpack_require__(15);

	var _fisUiRwdDialogBodyHtml2 = _interopRequireDefault(_fisUiRwdDialogBodyHtml);

	/* Directive for dialogs - body component 
	 * Always an attribute to be added to divs.
	 * As of date, this only transcludes contents as is, with appropriate class attached. 
	 * This directive is more for providing a shell, and lending a structure for the dialogs
	 * fis-dialog-body
	 * */
	function fisRwdDialogBody() {
	   return {
	      restrict: 'E',
	      transclude: true,
	      scope: true,
	      require: "^fisRwdDialog", /* just for structure validation. We dont use the controller.*/
	      template: _fisUiRwdDialogBodyHtml2['default']
	   };
	}

	exports['default'] = fisRwdDialogBody;
	module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = "<div class=\"modal-body fis-rwd-modal-body fis-rwd-dialog-body\" ng-transclude></div>";

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	   value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _fisUiRwdDialogFooterHtml = __webpack_require__(17);

	var _fisUiRwdDialogFooterHtml2 = _interopRequireDefault(_fisUiRwdDialogFooterHtml);

	/* Directive for dialogs - header component 
	 * Always an attribute to be added to divs.
	 * As of date, this only transcludes contents as is, with appropriate class attached. 
	 * This directive is more for providing a shell, and lending a structure for the dialogs
	 * fis-dialog-footer
	 * */
	function fisRwdDialogFooter() {
	   return {
	      restrict: 'E',
	      transclude: true,
	      scope: true,
	      require: "^fisRwdDialog", /* just for structure validation. We dont use the controller.*/
	      template: _fisUiRwdDialogFooterHtml2['default']
	   };
	}

	exports['default'] = fisRwdDialogFooter;
	module.exports = exports['default'];

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = "<div class=\"modal-footer fis-rwd-modal-footer fis-rwd-dialog-footer\" ng-transclude></div>";

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }

	var _fisUiRwdDirectiveFooter = __webpack_require__(19);

	exports.fisUiRwdFooter = _interopRequire(_fisUiRwdDirectiveFooter);

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	   value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _fisUiRwdFooterHtml = __webpack_require__(20);

	var _fisUiRwdFooterHtml2 = _interopRequireDefault(_fisUiRwdFooterHtml);

	function fisUiRwdFooter() {
	   "use strict";
	   return {
	      restrict: 'AE',
	      replace: 'true',
	      scope: {
	         footer: '='
	      },
	      template: _fisUiRwdFooterHtml2['default']
	   };
	};

	exports['default'] = fisUiRwdFooter;
	module.exports = exports['default'];

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"fis-rwd-footer\">\n\t<span>{{footer}}</span> <!-- Copyright � 2015 FIS. All Rights Reserved. -->\n</div>\n\n";

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }

	var _fisUiRwdDirectiveNotifications = __webpack_require__(22);

	exports.fisRwdNotification = _interopRequire(_fisUiRwdDirectiveNotifications);

	var _fisUiRwdDirectiveToggleswitch = __webpack_require__(24);

	exports.fisUiRwdToggleswitch = _interopRequire(_fisUiRwdDirectiveToggleswitch);

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	   value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _fisUiRwdNotificationsHtml = __webpack_require__(23);

	var _fisUiRwdNotificationsHtml2 = _interopRequireDefault(_fisUiRwdNotificationsHtml);

	function fisRwdNotification() {
	   return {
	      restrict: 'E',
	      replace: true,
	      scope: {
	         fisRwdNotificationsList: '=',
	         fisRwdShowStdErr: '=',
	         fisRwdStdErrMessage: '=?',
	         fisRwdForm: '='
	      },
	      template: _fisUiRwdNotificationsHtml2['default']
	   };
	}

	exports['default'] = fisRwdNotification;
	module.exports = exports['default'];

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = "<div>\n    <div ng-if=\"fisRwdForm.$invalid && fisRwdForm.$dirty && fisRwdShowStdErr\">\n        <div class=\"fis-notification-img\">\n            <span class=\"icon-Error red\"></span>\n        </div>\n        <div class=\"fis-notifications fis-error\">{{fisRwdStdErrMessage|translate}}</div>\n    </div>\n\t<div ng-repeat=\"notice in fisRwdNotificationsList\">\n\t\t<ng-switch on=\"notice.type\">\n\t\t<div class=\"fis-notification-img\">\n\t\t\t<span ng-switch-when=\"fis-error\" class=\"icon-Error red\"></span>\n\t\t\t<!-- show errors only when form is not pristine -->\n\t\t\t<span ng-switch-when=\"fis-alert\" class=\"icon-Error orange\"></span> \n\t\t\t<span ng-switch-when=\"fis-information\"\tclass=\"icon-Information  blue\"></span>\n\t\t\t<span ng-switch-when=\"fis-success\"\tclass=\"icon-Posak green_c\"></span>\n\t\t</div>\n\t\t</ng-switch>\n\t\t<div class=\"fis-notifications\" ng-class=\"notice.type\">{{notice.message|translate}}</div>\n\t\t<br>\n\t</div>\n</div>";

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	   value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _fisUiRwdToggleswitchHtml = __webpack_require__(25);

	var _fisUiRwdToggleswitchHtml2 = _interopRequireDefault(_fisUiRwdToggleswitchHtml);

	function fisUiRwdToggleswitch() {
	   "use strict";
	   return {
	      restrict: 'E',
	      replace: 'true',
	      scope: {
	         'fisTsInfosource': '=?',
	         /*  'fisTsOnchange': '&fisTsOnchange'	*/
	         'fisTsOnchangeRef': '&fisTsOnchange'
	      },
	      link: function link($scope, tElement, tAttrs) {
	         /* needed to set this values in the link section to allow time for possible translation to take affect */
	         $scope.fisTSTrueText = tAttrs.fisTsTruetext;
	         $scope.fisTSFalseText = tAttrs.fisTsFalsetext;
	      },
	      controller: ['$scope', '$element', '$attrs', '$timeout', function ($scope, tElement, tAttrs, $timeout) {

	         $scope.toggleSwitchElement = tElement;

	         $scope.fisTSId = tAttrs.fisTsId;
	         $scope.fisTSName = tAttrs.fisTsName;
	         $scope.fisTSClass = "fis-rwd-switch";
	         $scope.fisTSTrueValue = tAttrs.fisTsTruevalue;
	         $scope.fisTSFalseValue = tAttrs.fisTsFalsevalue;
	         $scope.fisTSTrueText = tAttrs.fisTsTruetext;
	         $scope.fisTSFalseText = tAttrs.fisTsFalsetext;
	         $scope.fisTSMinWidth = tAttrs.fisTsMinwidth;
	         $scope.fisTsOnchange = function () {
	            $timeout(function () {
	               $scope.fisTsOnchangeRef();
	            }, 0);
	         };
	         $scope.fisTSHandleLeftSwipe = function ($event) {
	            // console.log('left swipe is called');
	            // console.log($event);
	            if ($event.type.search("touch") != -1) {
	               // change value if it is a touch event
	               angular.element($scope.toggleSwitchElement.children()[0]).prop('checked', false);
	            }
	         };
	         $scope.fisTSHandleRightSwipe = function ($event) {
	            // console.log('right swipe is called');
	            // console.log($event);
	            if ($event.type.search("touch") != -1) {
	               // change value if it is a touch event
	               angular.element($scope.toggleSwitchElement.children()[0]).prop('checked', true);
	            }
	         };
	      }],
	      template: _fisUiRwdToggleswitchHtml2['default']

	   };
	}

	exports['default'] = fisUiRwdToggleswitch;
	module.exports = exports['default'];

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = "<div ng-swipe-left=\"fisTSHandleLeftSwipe($event)\"\n\tng-swipe-right=\"fisTSHandleRightSwipe($event)\" ng-swipe-disable-mouse>\n\t<input type=\"checkbox\" id=\"{{fisTSId}}\" name=\"{{fisTSName}}\"\n\t\tng-change=\"fisTsOnchange()\" ng-model=fisTsInfosource\n\t\tclass=\"{{fisTSClass}}\" ng-true-value=\"{{fisTSTrueValue}}\"\n\t\tng-false-value=\"{{fisTSFalseValue}}\" /> <label for=\"{{fisTSId}}\"\n\t\tdisplay-content-No=\"{{fisTSFalseText|translate}}\"\n\t\tdisplay-content-Yes=\"{{fisTSTrueText|translate}}\">&nbsp;</label>\n</div>";

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }

	var _fisUiRwdDirectiveMainsidenavigation = __webpack_require__(27);

	exports.fisUiRwdMainsidenavbar = _interopRequire(_fisUiRwdDirectiveMainsidenavigation);

	var _fisUiRwdServiceMainsidenavigation = __webpack_require__(29);

	exports.MainSideNavData = _interopRequire(_fisUiRwdServiceMainsidenavigation);

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _fisUiRwdMainsidenavigationHtml = __webpack_require__(28);

	var _fisUiRwdMainsidenavigationHtml2 = _interopRequireDefault(_fisUiRwdMainsidenavigationHtml);

	fisUiRwdMainsidenavbar.$inject = ['SideNavData', 'MainSideNavData', 'FisRWdUtilities', '$translate', 'tmhDynamicLocale', '$rootScope'];

	function fisUiRwdMainsidenavbar(SideNavData, MainSideNavData, FisRWdUtilities, $translate, tmhDynamicLocale, $rootScope) {
		'use strict';
		return {
			restrict: 'AE',
			replace: 'true',
			scope: {
				navbar: '='
			},
			template: _fisUiRwdMainsidenavigationHtml2['default'],
			controller: ['$scope', '$location', '$http', function ($scope, $location, $http) {

				$scope.fisRWdUtilities = FisRWdUtilities;
				$scope.$rootScope = $rootScope;
				$scope.$translate = $translate;
				$scope.tmhDynamicLocale = tmhDynamicLocale;
				$scope.menuCollapsed = true;

				// Data for side nav
				$scope.sideNavData = SideNavData;
				$scope.mainSideNavData = MainSideNavData;
				$scope.mainSideNavData.prevMarginLeft = 0;
				$scope.navClass = function (link) {

					var rc = '';
					var currentRoute = $location.path().substring(1) || 'Home';

					/* Compare for top nav link */
					if (link.linkType === 'link') {
						if (currentRoute.indexOf(link.href) > -1) {
							rc = 'active';
						}
					}

					/* Compare for top nav menu */
					if (link.linkType === 'menu' || link.linkType === 'responsiveMenu') {
						angular.forEach(link.menuItems, function (menuItem, key) {
							if (currentRoute.indexOf(menuItem.href) > -1) rc = 'active';
						});
					}

					/*
	     * Compare for a responsive top
	     * nav link
	     */
					if (link.linkType === 'responsiveLink' || link.linkType === 'responsiveMenu') {
						rc += ' fis-rwd-responsive-banner-item';
					}

					return rc;
				};
				$scope.CollapseSideNav = function () {
					//The class is present only for the small type screen and hence the behaviour gets effective only in smaller screen
					if (!$scope.mainSideNavData.mainOpen) {
						return "fis-rwd-mainside-navbar-minimize";
					} else {
						return " ";
					}
				};
				// Show or hide Icon.Applies only for small screen
				$scope.toggleIcon = function () {
					if ($scope.mainSideNavData.mainOpen) {
						return "fis-rwd-mainside-nav-menu-iconshow";
					} else {
						return "fis-rwd-mainside-nav-menu-iconhide";
					}
				};
				// text is hidden/shown in case of medium and small screen

				$scope.toggleText = function () {
					if ($scope.mainSideNavData.mainOpen) {
						return "fis-rwd-mainside-nav-menu-textshow";
					} else {
						return "fis-rwd-mainside-nav-menu-texthide";
					}
				};

				// width is reduced and increased when the toggle button is pressed
				// for smaller screen the width is set 0 when minimized
				// doesnt apply for large screen as no toggling avaliable
				$scope.toggleWidth = function () {
					if ($scope.mainSideNavData.mainOpen) {
						return "fis-rwd-mainside-nav-width-max";
					} else {
						return "fis-rwd-mainside-nav-width-min";
					}
				};

				$scope.handleClick = function (navBarItem) {
					if ($scope.mainSideNavData.mainOpen) {
						$scope.mainSideNavData.toggleMainSideNav();
					}
					$scope.setNavBarItem(navBarItem);

					if (navBarItem.action) {
						return $scope.$eval(navBarItem.action);
					}
				};
				$scope.setNavBarItem = function (navBarItem) {
					if (navBarItem.linkType !== 'menu') {
						$scope.navBarItem = navBarItem;
					}
				};
				$scope.isNavBarItemSelected = function (navBarItem) {
					return $scope.navBarItem === navBarItem;
				};
			}]
		};
	}

	exports['default'] = fisUiRwdMainsidenavbar;
	module.exports = exports['default'];

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = "<div class=\"fis-rwd-mainside-navigation\" ng-class=\"toggleNavigation()\">\n\t<div class=\"fis-rwd-mainside-navigation-content\">\n\t\t<div\n\t\t\tclass=\"navbar fis-rwd-mainside-navbar navbar-default fis-rwd-mainside-navbar-default\"\n\t\t\trole=\"navigation\">\n\n\t\t\t<!-- Title for sliding menu: only show when the menu is out -->\n\t\t\t<span ng-switch on=\"sideNavData.open\">\n\t\t\t\t<div class=\"navbar-header fis-rwd-mainside-navbar-header \"\n\t\t\t\t\tng-switch-when=\"true\">\n\t\t\t\t\t<span class=\"fis-rwd-mainside-navbar-header-menu-title\">{{\"Menu\"|translate}}</span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"navbar-header fis-rwd-mainside-navbar-header \" ng-switch-default></div>\n\t\t\t</span>\n\n\t\t\t<div  class=\"navbar-collapse fis-rwd-mainside-navbar-collapse\"\n\t\t\t\tng-class=\"CollapseSideNav()\" >\n\t\t\t\t<ul class=\"nav fis-rwd-mainside-nav navbar-nav fis-rwd-mainside-navbar-nav\">\n\t\t\t\t\t<li ng-repeat=\"link in navbar.links\" ng-click=\"setNavBarItem(link)\"\n\t\t\t\t\t\tng-class=\"navClass(link)\" class=\"dropdown\" uib-dropdown>\n                     <a\n\t\t\t\t\t\tng-if=\"link.linkType == 'image'\" ui-sref=\"{{link.href}}\"><img\n\t\t\t\t\t\t\tclass=\"{{link.class}}\"></img></a> <a\n\t\t\t\t\t\tng-if=\"link.linkType == 'link' || link.linkType == 'responsiveLink'\"\n\t\t\t\t\t\tng-click=\"handleClick(link)\"\n\t\t\t\t\t\tui-sref=\"{{link.href ? link.href : 'none'}}\"\n\t\t\t\t\t\tclass=\"fis-rwd-navbar-link-item \" ng-class=\"toggleWidth()\"><span class=\"{{link.class}}\" ng-class=\"toggleIcon()\"></span>\n\t\t\t\t\t\t<span class=\"fis-rwd-mainside-nav-menu-textdimension\" ng-class=\"toggleText()\" >{{link.desc|translate}}</span></a>\n\t\t\t\t\t<a\n\t\t\t\t\t\tng-if=\"link.linkType == 'menu'\"\n\t\t\t\t\t\thref=\"\" class=\"dropdown-toggle fis-rwd-navbar-link-item\" ng-class=\"toggleWidth()\" uib-dropdown-toggle>\n\t\t\t\t\t\t<span class=\"{{link.class}}\" ng-class=\"toggleIcon()\"></span> \n\t\t\t\t\t\t<b class=\"chevron\"></b> \n\t\t\t\t\t\t<span class=\"fis-rwd-mainside-nav-menu-textdimension\" ng-class=\"toggleText()\" >{{link.desc|translate}}</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<ul\n\t\t\t\t\t\t\tng-if=\"link.linkType == 'menu'\"\n\t\t\t\t\t\t\tclass=\"dropdown-menu fis-rwd-dropdown-menu fis-rwd-dropdown-down-menu\">\n\t\t\t\t\t\t\t<li ng-repeat=\"menuItem in link.menuItems\"\n\t\t\t\t\t\t\t\tng-class=\"menuItem.class ? menuItem.class : ''\">\n                              <a\n\t\t\t\t\t\t\t\tng-click=\"handleClick(menuItem)\"\n\t\t\t\t\t\t\t\tng-class=\"{active : isNavBarItemSelected(menuItem)}\"\n\t\t\t\t\t\t\t\tui-sref=\"{{menuItem.href ? menuItem.href : 'none'}}\">{{menuItem.desc|translate}}</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n                     </li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>";

/***/ },
/* 29 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	MainSideNavData.$inject = ['$timeout'];
	// Shared data service for the navigation control
	function MainSideNavData($timeout) {
		'use strict';
		var maindata = {};
		maindata.mainOpen = false;
		maindata.prevMarginLeft = 0;
		maindata.toggleMainSideNav = function () {
			this.mainOpen = this.mainOpen ? false : true;
		};

		maindata.addTransitionEffect = function () {
			var z = angular.element(document.querySelector(".fis-rwd-workspace-realign"));
			if (!z.hasClass('fis-rwd-workspace-moveRight')) {
				z.addClass('fis-rwd-workspace-moveRight');
			}
		};
		//This method returns the width of mainside nav when it may have either icon or text or both.
		// This method returns zero when both text and icon are absent
		maindata.getWidth = function () {
			var width = 0;
			var q = document.querySelector(".fis-rwd-mainside-navigation");
			if (q) {
				width = parseInt(window.getComputedStyle(document.querySelector(".fis-rwd-mainside-navigation"), null).width);
				return width;
			}
			// When main side nav is absent set the width to zero
			else {
					return 0;
				}
		};
		return maindata;
	}

	exports['default'] = MainSideNavData;
	module.exports = exports['default'];

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }

	var _fisUiRwdDirectiveNavigation = __webpack_require__(31);

	exports.fisUiRwdNavbar = _interopRequire(_fisUiRwdDirectiveNavigation);

	var _fisUiRwdServiceNavigation = __webpack_require__(33);

	exports.SideNavData = _interopRequire(_fisUiRwdServiceNavigation);

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _fisUiRwdNavigationHtml = __webpack_require__(32);

	var _fisUiRwdNavigationHtml2 = _interopRequireDefault(_fisUiRwdNavigationHtml);

	fisUiRwdNavbar.$inject = ['SideNavData', 'FisRWdUtilities', '$translate', 'tmhDynamicLocale', '$rootScope'];

	function fisUiRwdNavbar(SideNavData, FisRWdUtilities, $translate, tmhDynamicLocale, $rootScope) {
		'use strict';
		return {
			restrict: 'AE',
			replace: 'true',
			scope: {
				navbar: '='
			},
			template: _fisUiRwdNavigationHtml2['default'],
			controller: ['$scope', '$location', '$http', function ($scope, $location, $http) {

				$scope.fisRWdUtilities = FisRWdUtilities;
				$scope.$rootScope = $rootScope;
				$scope.$translate = $translate;
				$scope.tmhDynamicLocale = tmhDynamicLocale;
				$scope.menuCollapsed = true; // Start
				// in
				// collapsed
				// state

				$scope.handleClick = function (navBarItem) {
					// Close the Side Nav
					$scope.sideNavData = SideNavData;
					$scope.sideNavData.close();

					$scope.setNavBarItem(navBarItem);

					if (navBarItem.action) {
						return $scope.$eval(navBarItem.action);
					}
				};

				$scope.setNavBarItem = function (navBarItem) {
					if (navBarItem.linkType !== 'menu') {
						$scope.navBarItem = navBarItem;
					}
				};

				$scope.isNavBarItemSelected = function (navBarItem) {
					return $scope.navBarItem === navBarItem;
				};

				$scope.navClass = function (link) {

					var rc = '';
					var currentRoute = $location.path().substring(1) || 'Home';

					/* Compare for top nav link */
					if (link.linkType === 'link') {
						if (currentRoute.indexOf(link.href) > -1) {
							rc = 'active';
						}
					}

					/* Compare for top nav menu */
					if (link.linkType === 'menu' || link.linkType === 'responsiveMenu') {
						angular.forEach(link.menuItems, function (menuItem, key) {
							if (currentRoute.indexOf(menuItem.href) > -1) rc = 'active';
						});
					}

					/*
	     * Compare for a responsive top
	     * nav link
	     */
					if (link.linkType === 'responsiveLink' || link.linkType === 'responsiveMenu') {
						rc += ' fis-rwd-responsive-banner-item';
					}

					return rc;
				};

				// Data for side nav
				$scope.sideNavData = SideNavData;

				// TODO: Refactor to minimize the
				// number of calls
				// Side nav control functions
				$scope.menuOpen = function () {
					return $scope.sideNavData.open ? 'menu-out' : 'menu-in';
				};
				$scope.collapsedClass = function () {
					return $scope.sideNavData.open ? '' : 'collapse';
				};

				var mq;
				if (window.matchMedia) {
					mq = window.matchMedia("(min-width: 768px)");
				}

				function DisplayWidthChange() {
					var isLarge = false;
					if (window.matchMedia) {
						if (mq.matches) {
							isLarge = true;
						}
					}
					// Incase the window.matchMeida API is not supported, the below fallback mechanism is
					//supported where the document client width is taken into consideration for determining the
					// type of screen.whether it is large or not and apply the required class
					else {
							var width = document.documentElement.clientWidth;
							if (width >= 768) {
								isLarge = true;
							}
						}

					if (isLarge) {
						return 'caret'; // larger screen														
					} else {
							return 'chevron';
						}
				}

				$scope.setIconClass = function () {
					// when hamburger is in open state and screen resized from medium to larger, the offcanvas gets hidden,
					//and caret not shown as chevron gets selected .to fix this ,depending on the screen size when hamburger is "open" state
					//if larger screen return caret class else chevron class.DisplayWidthChange method does this
					if ($scope.sideNavData.open) {
						var classname = null;
						classname = DisplayWidthChange();
						return classname;
					}
					// By default set caret class or chevron class when toggled	
					return $scope.sideNavData.open ? 'chevron' : 'caret';
				};
				$scope.toggleNavigation = function () {
					return $scope.sideNavData.open ? 'fis-rwd-navigation-out' : 'fis-rwd-navigation-in';
				};
			}]
		};
	}

	exports['default'] = fisUiRwdNavbar;
	module.exports = exports['default'];

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = "<div class=\"fis-rwd-navigation\" ng-class=\"toggleNavigation()\">\n\t<div class=\"fis-rwd-navigation-content\">\n\t\t<div\n\t\t\tclass=\"navbar fis-rwd-navbar navbar-default fis-rwd-navbar-default\"\n\t\t\trole=\"navigation\">\n\n\t\t\t<!-- Title for sliding menu: only show when the menu is out -->\n\t\t\t<span ng-switch on=\"sideNavData.open\">\n\t\t\t\t<div class=\"navbar-header fis-rwd-navbar-header\"\n\t\t\t\t\tng-switch-when=\"true\">\n\t\t\t\t\t<span class=\"fis-rwd-navbar-header-menu-title\">{{\"Menu\"|translate}}</span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"navbar-header fis-rwd-navbar-header\" ng-switch-default></div>\n\t\t\t</span>\n\n\t\t\t<div class=\"navbar-collapse fis-rwd-navbar-collapse\"\n\t\t\t\tng-class=\"collapsedClass()\">\n\t\t\t\t<ul class=\"nav fis-rwd-nav navbar-nav fis-rwd-navbar-nav\">\n\t\t\t\t\t<li ng-repeat=\"link in navbar.links\" ng-click=\"setNavBarItem(link)\"\n\t\t\t\t\t\tng-class=\"navClass(link)\" class=\"dropdown\" uib-dropdown>\n                     <a\n\t\t\t\t\t\tng-if=\"link.linkType == 'image'\" ui-sref=\"{{link.href}}\"><img\n\t\t\t\t\t\t\tclass=\"{{link.class}}\"></img></a> <a\n\t\t\t\t\t\tng-if=\"(link.linkType == 'link' || link.linkType == 'responsiveLink') && link.show == true\"\n\t\t\t\t\t\tng-click=\"handleClick(link)\"\n\t\t\t\t\t\thref=\"{{link.href ? link.href : 'none'}}\"\n\t\t\t\t\t\tclass=\"fis-rwd-navbar-link-item {{link.class}}\"><span class=\"{{link.class}}\">{{link.desc|translate}}</span></a>\n\t\t\t\t\t\t<a\n\t\t\t\t\t\tng-if=\"(link.linkType == 'menu' || link.linkType == 'responsiveMenu') && link.show == true\"\n\t\t\t\t\t\thref=\"\" class=\"dropdown-toggle\" uib-dropdown-toggle><b class=\"\"\n\t\t\t\t\t\t\tng-class=\"setIconClass()\" ></b>{{link.desc|translate}} </a>\n\t\t\t\t\t\t<ul\n\t\t\t\t\t\t\tng-if=\"link.linkType == 'menu' || link.linkType == 'responsiveMenu'\"\n\t\t\t\t\t\t\tclass=\"dropdown-menu fis-rwd-dropdown-menu\">\n\t\t\t\t\t\t\t<li ng-repeat=\"menuItem in link.menuItems\"\n\t\t\t\t\t\t\t\tng-class=\"menuItem.class ? menuItem.class : ''\">\n                              <hr>\n                              <a\n\t\t\t\t\t\t\t\tng-if=\"menuItem.class != 'divider'\"\n\t\t\t\t\t\t\t\tng-click=\"handleClick(menuItem)\"\n\t\t\t\t\t\t\t\tng-class=\"{active : isNavBarItemSelected(menuItem)}\"\n\t\t\t\t\t\t\t\tui-sref=\"{{menuItem.href ? menuItem.href : 'none'}}\">{{menuItem.desc|translate}}</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n                        <hr>\n                     </li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>";

/***/ },
/* 33 */
/***/ function(module, exports) {

	

	// Shared data service for the navigation control

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	SideNavData.$inject = ['$timeout'];

	function SideNavData($timeout) {
		'use strict';
		var data = {};
		data.width = '100px';
		data.open = false;

		data.close = function () {
			this.open = false;
			this.performCleanUp();
		};

		data.toggle = function () {
			this.open = this.open ? false : true;
			this.performCleanUp();
		};

		data.performCleanUp = function () {

			var bodyElement = angular.element(document).find('body');
			this.open ? bodyElement.addClass("fis-rwd-body-off-canvas-bg") : bodyElement.removeClass("fis-rwd-body-off-canvas-bg");

			/* need to resize when off-canvas is shwon and hidden */
			$timeout(function () {
				angular.element(window).triggerHandler('resize');
			});
		};

		return data;
	}

	exports['default'] = SideNavData;
	module.exports = exports['default'];

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }

	var _ngFileSelect = __webpack_require__(35);

	exports.ngFileSelect = _interopRequire(_ngFileSelect);

	var _fisUiRwdDirectiveRdc = __webpack_require__(36);

	exports.fisUiRwdRdc = _interopRequire(_fisUiRwdDirectiveRdc);

	var _fisUiRwdDirectiveDocumentclick = __webpack_require__(39);

	exports.fisUiRwdDocumentClick = _interopRequire(_fisUiRwdDirectiveDocumentclick);

/***/ },
/* 35 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	function ngFileSelect() {
		"use strict";
		return {
			link: function link($scope, el) {

				el.bind("change", function (e) {

					$scope.file = (e.srcElement || e.target).files[0];
					$scope.readFile(e.target.id);
				});
			}
		};
	}

	exports["default"] = ngFileSelect;
	module.exports = exports["default"];

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _fisUiRwdRdcHtml = __webpack_require__(37);

	var _fisUiRwdRdcHtml2 = _interopRequireDefault(_fisUiRwdRdcHtml);

	/* RDC directive */

	function fisUiRwdRdc() /*service1, service2*/{
		"use strict";
		return {
			restrict: 'AE',
			replace: 'true',
			scope: {
				dataprovider: '='
			},

			template: _fisUiRwdRdcHtml2['default'],

			controller: ['$scope', function ($scope, $attrs) {
				$scope.ConfigObject;
				$scope.ShowEmail = false;
				$scope.ShowNotes = false;
				$scope.mode = "Camera";

				$scope.ShowConfirmation = false;
				$scope.ShowSteps = true;
				$scope.SubmitFail = false;

				$scope.frontImage = '';
				$scope.backImage = '';
				$scope.email = "";
				$scope.notes = "";

				$scope.DepositFailed = false;
				$scope.NegativeAmount = false;
				$scope.BadFrontImage = "";
				$scope.BadBackImage = "";

				$scope.IsShowHide = true;

				//This check should happened in application. Application should disable RDC if FileReader is not available.
				if (!window.FileReader) {
					alert("Your browser doesn't support remote deposit!");
				}

				$scope.$watch('amount', function () {
					if ($scope.amount < 0) $scope.NegativeAmount = true;else $scope.NegativeAmount = false;
				});

				$scope.dataprovider.getRDCConfiguration().then(function (data) {
					//$scope.configuration = angular.copy(data);
					$scope.ShowEmail = data.ShowEmail == "Yes" ? true : false;
					$scope.ShowNotes = data.ShowNotes == "Yes" ? true : false;
					$scope.Accounts = data.Accounts;
				});

				$scope.readFile = function (side) {
					//Resize image
					canvasResize($scope.file, {
						width: 1200,
						height: 1200,
						crop: false,
						quality: 80,

						//When done, add preview and upload
						callback: function callback(result, width, height) {
							var id;
							if (side == "checkFront") {
								$scope.frontImage = result;
								$scope.NoFrontImage = false;
								id = 'F1';
							} else {
								$scope.backImage = result;
								$scope.NoBackImage = false;
								id = "F2";
							}

							if (typeof $scope.dataprovider.onImageReady != "undefined") //if service implements onImageReady function then call it
								{
									$scope.dataprovider.onImageReady(side, result).then(function (data) {
										if (data.Status != "Success") {
											if (side == "checkFront") {
												$scope.frontImage = "";
												$scope.BadFrontImage = data.Message;
												var el = document.getElementById('checkFrontWrap');
												el.parentNode.style.paddingBottom = '42.85%';
											} else {
												$scope.backImage = "";
												$scope.BadBackImage = data.Message;
												var el = document.getElementById('checkBackWrap');
												el.parentNode.style.paddingBottom = '42.85%';
											}
											return;
										}
									});
								}

							if ($scope.IsShowHide) {
								var el = document.getElementById(side + 'Wrap');
								//Find aspect ratio of image
								var aspect = height / width * 100;
								el.parentNode.style.paddingBottom = aspect + "%";
							} else {
								var bckgr = "url(" + result + ") center/contain no-repeat";
								var el = document.getElementById(side + 'Wrap');
								el.style.background = bckgr;

								//Find aspect ratio of image
								var aspect = height / width * 100;
								el.parentNode.style.paddingBottom = aspect + "%";
							}

							$scope.$apply();
						}
					});
				};

				//	
				$scope.onImageClick = function (id) {
					//alert(id);
					document.getElementById(id).click();
				};

				//	
				$scope.submit = function () {
					$scope.DepositFailed = false;
					$scope.NegativeAmount = false;

					$scope.RDCForm.$setDirty();

					if ($scope.frontImage == "") {
						$scope.NoFrontImage = true;
					}

					if ($scope.backImage == "") {
						$scope.NoBackImage = true;
					}

					if ($scope.NoBackImage || $scope.NoFrontImage) return;

					if (!$scope.RDCForm.$valid) {
						return;
					}

					if ($scope.amount < 0) {
						$scope.NegativeAmount = true;
						return;
					}

					//send check to server and if success show deposit conformation					        	

					var d = {};
					d.account = $scope.account;
					d.amount = $scope.amount;
					d.email = $scope.email;
					d.notes = $scope.notes;
					d.front = $scope.frontImage;
					d.back = $scope.backImage;

					$scope.dataprovider.Deposit(d).then(function (data) {
						//alert(data);

						if (data.Status == "Success") {
							$scope.ShowSteps = false;
							$scope.ShowConfirmation = true;

							$scope.Message1 = data.Message1;

							if (typeof data.Message2 != "undefined") $scope.Message2 = data.Message2;else $scope.Message2 = '';
						} else if (data.Status == "Fail") {
							$scope.ErrorMessage = data.ErrorMessage;
							$scope.DepositFailed = true;
						}
					});
				};

				$scope.cancel = function () {

					$scope.RDCForm.$setPristine();

					$scope.amount = "";
					$scope.account = "";
					$scope.DepositFailed = false;
					$scope.frontImage = '';
					$scope.backImage = '';
					$scope.NoBackImage = false;
					$scope.NoFrontImage = false;

					var el = document.getElementById('checkFrontWrap');
					el.parentNode.style.paddingBottom = '42.85%';
					var el = document.getElementById('checkBackWrap');
					el.parentNode.style.paddingBottom = '42.85%';
				};

				$scope.another = function () {
					$scope.cancel();

					$scope.RDCForm.$submitted = false;
					$scope.ShowSteps = true;
					$scope.ShowConfirmation = false;
				};
			}]
		};
	}

	exports['default'] = fisUiRwdRdc;
	module.exports = exports['default'];

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<form name=\"RDCForm\" novalidate role=\"form\" method=\"post\"  style=\"width:100%\">\n\t\n    <div ng-show=\"ShowSteps\"  class=\"fis-rwd-rdc-steps\">\n        <h1>{{'Check Deposit'|translate}}</h1>\n            <!-- step 1 -->\n            <table class=\"fis-rwd-rdc-step-table\">\n\n                <tr>\n                    <td class=\"fis-rwd-rdc-step\">1</td>\n                    <td class=\"fis-rwd-rdc-step-text\"> {{'Sign your check'|translate}} </td>\n                </tr>\n            </table>\n            <p class=\"control-label fis-rwd-control-label  fis-rwd-field\">\n                {{\"Write 'For Deposit Only' on the first signature line and sign your name below.\"|translate}}\n            </p>\n\n            <!-- step2 -->\n            <table class=\"fis-rwd-rdc-step-table\">\n                <tr>\n                    <td class=\"fis-rwd-rdc-step\"> 2 </td>\n                    <td class=\"fis-rwd-rdc-step-text\"> {{'Take or upload photos of your check'|translate}} </td>\n                </tr>\n            </table>\n\n            <div class = \"fis-rwd-rdc-front-check\">\n                <label for=\"checkFrontField\">{{'Front'|translate}}:</label>\n                <div class=\"checkWrapper\" id=\"W1\">\n                    <label id=\"checkFrontWrap\" class=\"fis-rwd-rdc-front\" ng-show=\"frontImage ==''\">\n                        <!-- label id=\"checkFrontWrapper\" -->\n                        <input type=\"file\" accept=\"image/*\" name=\"checkFrontField\" id=\"checkFront\" capture=\"camera\" ng-model=\"FrontSideFile\" ng-file-select />\n                    </label>\n\n                    <div class=\"fis-rwd-rdc-check-image\" ng-show=\"frontImage!=''\">\n                        <img ng-src=\"{{frontImage}}\" style=\"width:100%;\" id=\"F1\" ng-click=\"onImageClick('checkFront')\" />\n                    </div>\n\n                </div>\n\n                <div class=\"fis-rwd-rdc-check-error\" ng-show=\"NoFrontImage\"> - {{\"no front check image\"|translate}}</div>\n                <div class=\"fis-rwd-rdc-check-error\" ng-show=\"BadFrontImage!=''\">  - {{BadFrontImage|translate}}</div>\n            </div>\n                  \n            <div class = \"fis-rwd-rdc-back-check\">\n                <label for=\"checkBackField\">{{'Back'|translate}}:</label>\n                <div class=\"checkWrapper\" id=\"W2\">\n                  \n                    <!-- label id=\"checkBackWrapper\" ng-show=\"backImage==''\" -->\n                    <label id=\"checkBackWrap\" class=\"fis-rwd-rdc-back\" ng-show=\"backImage ==''\">\n                        <input type=\"file\" accept=\"image/*\" name=\"checkBackField\" id=\"checkBack\" capture=\"camera\" ng-model=\"BackSideFile\" ng-file-select />\n                    </label>\n \t\t\t           \n                    <div class=\"fis-rwd-rdc-check-image\" ng-show=\"backImage!=''\">\n                        <img ng-src=\"{{backImage}}\" style=\"width:100%;\" id=\"F2\" ng-click=\"onImageClick('checkBack')\" />\n                    </div>                                  \n               \t</div>\n                \n                <div  class=\"fis-rwd-rdc-check-error\"  ng-show=\"NoBackImage\" > - {{\"no back check image\"|translate}}</div>\n                <div  class=\"fis-rwd-rdc-check-error\"  ng-show=\"BadBackImage!=''\" >- {{BadBackImage|translate}}</div>\n            </div>\n\t\t\t\n            <!-- step 3 -->\n            <table class=\"fis-rwd-rdc-step-table\">\n                <tr>\n                    <td class=\"fis-rwd-rdc-step\"> 3</td>\n\n                    <td class=\"fis-rwd-rdc-step-text\"> {{'Deposit Info'|translate}} </td>\n                </tr>\n            </table>\n\n            <div class=\"row\">\n                <div class=\"col-xs-12 col-sm-2 col-md-2\">\n                    <label for=\"amount\" class=\" control-label fis-rwd-control-label  fis-rwd-field\"> {{'Amount'|translate}}:</label>\n                </div>\n\n                <div class=\"col-xs-12 col-sm-10 col-md-10\">\n                    <input type=\"number\" ng-model=\"amount\" id=\"amount\" name=\"amount\" required ng-model=\"amount\"\n                           class=\"form-control fis-rwd-form-control fis-rwd-field\" \n                           ng-class=\"{'fis-rwd-has-error': RDCForm.$submitted||SubmitFail}\" />\n\t\t\t\t\t\n                    <div ng-messages=\"RDCForm.amount.$error\" class=\"fis-rwd-errorText\">\n                        <div ng-message=\"required\">\n                            <div ng-show=\"RDCForm.$submitted\">\n                                - {{\"amount cannot be blank\"|translate}}\n                            </div>\n                        </div>\n                    </div>\n                    \n\t\t\t\t\t<div class =\"fis-rwd-rdc-step-error\"  ng-show=\"NegativeAmount\" > - {{\"amount must be greater than zero\"|translate}}</div>                        \n                    \n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-xs-12 col-sm-2 col-md-2\">\n                    <label for=\"account\" class=\" control-label fis-rwd-control-label  fis-rwd-field\">{{'Account'|translate}}:</label>\n                </div>\n\n                <div class=\"col-xs-12 col-sm-10 col-md-10\">\n                    <select ng-model=\"account\" id=\"account\" name=\"account\" required class=\"form-control fis-rwd-form-control fis-rwd-field\" ng-model=\"account\"\n                            ng-class=\"{'fis-rwd-has-error': RDCForm.$submitted||SubmitFail}\">\n                        <option ng-repeat=\"account in Accounts\"> {{account.name}} </option>\n                    </select>\n\n                    <div ng-messages=\"RDCForm.account.$error\" class=\"fis-rwd-errorText\">\n                        <div ng-message=\"required\">\n                            <div ng-show=\"RDCForm.$submitted\">\n                                - {{\"account name cannot be blank\"|translate}}\n                            </div>\n                        </div>\n                    </div>\n                    \n                </div>\n             </div>  \t          \n             \n\t        <div class=\"row\" ng-show=\"ShowEmail\">\n\t            <div class=\"col-xs-12 col-sm-2 col-md-2\">\n\t                <label for=\"amount\" class=\" control-label fis-rwd-control-label  fis-rwd-field\">Email:</label>\n\t            </div>\n\t            <div class=\"col-xs-12 col-sm-10 col-md-10\">\n\t                <input type=\"text\" ng-model=\"email\" id=\"email\" ng-model=\"email\"  class=\"form-control fis-rwd-form-control fis-rwd-field\" />\n\t            </div>           \n\t        </div>\n\t        \n\t        <div class=\"row\" ng-show=\"ShowNotes\">\n\t            <div class=\"col-xs-12 col-sm-2 col-md-2\">\n\t                <label for=\"notes\" class=\" control-label fis-rwd-control-label  fis-rwd-field\">Notes:</label>\n\t            </div>\n\t            <div class=\"col-xs-12 col-sm-10 col-md-10\">\n\t                <input type=\"text\" ng-model=\"notes\" id=\"notes\"  ng-model=\"notes\"  class=\"form-control fis-rwd-form-control fis-rwd-field\" />\n\t            </div>           \n\t        </div>  \t   \n\t                     \n\t\t\t<div class=\"fis-rwd-errorText\" ng-show=\"DepositFailed\" > {{ErrorMessage|translate}}</div>\n              \n        <div style=\"margin-bottom:15px;\">\n            <button type=\"submit\" class=\"btn btn-primary fis-rwd-btn-primary\" style=\"min-width:120px\" ng-click=\"submit()\">\n                {{\"Deposit Check\"|translate}}\n            </button>\n            <button type=\"reset\" class=\"btn btn-default fis-rwd-btn-default\" style=\"min-width:120px\" ng-click=\"cancel()\">\n                {{\"Cancel\"|translate}}\n            </button>\n        </div>\n\n    </div>\n\n    <!-- Depisit confirmation -->\n    <div ng-show=\"ShowConfirmation\">\n        <h1>{{\"Deposit Confirmation\"|translate}}</h1>\n        \n        <table style=\"width:80%\">\n        \t<tr>\n        \t\t<td style=\"width:40px\">\n        \t\t\t<img src=\"" + __webpack_require__(38) + "\"/>\t\t\t\n        \t\t</td>\n        \t\t<td class=\"fis-rwd-rdc-confirmation-td\">\n        \t\t\t{{Message1|translate}}\t\t\t\n        \t\t</td>\n        \t</tr>\n        \t\n        \t<tr>\n        \t\t<td colspan=\"2\" style=\"height:50px; \">\n        \t\t\t\n        \t\t</td> \t\t\n        \t</tr>\n        \t\n        \t<tr ng-if=\"Message2!=''\">\n        \t\t<td colspan=\"2\" class=\"fis-rwd-rdc-confirmation-td2\">\n        \t\t\t{{Message2|translate}} \n        \t\t</td> \t\t\n        \t</tr>\n        \t\n        \t<tr>\n        \t\t<td colspan=\"2\" class=\"fis-rwd-rdc-confirmation-td3\">\n\t\t\t        <button type=\"reset\" class=\"btn btn-primary fis-rwd-btn-primary\" ng-click=\"another()\">\n\t\t\t            {{\"Deposit Another Check\"|translate}}\n\t\t\t        </button>\n        \t\t</td> \t\t\n        \t</tr>\n        \t\n        </table>\n     </div>\n\n<!--\n<pre>\n{{configuration|json}}\nPristine: {{RDCForm.$pristine}}\nSubmitted: {{RDCForm.$submitted}}\n\namount.error:  {{RDCForm.amount.$error}}\naccountt.error:  {{RDCForm.account.$error}}\n</pre>\n-->\n\n</form>\n\n\n\t\t";

/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3NpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5NjYwMDM1ZC04ZWMzLTRiNmEtYmQwOC00YTAzOGJjODJmYTQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MERDNjYzQjBERjhDMTFFMzk2OTQ5RjVCODU5M0IyMEEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MERDNjYzQUZERjhDMTFFMzk2OTQ5RjVCODU5M0IyMEEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6YWVkYzFmZDItMTZiNi00ZjQxLTk3NzctNTUyN2I0YzIxZWVjIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjk2NjAwMzVkLThlYzMtNGI2YS1iZDA4LTRhMDM4YmM4MmZhNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PhvpSCsAAANLSURBVHjatJdLSJRRFMe/uWgmaA8mamGkprtIo5UVEaJQ1ELpHZJMi9CKdj3diBulyFVgtnJCiiCGpkWBoBgE5iZBy41pPsBFDzdOVDbS9L/wv3G4zPfN9znTgR98332cc+7jnHtvqHvkkONTwqAR1IIqUA6KWPcdzIIJMAziYMmP0jwfbXaDNnAC5Lu0KWI7TRN4AGKgE7z3Uq486opBDxgHZ9MYXwGLZMWqy2efceooDurALjAGLoEQy1bBC9AMdoJCsJ0UsqyZbVbZJ0QdY9Tpy4EaMAIqRVkUVHAP9HO9U6I+xbJ+tqlgHyOV1FmTyQHt5QDYwP/PoB5cAAuOf1lgn3rqcKhzwJ4JZa15XBifocdDztpliDpmhBNxuSekA3fFtJuRzznZy5w1E9rGHdsBHdctolNTjoxLJ5rEfytD9p8Dt8Vuj2Y57V7LERXR0WYcCDPJaEmC9iyMbGQS2uxS3y5CVNsMK4aNSTKvAu52KXpUjzi978Ael+h4KZJVo2JuNxLLYvTXQQO/d4BNLu2kjVrFDWjkzRqN60F0if9b4LVLW2mjSvFU0/ILzGcwlG5tS8BTsaGfg24PHfO0paVciSN1yUqvtugwnQIHRNk68Axs5f9HEMmgJyWO6iLlc4qP8FTbAgbBSZbfA/v4/QMcB8tB1k7xMmEuHCGXdp942GhZz1Hrab8q2lwEH3xGS9hcZJSluNSl0xRH+laUnRHf98ETn4MupS0ts4rXKCMHPTp+BXVpQlU7dS3ArEsbE4p3OEdkJy/5CU6LXf4FnAK/AzggbQwrHo9JFhxlEvGSPxzxFV67FgMY17qPibQfVwyJmEiPHT6V9Viz50c6xEVY21wyYdglYjfCtc611FG3yQWd8jjWG/GhaPwYlOXQeBl1Guk113WZiG6AaX5vY8Ipy5HxQep0aONmuitZgkezyWT6Zjua5XLUUUcF/5dpI+F2K54Eh4UTZib6fESHvdv7rJEvU/dkpneB9ni/WA6zMWcYsud5goas9FrOujjbRkT9NHWO+n0bai/38vbaSgN5vHA0iKfZN37rQ6rA5eTr5Zongr4NdYfLoJoHT9KqL+BdoCSN8ST7VFNHIpvXsQ6Xc//ref5XgAEAAsy/Z5my+BQAAAAASUVORK5CYII="

/***/ },
/* 39 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	   value: true
	});

	fisUiRwdDocumentClick.$inject = ['$document', 'SideNavData'];

	function fisUiRwdDocumentClick($document, SideNavData) {
	   'use strict';

	   return {

	      link: function link($scope) {
	         $document.on('click', function (event) {
	            if (event.target.className.indexOf("navbar-toggle") < 0 && event.target.className != 'icon-bar') {
	               // Note: this action does not include clicks on the menu;
	               // Menu items should close the menu themselves as needed
	               if ($scope.sideNavData.open) {
	                  var closeSideNav = true;
	                  var object = event.target;
	                  do {
	                     if (object.className.indexOf("fis-rwd-navbar") > -1) {
	                        closeSideNav = false;
	                     }
	                     object = object.parentNode;
	                  } while (object.tagName !== "BODY");
	                  // incase of mainside nav set the closeSideNav to false
	                  // and skip the toggling of the open button when a button
	                  // on workspace like accordion has been clicked
	                  if (document.querySelector(".fis-rwd-mainside-navigation") != null) {
	                     closeSideNav = false;
	                  }
	                  // Close the off-canvas menu
	                  if (closeSideNav) {
	                     $scope.sideNavData.toggle();
	                     $scope.$apply();
	                  }
	               }
	            }
	         });
	      }
	   };
	}

	exports['default'] = fisUiRwdDocumentClick;
	module.exports = exports['default'];

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }

	var _fisUiRwdDirectiveSegmentcontrol = __webpack_require__(41);

	exports.fisUiRwdSegmentControl = _interopRequire(_fisUiRwdDirectiveSegmentcontrol);

/***/ },
/* 41 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	   value: true
	});

	function fisUiRwdSegmentControl() {
	   'use strict';
	   return {
	      restrict: 'A',
	      link: function link(scope, element, attrs, ctrl) {
	         element.bind('click', function (event) {
	            angular.element(this.children).removeClass("fis-rwd-segment-selected");
	            angular.element(event.target).addClass("fis-rwd-segment-selected");
	         });
	      }
	   };
	}

	exports['default'] = fisUiRwdSegmentControl;
	module.exports = exports['default'];

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }

	var _fisUiRwdDirectiveTablepaginationlocal = __webpack_require__(43);

	exports.fisUiRwdPaginationLocal = _interopRequire(_fisUiRwdDirectiveTablepaginationlocal);

	var _fisUiRwdDirectiveTableColumnsize = __webpack_require__(45);

	exports.stRatio = _interopRequire(_fisUiRwdDirectiveTableColumnsize);

	var _fisUiRwdDirectiveTablepaginationserver = __webpack_require__(46);

	exports.fisUiRwdPaginationServer = _interopRequire(_fisUiRwdDirectiveTablepaginationserver);

	var _fisUiRwdDirectiveTableresponsive = __webpack_require__(48);

	exports.fisUiRwdDropdownMultiselect = _interopRequire(_fisUiRwdDirectiveTableresponsive);

	var _fisUiRwdDirectiveShowHideColumns = __webpack_require__(50);

	exports.fisUiRwdShowhideColumns = _interopRequire(_fisUiRwdDirectiveShowHideColumns);

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	   value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _fisUiRwdTablepaginationRecordcountHtml = __webpack_require__(44);

	var _fisUiRwdTablepaginationRecordcountHtml2 = _interopRequireDefault(_fisUiRwdTablepaginationRecordcountHtml);

	function fisUiRwdPaginationLocal() {
	   'use strict';
	   return {
	      restrict: 'EA',
	      require: '^stTable',
	      scope: {
	         stItemsByPage: '=?',
	         stDisplayedPages: '=?',
	         stPageTemplate: '=?'
	      },
	      template: _fisUiRwdTablepaginationRecordcountHtml2['default'],
	      link: function link(scope, element, attrs, ctrl) {

	         scope.stItemsByPage = scope.stItemsByPage ? +scope.stItemsByPage : 10;
	         scope.stDisplayedPages = scope.stDisplayedPages ? +scope.stDisplayedPages : 5;

	         scope.currentPage = 1;
	         scope.pages = [];

	         function redraw() {
	            var paginationState = ctrl.tableState().pagination;
	            var start = 1;
	            var end;
	            var i;
	            scope.currentPage = Math.floor(paginationState.start / paginationState.number) + 1;
	            scope.totalItemCount = paginationState.totalItemCount;
	            start = Math.max(start, scope.currentPage - Math.abs(Math.floor(scope.stDisplayedPages / 2)));
	            end = start + scope.stDisplayedPages;

	            if (end > paginationState.numberOfPages) {
	               end = paginationState.numberOfPages + 1;
	               start = Math.max(1, end - scope.stDisplayedPages);
	            }

	            scope.pages = [];
	            scope.numPages = paginationState.numberOfPages;

	            for (i = start; i < end; i++) {
	               scope.pages.push(i);
	            }
	         }

	         // table state --> view
	         scope.$watch(function () {
	            return ctrl.tableState().pagination;
	         }, redraw, true);

	         // scope --> table state (--> view)
	         scope.$watch('stItemsByPage', function () {
	            scope.selectPage(1);
	         });

	         scope.$watch('stDisplayedPages', redraw);

	         // view -> table state
	         scope.selectPage = function (page) {
	            if (page > 0 && page <= scope.numPages) {
	               ctrl.slice((page - 1) * scope.stItemsByPage, scope.stItemsByPage);
	            }
	         };
	         scope.nextPage = function () {

	            if (scope.numPages > scope.currentPage) {
	               var page = scope.currentPage + 1;
	               ctrl.slice((page - 1) * scope.stItemsByPage, scope.stItemsByPage);
	            }
	         };
	         scope.changePageCount = function () {
	            if (scope.currentPage == 1) return "1-" + scope.stItemsByPage;else if (scope.currentPage < scope.numPages) {
	               return scope.stItemsByPage * (scope.currentPage - 1) + 1 + "-" + scope.stItemsByPage * scope.currentPage;
	            } else if (scope.currentPage == scope.numPages) {
	               return scope.stItemsByPage * (scope.currentPage - 1) + 1 + "-" + scope.totalItemCount;
	               //   + scope.$parent.tableDataArr.length;
	            }
	         };
	         scope.totalRecords = function () {
	            //	var id= attrs.tableid;
	            //	console.log("Total number of records:"+ scope.totalItemCount +" for id" +   id);
	            return scope.totalItemCount;
	            //return scope.$parent.tableDataArr.length;
	         };
	         scope.previousPage = function () {

	            if (scope.currentPage > 1) {
	               var page = scope.currentPage - 1;
	               ctrl.slice((page - 1) * scope.stItemsByPage, scope.stItemsByPage);
	            }
	         };
	         scope.lastPage = function () {

	            if (scope.numPages > scope.currentPage) {
	               var page = scope.numPages;
	               ctrl.slice((page - 1) * scope.stItemsByPage, scope.stItemsByPage);
	            }
	         };
	         // select the first page
	         ctrl.slice(0, scope.stItemsByPage);
	      }

	   };
	}

	exports['default'] = fisUiRwdPaginationLocal;
	module.exports = exports['default'];

/***/ },
/* 44 */
/***/ function(module, exports) {

	module.exports = "<div class=\"pagination fis-ui-rwd-pagination\" ng-if=\"pages.length >= 2\">\n\t<ul class=\"pagination fis-ui-rwd-pagination\">\n\t\t<li ng-class=\"{ disabled : currentPage == 1 }\"><a href=\"\"\n\t\t\tng-click=\"selectPage(1)\">&lt;&lt;</a></li>\n\t\t<li ng-class=\"{ disabled : currentPage == 1 }\"><a href=\"\"\n\t\t\tng-click=\"previousPage()\">&lt;</a></li>\n\t\t<li><a href=\"\"><b>{{changePageCount()}}</b> of\n\t\t\t\t{{totalRecords()}}</a></li>\n\t\t<li ng-class=\"{ disabled : currentPage == numPages }\" class=\"ng-scope\"><a\n\t\t\thref=\"\" ng-click=\"nextPage()\">&gt;</a></li>\n\t\t<li ng-class=\"{ disabled : currentPage == numPages }\" class=\"ng-scope\"><a\n\t\t\thref=\"\" ng-click=\"lastPage()\">&gt;&gt;</a></li>\n\t</ul>\n</div>";

/***/ },
/* 45 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function stRatio() {
	  'use strict';

	  return {
	    link: function link(scope, element, attr) {
	      var ratio = +attr.stRatio;

	      element.css('width', ratio + '%');
	    }
	  };
	}

	exports['default'] = stRatio;
	module.exports = exports['default'];

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	   value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _fisUiRwdTablepaginationPagecountHtml = __webpack_require__(47);

	var _fisUiRwdTablepaginationPagecountHtml2 = _interopRequireDefault(_fisUiRwdTablepaginationPagecountHtml);

	function fisUiRwdPaginationServer() {
	   'use strict';
	   return {
	      restrict: 'EA',
	      require: '^stTable',
	      scope: {
	         stItemsByPage: '=?',
	         stDisplayedPages: '=?',
	         stPageTemplate: '=?',
	         stRetrieveTableData: '&'
	      },
	      template: _fisUiRwdTablepaginationPagecountHtml2['default'],
	      link: function link(scope, element, attrs, ctrl) {

	         scope.stItemsByPage = scope.stItemsByPage ? +scope.stItemsByPage : 10;
	         // scope.stItemsByPage = 1; // hard coded this value as we are
	         // displaying two tables at same page with different values of
	         // 'stItemsByPage'
	         scope.stDisplayedPages = scope.stDisplayedPages ? +scope.stDisplayedPages : 5;

	         scope.currentPage = 1;
	         scope.pages = [];

	         function redraw() {
	            var paginationState = ctrl.tableState().pagination;
	            paginationState.numberOfPages = scope.$parent.numberOfPages;
	            scope.totalItemCount = paginationState.totalItemCount;
	            var start = 1;
	            var end;
	            var i;
	            // scope.currentPage =
	            //Math.floor(paginationState.start / paginationState.number) + 1; //commented it for server side pagination

	            start = Math.max(start, scope.currentPage - Math.abs(Math.floor(scope.stDisplayedPages / 2)));
	            end = start + scope.stDisplayedPages;

	            if (end > paginationState.numberOfPages) {
	               end = paginationState.numberOfPages + 1;
	               start = Math.max(1, end - scope.stDisplayedPages);
	            }

	            scope.pages = [];
	            scope.numPages = paginationState.numberOfPages;
	            /*  if (typeof scope.$parent.tableDataArr != 'undefined')
	                 generatePagesArray(scope.currentPage, scope.$parent.tableDataArr.length,
	                    scope.stItemsByPage, scope.stDisplayedPages);	*/
	            if (scope.totalItemCount > 0) generatePagesArray(scope.currentPage, scope.totalItemCount, scope.stItemsByPage, scope.stDisplayedPages);

	            /*
	            for (i = start; i < end; i++)
	            {
	               scope.pages.push(i);
	            }
	            */
	         }
	         function generatePagesArray(currentPage, collectionLength, rowsPerPage, paginationRange) {

	            var pages = [];
	            //var totalPages = Math.ceil(collectionLength / rowsPerPage);
	            var totalPages = scope.$parent.numberOfPages;
	            var halfWay = Math.ceil(paginationRange / 2);
	            var position;

	            if (currentPage <= halfWay) {
	               position = 'start';
	            } else if (totalPages - halfWay < currentPage) {
	               position = 'end';
	            } else {
	               position = 'middle';
	            }

	            var ellipsesNeeded = paginationRange < totalPages;
	            var i = 1;
	            while (i <= totalPages && i <= paginationRange) {
	               var pageNumber = calculatePageNumber(i, currentPage, paginationRange, totalPages);

	               var openingEllipsesNeeded = i === 2 && (position === 'middle' || position === 'end');
	               var closingEllipsesNeeded = i === paginationRange - 1 && (position === 'middle' || position === 'start');
	               if (ellipsesNeeded && (openingEllipsesNeeded || closingEllipsesNeeded)) {
	                  scope.pages.push('...');
	               } else {
	                  scope.pages.push(pageNumber);
	               }
	               i++;
	            }
	            // return pages;
	         }
	         function calculatePageNumber(i, currentPage, paginationRange, totalPages) {
	            var halfWay = Math.ceil(paginationRange / 2);
	            if (i === paginationRange) {
	               return totalPages;
	            } else if (i === 1) {
	               return i;
	            } else if (paginationRange < totalPages) {
	               if (totalPages - halfWay < currentPage) {
	                  return totalPages - paginationRange + i;
	               } else if (halfWay < currentPage) {
	                  return currentPage - halfWay + i;
	               } else {
	                  return i;
	               }
	            } else {
	               return i;
	            }
	         }
	         // table state --> view
	         scope.$watch(function () {
	            return ctrl.tableState().pagination;
	         }, redraw, true);

	         // scope --> table state (--> view)
	         scope.$watch('stItemsByPage', function () {
	            scope.selectPage(1);
	         });

	         scope.$watch('stDisplayedPages', redraw);

	         // view -> table state
	         scope.selectPage = function (page) {
	            if (page > 0 && page <= scope.numPages) {
	               if (scope.stRetrieveTableData()) {
	                  scope.stRetrieveTableData()(page);
	                  ctrl.slice((page - 1) * scope.stItemsByPage, scope.stItemsByPage);
	                  scope.currentPage = page;
	               }
	            }
	         };
	         scope.nextPage = function () {

	            if (scope.numPages > scope.currentPage) {
	               var page = scope.currentPage + 1;
	               if (scope.stRetrieveTableData()) {
	                  scope.stRetrieveTableData()(page);
	                  ctrl.slice((page - 1) * scope.stItemsByPage, scope.stItemsByPage);
	                  scope.currentPage = page;
	               }
	            }
	         };
	         scope.previousPage = function () {

	            if (scope.currentPage > 1) {
	               var page = scope.currentPage - 1;
	               if (scope.stRetrieveTableData()) {
	                  scope.stRetrieveTableData()(page);
	                  ctrl.slice((page - 1) * scope.stItemsByPage, scope.stItemsByPage);
	                  scope.currentPage = page;
	               }
	            }
	         };
	         scope.lastPage = function () {

	            if (scope.numPages > scope.currentPage) {
	               var page = scope.numPages;
	               if (scope.stRetrieveTableData()) {
	                  scope.stRetrieveTableData()(page);
	                  ctrl.slice((page - 1) * scope.stItemsByPage, scope.stItemsByPage);
	                  scope.currentPage = page;
	               }
	            }
	         };
	         // select the first page
	         ctrl.slice(0, scope.stItemsByPage);
	      }

	   };
	}

	exports['default'] = fisUiRwdPaginationServer;
	module.exports = exports['default'];

/***/ },
/* 47 */
/***/ function(module, exports) {

	module.exports = "<div class=\"pagination fis-ui-rwd-pagination\" ng-if=\"pages.length >= 2\">\n\t<ul class=\"pagination fis-ui-rwd-pagination\">\n\t\t<li ng-class=\"{ disabled : currentPage == 1 }\"><a\n\t\t\tng-click=\"selectPage(1)\">&lt;&lt;</a></li>\n\t\t<li ng-class=\"{ disabled : currentPage == 1 }\"><a\n\t\t\tng-click=\"previousPage()\">&lt;</a></li>\n\t\t<li ng-repeat=\"page in pages track by $index\"\n\t\t\tng-class=\"{active: page==currentPage, disabled : page== '...' }\"><a\n\t\t\tng-click=\"selectPage(page)\">{{page}}</a></li>\n\t\t<li ng-class=\"{ disabled : currentPage == numPages }\" class=\"ng-scope\"><a\n\t\t\tng-click=\"nextPage()\">&gt;</a></li>\n\t\t<li ng-class=\"{ disabled : currentPage == numPages }\" class=\"ng-scope\"><a\n\t\t\tng-click=\"lastPage()\">&gt;&gt;</a></li>\n\t</ul>\n</div>";

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	   value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _fisUiRwdTableMutiselectDropdownHtml = __webpack_require__(49);

	var _fisUiRwdTableMutiselectDropdownHtml2 = _interopRequireDefault(_fisUiRwdTableMutiselectDropdownHtml);

	function fisUiRwdDropdownMultiselect() {
	   'use strict';
	   return {
	      restrict: 'E',
	      scope: {
	         options: '='
	      },
	      template: _fisUiRwdTableMutiselectDropdownHtml2['default'],
	      link: function link(scope, element, attrs) {

	         scope.setSelectedItem = function (e) {
	            e.stopPropagation();
	            var id = this.option.id;
	            scope.showHide(id);
	            return false;
	         };
	         scope.isChecked = function (val) {
	            if (val) return 'icon-ok';else return false;
	         };
	         scope.showHide = function (id, e) {
	            var val = scope.$parent.roles[id].checkValue;
	            if (val) scope.$parent.roles[id].checkValue = false;else scope.$parent.roles[id].checkValue = true;
	         };
	      }
	   };
	}

	exports['default'] = fisUiRwdDropdownMultiselect;
	module.exports = exports['default'];

/***/ },
/* 49 */
/***/ function(module, exports) {

	module.exports = "<div class='btn-group multiselect-dropdown' is-open=\"status.isopen\" uib-dropdown>\n      <button type=\"button\" class=\"btn btn-default uib-dropdown-toggle\" uib-dropdown-toggle ng-disabled=\"disabled\">\n        Show <span class=\"caret\"></span>\n      </button>\n\t<ul class='dropdown-menu dropdown-menu-custom' role=\"menu\" aria-labelledby='dropdownMenu'>\n\t\t<li ng-repeat='option in options'><a\n\t\t\tng-click='setSelectedItem($event);$event.stopPropagation();'\n\t\t\tng-model=\"option.checkValue\"><span\n\t\t\t\tng-class='isChecked(option.checkValue)'></span>{{option.name}}</a></li>\n\t</ul>\n</div>";

/***/ },
/* 50 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	   value: true
	});
	function fisUiRwdShowhideColumns() {
	   'use strict';
	   return {

	      link: function link(scope, element, attrs) {

	         scope.$watch(attrs.fisUiRwdShowhideColumns, function (value) {
	            if (value) element.css('display', 'table-cell');else element.css('display', 'none');
	         });
	      }
	   };
	}

	exports['default'] = fisUiRwdShowhideColumns;
	module.exports = exports['default'];

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }

	var _fisUiRwdDirectiveTabs = __webpack_require__(52);

	exports.fisUiRwdTabs = _interopRequire(_fisUiRwdDirectiveTabs);

	var _fisUiRwdServiceTabsManager = __webpack_require__(54);

	exports.TabsManager = _interopRequire(_fisUiRwdServiceTabsManager);

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	   value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _fisUiRwdTabsHtml = __webpack_require__(53);

	var _fisUiRwdTabsHtml2 = _interopRequireDefault(_fisUiRwdTabsHtml);

	fisUiRwdTabs.$inject = ['$timeout'];

	function fisUiRwdTabs($timeout) {
	   'use strict';
	   return {
	      restrict: 'AE',
	      replace: 'true',

	      scope: {
	         tabs: '=',
	         id: '&',
	         remove: '&',
	         select: '&',
	         move: '&',
	         active: '&',
	         initialize: '&'
	      },

	      template: _fisUiRwdTabsHtml2['default'],

	      link: function link($scope, $element, $attrs) {
	         /* window resize listener */
	         $scope.$on('resizable::resize', function () {
	            if ($scope.responsive == "yes") {
	               $timeout(function () {
	                  $scope.resizeTabs();
	               }, 100);
	            }
	         });

	         /* Trigger an initial resize and place watch */
	         if ($scope.responsive == "yes") {
	            /* Ugly, I know.  QA is reporting that the resize does not always get triggered in Firefox.  Hack for now. */
	            $scope.incrementalResizeTabs();

	            $scope.$watch('tabs', function (newVal, oldVal) {
	               $scope.incrementalResizeTabs();
	            }, true);
	         } else {
	            $timeout(function () {
	               /* 'display = none' in the partial was causing issues with the scope-element directive */
	               $scope.elemTabsMoreMenu[0].style.display = "none";
	               $scope.setMinWidth();
	            }, 100);

	            /* 'display = none' in the partial was causing issues with the scope-element directive */
	            $scope.elemTabsMoreMenu[0].style.display = "none";
	            $scope.setMinWidth();
	         }

	         /* If an application configured initialize exists then call it */
	         if ($scope.initialize()) {
	            $scope.initialize()($scope.elemNavTabs);
	         }
	      },
	      controller: ['$scope', '$location', '$element', '$attrs', '$state', 'TabsManager', function ($scope, $location, $element, $attrs, $state, TabsManager) {

	         /* set the responsive option for the tabs */
	         $scope.responsive = $attrs.responsive;

	         /* set the deleteOption for the tabs */
	         $scope.deleteOption = $attrs.deleteOption;

	         /* if supplied set the tab width */
	         $scope.tabWidth = $attrs.tabWidth;
	         $scope.currentTab = { id: $attrs.defaultTabId }; // default tab which will be selected first time
	         var firstLoad = true; // to load the content for first time
	         $scope.tabCounter = 1;
	         $scope.showButtons = $attrs.showButtons;

	         /* drag and drop */
	         $scope.handleDrop = function (item, bin) {
	            var tab = $scope.tabs[item];
	            $scope.tabs.splice(item, 1);
	            $scope.tabs.splice(bin, 0, tab);
	         };

	         $scope.incrementalResizeTabs = function () {
	            $timeout(function () {
	               $scope.resizeTabs();
	            }, 100);

	            $timeout(function () {
	               $scope.resizeTabs();
	            }, 200);

	            $timeout(function () {
	               $scope.resizeTabs();
	               TabsManager.register($attrs.tabs_group_id, $scope.tabs);
	            }, 500);
	         };

	         /* Resizes the tabs with the More menu functionality */
	         $scope.setMinWidth = function () {
	            var tabsWidth = 0;

	            var tabElements = $scope.elemNavTabs.children();
	            var tabElementsLength = tabElements.length;
	            angular.forEach(tabElements, function (tab, index) {
	               /* this skips the last item which is the More menu */
	               if (index + 1 !== tabElementsLength) {
	                  tabsWidth += tab.offsetWidth + 7;
	               }
	            });

	            $scope.elemNavTabs[0].style.minWidth = tabsWidth + 30 + "px";
	         };

	         /* Moves the tab to the first position in the array - used in the  More option */
	         $scope.moveTab = function (index) {

	            if ($scope.move()) {
	               $scope.move()(index);
	            } else {
	               var tab = $scope.tabs.splice(index, 1);
	               $scope.tabs.unshift(tab[0]);
	               $scope.updateCurrentTabInfo(tab[0]);
	            }
	         };

	         /* Removes the tab from the array - used in the delete tab option */
	         $scope.removeTab = function (index, visibility) {

	            if ($scope.remove()) {
	               $scope.remove()(index, visibility);
	            } else {
	               $scope.tabs.splice(index, 1);
	               if (visibility !== 'hidden') {
	                  $scope.currentTab = "";
	                  $scope.tabWorkspaceContent = "";
	                  $scope.template = { url: 'partials/tabs_delete.html' };
	               }
	            }
	         };

	         /* Selects the tab - generally onClick */
	         $scope.selectTab = function (tab) {

	            if ($scope.select()) {
	               $scope.select()(tab);
	            } else {
	               $scope.updateCurrentTabInfo(tab);
	            }
	         };

	         /* Selects the class for each tab */
	         $scope.activeTab = function (tab) {

	            if ($scope.active()) {
	               return $scope.active()(tab);
	            } else {
	               if ($scope.currentTab != undefined && tab.id == $scope.currentTab.id) {
	                  if (firstLoad == true) {
	                     $scope.tabWorkspaceContent = " " + tab.data;
	                     $scope.template = { url: tab.url };
	                     firstLoad = false;
	                  }
	                  return "active";
	               }
	               return "disable";
	            }
	         };

	         $scope.updateCurrentTabInfo = function (tab) {
	            $scope.currentTab = tab;
	            $scope.tabWorkspaceContent = " " + tab.data;
	            $scope.template = { url: tab.url };
	         };

	         $scope.addTab = function (tab) {
	            $scope.tabWorkspaceContent = 'Dynamic tab ' + $scope.tabCounter;
	            $scope.template = { url: 'partials/tabs/tab_default_partial.html' };
	            $scope.currentTab = TabsManager.AddTab($attrs.tabs_group_id, "New Tab-" + $scope.tabCounter, $scope.tabWorkspaceContent, 'TabsController', $scope.template);
	            $scope.tabCounter++;
	         };

	         $scope.addTabPartial = function () {
	            $scope.tabWorkspaceContent = 'Tab that was added dynamically using "partials/tab2_single_workspace.html" partial';
	            $scope.template = { url: 'partials/tabs_tab_single_workspace.html' };
	            $scope.currentTab = TabsManager.AddTabAsPartial($attrs.tabs_group_id, "New Tab from partial-" + $scope.tabCounter, $scope.tabWorkspaceContent, 'TabsController', $scope.template);
	            $scope.tabCounter++;
	         };

	         $scope.deleteTab = function () {
	            if ($scope.tabs != undefined && $scope.tabs.length > 2) {
	               TabsManager.RemoveTab($attrs.tabs_group_id, 2);
	               $scope.currentTab = "";
	               $scope.tabWorkspaceContent = "";
	               $scope.template = { url: 'partials/tabs_delete.html' };
	            }
	         };

	         /* Sets the More menu class */
	         $scope.setMoreMenuClass = function (index) {
	            return $scope.deleteOption === "yes" ? 'fis-rwd-tabs-more-menu-with-delete' : '';
	         };

	         /* Resizes the tabs with the More menu functionality */
	         $scope.resizeTabs = function () {

	            var divTabsWidth = $scope.elemNavTabs[0].offsetWidth - 15;

	            var tabWidth = 0;
	            var tabsWidth = 0;
	            /* needed to start with a small buffer */
	            var tabsVisibleWidth = 10;
	            var tabsVisibleCounter = 0;
	            var tabsHiddenCounter = 0;

	            $scope.elemTabsMoreMenu[0].style.display = "none";

	            /* array of More menu items */
	            var moreMenuElements = $scope.elemTabsMoreMenuDropdown.children();

	            /* array of all the Tabs */
	            var tabElements = $scope.elemNavTabs.children();
	            var tabElementsLength = tabElements.length;

	            angular.forEach(tabElements, function (tab, index) {
	               /* this skips the last item which is the More menu */
	               if (index + 1 !== tabElementsLength) {

	                  tab.style.display = "block";

	                  tabWidth = tab.offsetWidth + 7;
	                  tabsWidth += tabWidth;

	                  if (index === 0 || tabsWidth < divTabsWidth) {
	                     moreMenuElements[index].style.display = "none";
	                     tabsVisibleCounter++;
	                     tabsVisibleWidth += tabWidth;
	                  } else {
	                     tab.style.display = "none";
	                     moreMenuElements[index].style.display = "block";
	                     tabsHiddenCounter++;
	                  }
	               }
	            });

	            /* Final check to show More menu and adjust the visible tabs */
	            if (tabsHiddenCounter > 0) {

	               /* Show the More menu */
	               $scope.elemTabsMoreMenu[0].style.display = "block";
	               /* And get the More menu width */
	               var tabsMoreMenuWidth = $scope.elemTabsMoreMenu[0].offsetWidth;

	               if (tabsVisibleCounter === 1) {
	                  $scope.elemNavTabs[0].style.minWidth = tabsVisibleWidth + tabsMoreMenuWidth + 30 + "px";
	               } else {
	                  /* Add More menu width */
	                  tabsVisibleWidth += tabsMoreMenuWidth;

	                  /* Check to hide the last visible tab to make room for the More menu */
	                  if (tabsVisibleWidth > divTabsWidth) {
	                     tabElements[tabsVisibleCounter - 1].style.display = "none";
	                     moreMenuElements[tabsVisibleCounter - 1].style.display = "block";
	                  }

	                  /* if active tab is hidden then move to first position */
	                  angular.forEach(tabElements, function (tab, index) {
	                     if (index + 1 !== tabElementsLength) {
	                        if (tab.classList.contains("active")) {
	                           if (tab.style.display === "none") {
	                              $scope.moveTab(index);
	                           }
	                        }
	                     }
	                  });
	               }
	            }
	         };
	      }]
	   };
	}

	exports['default'] = fisUiRwdTabs;
	module.exports = exports['default'];

/***/ },
/* 53 */
/***/ function(module, exports) {

	module.exports = "\n<div>\n<div ng-if=\"showButtons =='yes'\">\n<button id=\"tabbutton1\" type=\"button\"\n\t\tclass=\"btn btn-primary fis-rwd-btn-primary fis-rwd-field fis-rwd-actions\" ng-model=\"template\" ng-click=\"addTab()\" >{{\"Add a tab\"|translate}}</button>\n\t\t\n<button id=\"tabbutton2\" type=\"button\"\n\t\tclass=\"btn btn-primary fis-rwd-btn-primary fis-rwd-field fis-rwd-actions\" ng-model=\"template\" ng-click=\"addTabPartial()\">{{\"Add a tab from partial\"|translate}}</button> \n\n \n<button id=\"tabbutton3\" type=\"button\"\t\n        class=\"btn btn-primary fis-rwd-btn-primary fis-rwd-field fis-rwd-actions\" ng-model=\"template\" ng-click=\"deleteTab()\">{{\"Delete third tab\"|translate}}</button>\n\n</div>\n<div class=\"fis-rwd-tabs\">   \t\n\t<div class=\"fis-rwd-nav-tabs-container\">\n\t\t<ul fis-ui-rwd-scope-element=\"elemNavTabs\" class=\"nav-tabs fis-rwd-nav-tabs\" style=\"height: 35px\" >\n\t\t\t<li ng-repeat=\"t in tabs\" ng-class=\"activeTab(t)\" ng-style=\"{'width': tabWidth}\" \n\t\t\t\t\tfis-ui-rwd-draggable fis-ui-rwd-droppable drop=\"handleDrop\" \n\t\t\t\t\tid=\"li{{$index}}\" ng-click=\"selectTab(t)\" >\n\t\t\t\t<span id=\"sp{{$index}}\">\n\t\t\t\t\t<a href=\"\" class=\"fis-rwd-tabs-text\" ng-class=\"{'fis-rwd-tabs-no-delete' : deleteOption !== 'yes'}\"> \n\t\t\t\t\t\t<span>{{t.title|translate}}</span>\n\t\t\t\t\t</a>\n\t\t\t\t\t<a ng-if=\"deleteOption == 'yes'\" href=\"\" ng-click=\"removeTab($index, 'visible'); $event.stopPropagation();\"\n\t\t\t\t\t\t\t\tclass=\"fis-rwd-tabs-close\"> \n\t\t\t\t\t\t<span class=\"icon-Close_tab xsm-ic fis-rwd-tabs-icon-close\"></span>\n\t\t\t\t\t</a>\n\t\t\t\t</span>\t\n\t\t\t</li>\n\t\t\t<li fis-ui-rwd-scope-element=\"elemTabsMoreMenu\" class=\"fis-rwd-tabs-more-menu dropdown\" uib-dropdown >\n\t\t\t\t<a class=\"dropdown-toggle fis-rwd-tabs-text\" uib-dropdown-toggle href=\"\" >\n\t\t\t\t\t<span>{{\"More\"|translate}} </span><b class=\"caret\"></b> \n\t\t\t\t</a>\n\t\t\t\t<ul fis-ui-rwd-scope-element=\"elemTabsMoreMenuDropdown\" class=\"dropdown-menu fis-rwd-dropdown-menu dropdown-menu-right\">\n\t\t\t\t\t<li ng-repeat=\"t in tabs\"  ng-model=\"template\" fis-ui-rwd-draggable id=\"sp{{$index}}\" >\n\t\t\t\t\t\t<a href=\"\" ng-click=\"moveTab($index)\" ng-class=\"setMoreMenuClass()\">{{t.title|translate}}</a>\n\t\t\t\t\t\t<a ng-if=\"deleteOption == 'yes'\" ng-click=\"removeTab($index, 'hidden')\" href=\"\" class=\"fis-rwd-tabs-more-menu-close\" tabindex=\"0\">\n\t\t\t\t\t\t\t<span class=\"icon-Close_tab xsm-ic fis-rwd-tabs-icon-close\"></span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li> \n\t\t\t\t</ul>\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n</div>\n<div  ng-include=\"template.url\"></div>\n</div>\n";

/***/ },
/* 54 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	TabsManager.$inject = ['$state'];

	function TabsManager() {
	    "use strict";

	    var map = new Object();
	    var tabCounter = 1;

	    this.register = function (tabs_group_id, tabs) {
	        map[tabs_group_id] = tabs;
	    };

	    function add(tabs_group_id, new_tab_title, content, cntrl, link, IsPartial) {
	        var tabs = map[tabs_group_id];
	        if (typeof tabs == "undefined") return;

	        var tab = new Object();
	        tab.title = "{{'" + new_tab_title + "'|translate}}";
	        tab.id = ".nt" + tabCounter;
	        tab.data = content;
	        tab.url = link.url;

	        tabs.unshift(tab);
	        tabCounter++;
	        return tab;
	    }

	    this.AddTab = function (tabs_group_id, new_tab_title, html_of_content, cntrl, url) {
	        return add(tabs_group_id, new_tab_title, html_of_content, cntrl, url, false);
	    };

	    this.AddTabAsPartial = function (tabs_group_id, new_tab_title, html_of_content, cntrl, partial_file_name) {
	        return add(tabs_group_id, new_tab_title, html_of_content, cntrl, partial_file_name, true);
	    };

	    this.RemoveTab = function (tabs_group_id, tab_position) {
	        var tabs = map[tabs_group_id];
	        if (typeof tabs != "undefined" && tabs.length > 2) {
	            tabs.splice(tab_position, 1);
	        }
	    };
	}

	exports["default"] = TabsManager;
	module.exports = exports["default"];

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }

	var _fisUiRwdDirectiveWorkspaceResize = __webpack_require__(56);

	exports.fisUiRwdWorkspaceResize = _interopRequire(_fisUiRwdDirectiveWorkspaceResize);

/***/ },
/* 56 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	   value: true
	});

	fisUiRwdWorkspaceResize.$inject = ['$window', '$timeout', 'SideNavData', 'MainSideNavData', '$injector'];

	function fisUiRwdWorkspaceResize($window, $timeout, SideNavData, MainSideNavData, $injector) {
	   'use strict';

	   return {

	      link: function link($scope) {
	         angular.element($window).on('resize', function (e) {
	            var rScope = $injector.get('$rootScope');
	            if (rScope) {
	               /* Name-spacing events with name of directive + event to avoid collisions */
	               rScope.$broadcast('resizable::resize');
	               $scope.setMarginPosition();
	               $scope.calculateMinimumWorkspaceHeight();
	               $timeout(function () {
	                  $scope.$apply();
	               });
	            }
	         });

	         // Trigger an initial resize
	         $timeout(function () {
	            angular.element($window).triggerHandler('resize');
	         }, 500);
	      },
	      controller: ['$scope', '$window', '$timeout', '$element', '$attrs', function ($scope, $window, $timeout, $element, $attrs) {

	         // Data for side nav
	         $scope.sideNavData = SideNavData;
	         $scope.mainSideNavData = MainSideNavData;

	         $scope.checkSideNavOpenForBody = function () {
	            // Incase of  Main side Nav overflow will be applied when either text or icons are present or both are present.
	            if ($scope.sideNavData.open || $scope.mainSideNavData.getWidth() > 0) {
	               return "fis-rwd-body-overflow";
	            }

	            return "";
	         };

	         $scope.checkSideNavOpenForWorkspace = function () {
	            if ($scope.sideNavData.open) {
	               return "fis-rwd-workspace-position";
	            }

	            return "";
	         };

	         // set the margin left for the workspace. Workspace is positioned next to mainside nav,get the width of
	         //main side nav and use it to set the workspace margin left
	         $scope.setMarginPosition = function () {

	            var bodyWidth = 0;
	            var mainSideNavWidth = 0;
	            var workSpaceWidth = 0;
	            var prevMarginLeft = 0;
	            // Total width
	            bodyWidth = document.body.offsetWidth;
	            prevMarginLeft = $scope.mainSideNavData.prevMarginLeft;
	            if (document.querySelector(".fis-rwd-mainside-navigation") != null) {
	               mainSideNavWidth = document.querySelector(".fis-rwd-mainside-navigation").offsetWidth;
	               workSpaceWidth = bodyWidth - mainSideNavWidth;
	               // prevent assigning the same value
	               if (prevMarginLeft != mainSideNavWidth) {
	                  document.querySelector(".fis-rwd-workspace-realign").style.marginLeft = mainSideNavWidth + 'px';
	                  $scope.mainSideNavData.prevMarginLeft = mainSideNavWidth;
	               }
	            }
	         };

	         /* Calculates the minimum workspace height to ensure it extends to the bottom of the browser window */
	         $scope.calculateMinimumWorkspaceHeight = function () {

	            /* use the WEB API instead of jQuery object */
	            var workspace = document.querySelector(".fis-rwd-workspace");

	            /* use the WEB API instead of jQuery object */
	            var footer = document.querySelector(".fis-rwd-footer");

	            if ($scope.sideNavData.open) {
	               /* use the greater of the off-canvas height or workspace height */
	               var minWorkspaceHeight = Math.max(document.querySelector(".navbar-collapse").clientHeight, $window.innerHeight - workspace.offsetTop);
	               $scope.minWorkspaceHeight = minWorkspaceHeight + "px";
	            } else {
	               if (footer == null || typeof footer == 'undefined') $scope.minWorkspaceHeight = $window.innerHeight - workspace.offsetTop + "px";else $scope.minWorkspaceHeight = $window.innerHeight - workspace.offsetTop - footer.offsetHeight + "px";
	            }
	         };
	      }]
	   };
	}

	exports['default'] = fisUiRwdWorkspaceResize;
	module.exports = exports['default'];

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }

	var _fisUiRwdDirectiveTimeout = __webpack_require__(58);

	exports.fisUiRwdTimeout = _interopRequire(_fisUiRwdDirectiveTimeout);

	var _fisUiRwdServiceTimeoutservice = __webpack_require__(60);

	exports.FisRwdTimeoutService = _interopRequire(_fisUiRwdServiceTimeoutservice);

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
			value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _fisUiRwdTimeoutdialogHtml = __webpack_require__(59);

	var _fisUiRwdTimeoutdialogHtml2 = _interopRequireDefault(_fisUiRwdTimeoutdialogHtml);

	/* Timeout directive 
	 * To display warning modal when user should be notified
	 * about the remaining time before session timeout
	 * */

	fisUiRwdTimeout.$inject = ['$uibModal', 'FisRwdTimeoutService', '$translate'];

	function fisUiRwdTimeout($uibModal, FisRwdTimeoutService, $translate) {
			return {
					restrict: 'E',
					template: _fisUiRwdTimeoutdialogHtml2['default'],
					scope: {
							fisRwdSessionDialogCtrl: "@"
					},

					controller: ['$scope', '$uibModal', 'FisRwdTimeoutService', function ($scope, $uibModal, FisRwdTimeoutService) {

							$scope.$translate = $translate;

							$scope.$on("fis.rwd.dsk.session.expiring", handleWarning);
							$scope.$on("fis.rwd.dsk.session.expired", handleTimeout);

							function closeModals() {
									if ($scope.warning) {
											$scope.warning.close();
											$scope.warning = null;
									}

									if ($scope.timedout) {
											$scope.timedout.close();
											$scope.timedout = null;
									}
							};

							function handleWarning() {
									closeModals();
									$scope.warning = $uibModal.open({
											templateUrl: 'fis-rwd-warning-dialog.html',
											backdrop: 'static',
											windowClass: 'fis-rwd-session-timeout',
											controller: $scope.fisRwdSessionDialogCtrl
									});
							};

							function handleTimeout() {
									//closeModals(); // this should be called if any other feature is implemented here

									// Any other feature can be added as part of framework
									//ex: displaying another modal by adding the template in partial
							};
					}]
			};
	}

	exports['default'] = fisUiRwdTimeout;
	module.exports = exports['default'];

/***/ },
/* 59 */
/***/ function(module, exports) {

	module.exports = "\t\n<script type=\"text/ng-template\" id=\"fis-rwd-warning-dialog.html\" >\n\t  <div class=\"modal-header\">\n\t\t<h4 class=\"session-modal-title\" >{{\"warning-header\"|translate}}</h4>\n\t  </div>\n\t   <div class=\"modal-body\">\n            {{\"timeout-text-one\"|translate}} <br /><b>{{countDownText | date: countdownFormat : 'UTC'}}</b>. <br /> <br /> {{\"timeout-text-two\"|translate}}\n        </div>\n        <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-primary fis-rwd-btn-primary\" ng-click=\"extendAppSession()\">{{\"continue-session\"|translate}}</button>\n\t\t\t<button type=\"button\" class=\"btn btn-default fis-rwd-btn-default\" ng-click=\"goBackToLogin()\">{{\"end-session\"|translate}}</button>\n        </div>\n</script>\n<script type=\"text/ng-template\" id=\"fis-rwd-timeout-dialog.html\" >\n\t\t<div class=\"modal-header\">\n\t\t\t<h4 class=\"session-modal-title\" >Session Timed Out</h4>\n\t\t</div>\n\t   <div class=\"modal-body\">\n            <span>Due to inactivity your session has timed out. Please sign in again.</span>\n        </div>\n\t\t<div class=\"modal-footer\">\n            <div style=\"text-align:center;\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-douefault fis-rwd-btn-default\" ng-click=\"goBackToLogin()\">Sign in</button>\n\t\t\t</div>\n        </div>\n</script>";

/***/ },
/* 60 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	FisRwdTimeoutService.$inject = ['$rootScope', '$timeout'];

	function FisRwdTimeoutService($rootScope, $timeout) {

		// Private vars
		var _timeoutObj = null;
		var _warningTimer = null;
		var _timeoutTimer = null;
		var _countdownTimer = null;
		var _warningStartTime;
		var _countDown;

		return {
			startTimer: startTimer,
			resetTimer: resetTimer
		};

		function startTimer(tObj) {
			_timeoutObj = tObj;
			resetTimer();
		};

		function resetTimer() {
			_warningStartTime = _timeoutObj.sessionTimeout - _timeoutObj.notificationDuration;
			_countDown = _timeoutObj.notificationDuration / 1000;
			if (_countdownTimer) {
				$timeout.cancel(_countdownTimer);
			};

			if (_warningTimer) {
				$timeout.cancel(_warningTimer);
			};
			_warningTimer = $timeout(function () {
				startCoundown();
				$rootScope.$broadcast("fis.rwd.dsk.session.expiring");
			}, _warningStartTime);

			if (_timeoutTimer) {
				$timeout.cancel(_timeoutTimer);
			};
			_timeoutTimer = $timeout(function () {
				$rootScope.$broadcast("fis.rwd.dsk.session.expired");
			}, _timeoutObj.sessionTimeout);
		};

		function startCoundown() {
			if (_countDown < 0) {
				_countDown = 0;
				return;
			} else {
				$rootScope.countDownText = _countDown * 1000;
				_countDown--;
				_countdownTimer = $timeout(function () {
					startCoundown();
				}, 1000);
			}
		};
	}

	exports['default'] = FisRwdTimeoutService;
	module.exports = exports['default'];

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }

	var _fisUiRwdDirectiveUserdropdown = __webpack_require__(62);

	exports.fisUiRwdUserDropdownMenu = _interopRequire(_fisUiRwdDirectiveUserdropdown);

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _fisUiRwdUserdropdownHtml = __webpack_require__(63);

	var _fisUiRwdUserdropdownHtml2 = _interopRequireDefault(_fisUiRwdUserdropdownHtml);

	fisUiRwdUserDropdownMenu.$inject = ['$translate'];

	function fisUiRwdUserDropdownMenu($translate) {
	    "use strict";

	    return {
	        restrict: 'E',
	        replace: 'true',
	        scope: {
	            userinfo: '='
	        },
	        template: _fisUiRwdUserdropdownHtml2['default'],
	        controller: ['$scope', function ($scope) {
	            $scope.userEvaluateAction = function (linkItem, event) {
	                return $scope.$eval(linkItem.action);
	            };
	        }]
	    };
	}

	exports['default'] = fisUiRwdUserDropdownMenu;
	module.exports = exports['default'];

/***/ },
/* 63 */
/***/ function(module, exports) {

    module.exports = "\n<span  uib-dropdown>\n\t<a href=\"\" class=\"dropdown-toggle\" uib-dropdown-toggle><span class=\"fis-rwd-uname fis-rwd-lg-user\">{{userinfo.firstName+ \" \"+userinfo.lastName}}\n\t\t</span> <b class=\"caret fis-rwd-lg-user\"></b><span class=\"icon-Person_Customer sm-ic fis-rwd-sm-user\"></span></a>\n\t<ul class=\"dropdown-menu fis-rwd-dropdown-menu fis-rwd-dropdown-right\">\n\t\t<li >\n\t\t\t\n\t\t\t<div class=\"fis-rwd-user-icon-ll-row clearfix\">\n\t\t\t\t<div class=\"fis-rwd-user-icon-div\">\n\t\t\t\t\t<span ng-if=\"userinfo.profileImg == ''\" class=\"icon-Person_Customer fis-rwd-user-icon xlrg-ic\"></span>\n\t\t\t\t\t<img ng-if=\"userinfo.profileImg != ''\" ng-src=\"{{userinfo.profileImg}}\" class=\"fis-rwd-user-img\" />\n\t\t\t\t</div>\n\t\t\t\t<div class=\"fis-rwd-user-last-login-div\">\n\t\t\t\t\t<span class=\"fis-rwd-uname fis-rwd-sm-user\">{{userinfo.firstName+ \" \"+userinfo.lastName}}</span>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<span>{{\"last sign on\" | translate}}: </span>\n\t\t\t\t\t\t<span class=\"fis-rwd-ll-span\">{{userinfo.lastLogin | date:'MM/dd/yyyy - h:mma'}}</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</li>\n\t\t<li ng-repeat=\"link in userinfo.links\">\n\t\t\t<a href=\"\" ng-click=\"userEvaluateAction(link, $event);\">\n\t\t\t\t<span ng-class=\"link.icon\" class=\"fis-rwd-user-info-list-icon\"></span>\n\t\t\t\t<span>{{link.desc | translate}}</span>\n\t\t\t</a>\n\t\t\n\t\t</li>\n\t</ul>\n</span>";

/***/ },
/* 64 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_64__;

/***/ }
/******/ ])
});
;