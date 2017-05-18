(function () {
    var app = angular.module('bTransfer');

    app.controller('inquiryController', ['$scope', '$location', '$window', 'dataService', '$controller', inquiryController]);

    function inquiryController($scope, $location, $window, dataService, $controller) {

        var reqParams = $location.search();

        //inherit from base controller
        $controller('baseController', { $scope: $scope, $window: $window });

        $scope.canDelete = true;
        $scope.canUpdate = true;

        $scope.initController = function (fromAccount) {
            $scope.baseInitialize(fromAccount);

            var transactionId = 0;
            if (reqParams.transactionId) {
                transactionId = reqParams.transactionId;
            }

            dataService.getTransaction(fromAccount.accountNoTransferTo, transactionId)
            .then(function (data) {
                fromAccount.promoCode = data.fromAccount.promoCode;
                fromAccount.postingIndicator = data.fromAccount.postingIndicator;

                $scope.transaction = data;
                $scope.transaction.fromAccount = fromAccount;

                switch ($scope.transaction.actionTaken) {
                    case "D":
                        $scope.messages.push("Transaction Previously Deleted.");
                        $scope.canDelete = $scope.canUpdate = $scope.canOverride = false;
                        break;
                    case "F":
                        $scope.messages.push("Transaction Failed Authorization.");
                        $scope.canDelete = $scope.canUpdate = $scope.canOverride = true;
                        break;
                    case "O":
                        $scope.messages.push("Transaction Overridden by User.");
                        $scope.canDelete = $scope.canUpdate = true;
                        $scope.canOverride = false;
                        break;
                    case "T":
                    case "E":
                        $scope.canDelete = $scope.canUpdate = true;
                        $scope.canOverride = false;
                        break;
                }

                if ($scope.transaction.processFlag == true) {
                    $scope.canDelete = $scope.canUpdate = $scope.canOverride = false;
                }
            })
            .catch(function (response) {
                if (response.status == 401) {
                    $window.location.href = 'Inquiry';
                }
            });
        }

        $scope.delete = function () {
            $scope.clearMessages();

            dataService.deleteTransaction($scope.transaction)
            .then(function (response) {
                $scope.successCallBack(response, $scope.transaction);

                if (response.transactionStatus == "Deleted") {
                    $scope.canDelete = $scope.canUpdate = $scope.canOverride = false;
                }
            }).catch(function (response) {
                if (response.status == 401) {
                    $window.location.href = 'Inquiry';
                }
            });
        }

        $scope.update = function (forced) {
            $scope.validate();

            //copy processing type and promo code to all transactions
            $scope.transaction.forced = forced;

            if ($scope.errors && $scope.errors.length == 0) {
                dataService.updateTransaction($scope.transaction)
                .then(function (response) {
                    $scope.successCallBack(response, $scope.transaction);
                }).catch(function (response) {
                    if (response.status == 401) {
                        $window.location.href = 'Inquiry';
                    }
                });
            }
        }
    };
}());