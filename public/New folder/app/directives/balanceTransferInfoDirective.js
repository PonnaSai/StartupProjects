(function () {
    var app = angular.module('bTransfer');
    app.directive('balanceTransferInfo', function () {
        return {
            restrict: 'E',
            scope: {
                number: '=',
                cardTypes: '=',
                states: '=',
                transaction: '=',
                required: '=',
                disabled: '=',
                copyAccount: '='
            },
            templateUrl: 'app/templates/balanceTransferInfo.html',
            link: function ($scope) {

                $scope.$watch('transaction', function (newValue) {
                    if ($scope.transaction && $scope.copyAccount)
                        $scope.verifyAccount = $scope.transaction.accountNoPayOff;
                    else
                        $scope.verifyAccount = "";
                });

                $scope.$on('validateBalanceTranfer', function (e, data) {
                    $scope.$emit("validatedBalanceTransfer", validate(data));
                });

                function validate(data) {
                    if ($scope.required || $scope.transaction.accountNoPayOff) {
                        var errors = [];
                        var errorMsg = "";

                        if ($scope.number)
                            errorMsg = "Balance Transfer " + $scope.number;

                        var phonePattern = new RegExp("((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}");

                        if (!$scope.transaction.payeeName || $scope.transaction.payeeName == "") {
                            errors.push(errorMsg + " Creditor Name is required.");
                        }

                        if (!$scope.transaction.payeeAddress || $scope.transaction.payeeAddress == "") {
                            errors.push(errorMsg + " Address is required.");
                        }

                        if (!$scope.transaction.payeeCity || $scope.transaction.payeeCity == "") {
                            errors.push(errorMsg + " City is required.");
                        }

                        if (!$scope.transaction.payeeState || $scope.transaction.payeeState == "") {
                            errors.push(errorMsg + " State is required.");
                        }

                        if (!$scope.transaction.payeeZip || $scope.transaction.payeeZip == "") {
                            errors.push(errorMsg + " Zip is required.");
                        }
                        else if (!isValidZip($scope.transaction.payeeZip)) {
                            errors.push(errorMsg + " invalid Zip.");
                        }

                        if ($scope.transaction.payeePhone && $scope.transaction.payeePhone != ""
                            && !isValidPhone($scope.transaction.payeePhone)) {
                            errors.push(errorMsg + " Phone number must be in one of these (999) 999-9999 or 123-456-7890 or 123.456.7890 or 1234567890.");
                        }

                        if (!$scope.transaction.cardTypeID || $scope.transaction.cardTypeID == "") {
                            errors.push(errorMsg + " Account Type is required.");
                        }

                        if (!$scope.transaction.accountNoPayOff || $scope.transaction.accountNoPayOff == "" || !$scope.verifyAccount || $scope.verifyAccount == "") {
                            errors.push(errorMsg + " Account and Verify Account are required.");
                        }
                        else if ($scope.transaction.accountNoPayOff !== $scope.verifyAccount) {
                            errors.push(errorMsg + " Account and Verify Account are not matching.");
                        }
                        else if (data && data.accountNoTransferTo == $scope.transaction.accountNoPayOff) {
                            errors.push(errorMsg + " Transfer between same accounts is not allowed.");
                        }

                        if ($scope.transaction.cardTypeID == 1 && !isValidAccount($scope.transaction.accountNoPayOff)) {
                            errors.push(errorMsg + " Account is not valid.");
                        }

                        if (!$scope.transaction.balance || $scope.transaction.balance == "") {
                            errors.push(errorMsg + " Amount is required.");
                        }
                        else if (!isValidAmount($scope.transaction.balance)) {
                            errors.push(errorMsg + " Amount is not valid.");
                        }

                        return errors;
                    }
                }

                function isValidZip(zip) {
                    return /^\d{5}(-\d{4})?$/.test(zip);
                }

                function isValidPhone(number) {
                    return /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/.test(number);
                }

                function isValidAmount(amount) {
                    return /^\d+(\.\d{1,2})?$/.test(amount);
                }

                function isValidAccount(accountNumber) {
                    if (accountNumber && accountNumber !== "") {
                        var cardNumber = accountNumber.trim().replace(" ", "");

                        var checkSum = 0;

                        for (var i = cardNumber.length - 1; i >= 0; i--) {
                            var workInt = (1 + ((cardNumber.length - 1 - i) % 2)) * parseInt(cardNumber.substring(i, i + 1));
                            if (workInt >= 10) {
                                checkSum = checkSum + workInt + 1;
                            } else {
                                checkSum += workInt;
                            }
                        }

                        return (checkSum % 10) == 0;
                    }
                }
            }
        }
    });

    app.directive('allowOnlyNumbers', function () {
        return {
            restrict: 'A',
            link: function (scope, elm, attrs, ctrl) {
                elm.on('keydown', function (e) {
                    if ($.inArray(e.keyCode, [46, 8, 9, 27, 13]) !== -1 ||
                        // Allow: Ctrl/cmd+A
                        (e.keyCode == 65 && (e.ctrlKey === true || e.metaKey === true)) ||
                        // Allow: Ctrl/cmd+C
                        (e.keyCode == 67 && (e.ctrlKey === true || e.metaKey === true)) ||
                        // Allow: Ctrl/cmd+X
                        (e.keyCode == 88 && (e.ctrlKey === true || e.metaKey === true)) ||
                        // Allow: home, end, left, right
                        (e.keyCode >= 35 && e.keyCode <= 39)) {
                        // let it happen, don't do anything
                        return;
                    }
                    // Ensure that it is a number and stop the keypress
                    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                        e.preventDefault();
                    }
                });
            }
        }
    });
})();