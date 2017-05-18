(function () {
    var app = angular.module('bTransfer');

    app.controller('bTransferController', ['$scope', 'dataService', '$window','$controller', bTransferController]);
    
    function bTransferController($scope, dataService, $window, $controller) {

        //inherit from base controller
        $controller('baseController', { $scope: $scope, $window: $window });

        $scope.canSubmit = true;

        $scope.initController = function (transactions) {
            $scope.baseInitialize(transactions[0].fromAccount);
            $scope.transactions = transactions;
        }

        $scope.submit = function (forced) {
            $scope.validate();

            if ($scope.errors && $scope.errors.length == 0) {
                $scope.canSubmit = false;

                //copy processing type and promo code to all transactions
                angular.forEach($scope.transactions, function (item, index) {
                    if (item.accountNoPayOff && item.accountNoPayOff != "") {
                        item.fromAccount.promCode = $scope.fromAccount.promoCode;
                        item.fromAccount.postingIndicator = $scope.fromAccount.postingIndicator;
                        item.forced = forced;

                        dataService.addTransaction(item)
                            .then(function (response) {
                                item.transactionID = response.transactionID;
                                $scope.successCallBack(response, item);
                            })
                            .catch(function (response) {
                                if (response.status == 401) {
                                    $window.location.href = 'BalanceTransfer';
                                }
                            });
                    }
                });
            }
        }
    };
}());