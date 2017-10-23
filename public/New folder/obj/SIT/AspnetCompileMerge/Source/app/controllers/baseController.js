(function () {

    var app = angular.module('bTransfer');

    app.controller('baseController', ['$scope', '$window', 'dataService', baseController]);

    function baseController($scope, $window, dataService) {
        $scope.canOverride = false;
        $scope.displayPromoCode = false;
        $scope.states = [];
        $scope.cardTypes = [];
        $scope.fromAccount = {};

        $scope.baseInitialize = function (fromAccount) {
            $scope.clearMessages();

            $scope.fromAccount = fromAccount;

            if ($scope.fromAccount) {
                if ($scope.fromAccount.hostSystem == "FS" || $scope.fromAccount.hostSystem == "FM")
                    $scope.displayPromoCode = false;
                else
                    $scope.displayPromoCode = true;
            }

            if ($scope.cardTypes.length == 0) {
                dataService.getCardTypes()
                .then(function (cardTypes) {
                    $scope.cardTypes = cardTypes;
                });
            }

            if ($scope.states.length == 0) {
                dataService.getStates()
                .then(function (states) {
                    $scope.states = states.slice(1);
                });
            }
        }

        $scope.clearMessages = function () {
            $scope.messages = [];
            $scope.warnings = [];
            $scope.errors = [];
        }

        $scope.validate = function () {
            $scope.clearMessages();

            if ($scope.displayPromoCode) {
                if ($scope.fromAccount.promoCode
                    && $scope.fromAccount.promoCode != ""
                    && !isValidPromoCode($scope.fromAccount.promoCode)) {
                    $scope.errors.push("Invalid Promo Code.");
                }
            }

            if (!$scope.fromAccount.postingIndicator || $scope.fromAccount.postingIndicator == "") {
                $scope.errors.push("Processing Type is required.");
            }
            else if (!isValidProcessingType($scope.fromAccount.postingIndicator)) {
                $scope.errors.push("Invalid Processing Type.");
            }

            $scope.$broadcast('validateBalanceTranfer', $scope.fromAccount);
        }

        $scope.$on('validatedBalanceTransfer', function (e, data) {
            if (data) {
                data.forEach(function (item, index, arr) {
                    $scope.errors.push(item);
                });
            }
        });

        $scope.reset = function (location) {
            $window.location.href = location;
        }

        $scope.inquiry = function () {
            $scope.errors = [];

            dataService.getCount($scope.fromAccount.accountNoTransferTo)
            .then(function (count) {
                if (count == 0) {
                    $scope.errors.push('There is no History for this Account.');
                }
                else if (count == 1) {
                    $window.location.href = 'Inquiry';
                }
                else if (count > 1) {
                    $window.location.href = 'SelectTransaction?accountNumber=' + $scope.fromAccount.accountNoTransferTo;
                }
            }).catch(function (response) {
                if (response.status == 401) {
                    $window.location.href = 'Inquiry';
                }
            });
        }

        $scope.successCallBack = function (response, transaction) {
            var msg = "Transfer From Account "
                + transaction.fromAccount.accountNoTransferTo
                + " To Account " + transaction.accountNoPayOff
                + " for $" + transaction.balance;

            if (response.transactionStatus == "Error") {
                $scope.errors.push(response.responseMessage);
            }
            else if (response.transactionStatus == "Deleted") {
                $scope.messages.push("Transaction Deleted.");
            }
            else {
                $scope.messages.push(msg + " " + response.transactionStatus + ".");
            }

            $scope.canOverride = (response.transactionStatus == "Declined");

            if (response.isDuplicate) {
                $scope.warnings.push(msg + " is Possible Duplicate!");
            }
        }

        function isValidPromoCode(promoCode) {
            return /^\d{3}$/.test(promoCode);
        }

        function isValidProcessingType(processingType) {
            if (processingType == "C" || processingType == "P") {
                return true;
            };
        }
    }

})();