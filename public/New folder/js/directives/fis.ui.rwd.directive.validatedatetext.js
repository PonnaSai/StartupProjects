var fisUiRwdStarterKit = angular.module('fisUiRwdStarterKit');

fisUiRwdStarterKit.directive('fisNgValidateDateText', function ($filter, $log, uibDatepickerPopupConfig) {
    // $log.debug("compiling FisNgValidateDateTextDrtv");
    "use strict";
    
    function datePickerToMomentFormat (datepickerStr) {
        var retval = datepickerStr.toUpperCase();
        return retval;
    }
    
    function placeholderToMomentFormat (placeholderStr) {
        return placeholderStr;
    }
    
    function notEmpty (val) {
        var retval = ((val !== null) && (val !== undefined) && (val !== ""));
        return retval;
    }
    
    function momentFormatToRegularExpression (momentFormat) {
        var regExpText = "^" +
            
            momentFormat.replace(new RegExp("([\\:\\;\\.\\,\\-\\/\\\\])", "g"), "\\$1").replace("YYYY",
                "((?!0000)\\d{4})").replace("YY", "(0[1-9]|[1-9]\\d)").replace("DD",
                "(0?[1-9]|[12][0-9]|3[0-1])").replace("MM", "(0?[1-9]|1[0-2])") +

            // note: handling month names (MMM and MMMM) will come later when needed
            "$";
        
        var regExp = new RegExp(regExpText, "");
        
        return regExp;
    }
    
    return {
        restrict: 'A',
        require: 'ngModel',
        // priority: 99999,
        link: function (scope, element, attributes, control) {
            // $log.debug("linking FisNgValidateDateTextDrtv to="+attributes.name);
            
            function validateDate (modelValue) {
                // var dbgCheckValue = "";
                // the modelValue has already been converted to a (possibly invalid) date object so we use
                // viewvalue instead
                var value = control.$viewValue;
                // $log.debug("FisNgValidateDateTextDrtv: model="+attributes.ngModel+"= change detected");
                
                var format;
                if (notEmpty(attributes.datepickerPopup)) {
                    format = datePickerToMomentFormat(attributes.datepickerPopup);
                } else if (uibDatepickerPopupConfig && notEmpty(uibDatepickerPopupConfig.datepickerPopup)) {
                    format = datePickerToMomentFormat(uibDatepickerPopupConfig.datepickerPopup);
                } else if (notEmpty(attributes.placeholder)) {
                    format = placeholderToMomentFormat(attributes.placeholder);
                } else {
                    format = "MM/DD/YYYY";
                }
                
                var regExp = control.dateFormatRegExp;
                
                if (!regExp) {
                    regExp = momentFormatToRegularExpression(format);
                    control.dateFormatRegExp = regExp;
                }
                
                // note: it appears that when date has not been changed by user entry, angular or the date
                // popup
                // sets control.$viewValue to a Date object. If this is the case then we assume the date
                // object
                // has previously been validated and skip validating it.
                // if it is a string we validate
                // note: we consider empty string valid so we can reset the date
                // (ng-required will force user to enter something at which time we validate what they enter)
                if ((typeof value === "string") && (value.trim().length > 0)) {
                    // If we had a format then we should have built a regular expression to validate the form
                    // of the date
                    // if we have that then validate for form
                    // if not assume the form is valid and have moment validate
                    var wasValid = !(control.$error.date);
                    var isValid = wasValid;
                    if (regExp) {
                        var matches = value.match(regExp);
                        isValid = ((matches !== undefined) && (matches !== null) && (1 <= matches.length));
                    }
                    
                    // If we have not invalidated yet then
                    // the input must be a text string that is date format valid (or we had no format to
                    // validate against)
                    // so further validate the string to guarantee it contains a real date value using the
                    // moment api
                    if (isValid) {
                        var dt = moment(value, format);
                        isValid = dt.isValid();
                        // dbgCheckValue = dt.format();
                    }
                    
                    // note: at this time we don't want to have different
                    // error messages or validation style classes for the same control
                    // so all validation mechanisms (form, moment, and datePicker/Popup)
                    // set the same validity value called 'date'
                    if (isValid != wasValid) {
                        // $log.debug("FisNgValidateDateTextDrtv: value="+value+"= wasValid="+wasValid+"=
                        // isValid="+isValid+"=");
                        control.$setValidity('date', isValid);
                    }
                    
                    // $log.debug("FisNgValidateDateTextDrtv: model="+attributes.ngModel+"= value="+value+"=
                    // reformat="+dbgCheckValue+"= valid="+isValid+"= wasValid="+wasValid+"=");
                }
                // leave value unchanged - we just tell the form whether it is valid or not
                return modelValue;
            } // End function validateDate()
            
            // add to the end of parser chain so our validation has last say and overrides datepicker-popup
            control.$parsers.push(validateDate);
        } // End link func
    }; // End construction record
});
