(function () {
    var app = angular.module('bTransfer');

    app.controller('cardInfoController', ['$scope', 'dataService', '$window', CardInfoController]);
    
    function CardInfoController($scope, dataService, $window) {
        function validate() {
            $scope.errors = [];
            var accountNumber = $scope.fromAccount.accountNoTransferTo;
            if (!accountNumber || accountNumber == "")
                $scope.errors.push("Account Number is required.");
            else if (!isValidAccountNumber(accountNumber))
                $scope.errors.push("Account Number must be 16 digits.");
        }

        function isValidAccountNumber(accountNumber) {
            return /^\d{16}$/.test(accountNumber);
        }

        $scope.fromAccount = {};
        $scope.errors = [];
        $scope.accountRetreived = false;
        $scope.buttonText = "Search";

        $scope.submit = function () {
            var accountNumber = $scope.fromAccount.accountNoTransferTo;
            validate();

            if ($scope.errors.length == 0) {               
                dataService.getCardInfo(accountNumber)
                .then(function (response) {
                    if (!response.error && response.fromAccount != null) {
                        if (response.fromAccount) {
                            $scope.fromAccount = response.fromAccount;
                            $scope.accountRetreived = true;
                            $scope.buttonText = "Reset";

                        }
                    }                    
                    else if (response.error) {                        
                        $scope.errors.push(response.error);
                    }
                    else {
                        $window.location.href = 'CardInfo';
                    }
                })
                .catch(function (count) {
                    if (count.status = 401) {
                        $window.location.href = 'CardInfo';
                    }
                });
            }           
        }

        $scope.reset = function () {
            dataService.getUser()
            .catch(function (response) {
                if (response.status = 401) {
                    $window.location.href = 'CardInfo';
                }               
            });
            $scope.fromAccount = {};
            $scope.accountRetreived = false;
            $scope.errors = [];
            $scope.buttonText = "Search";            
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
            })
            .catch(function (count) {
                if (count.status = 401) {
                    $window.location.href = 'Inquiry';
                }
            });
        }

        $scope.balanceTransfer = function () {
            $window.location.href = 'BalanceTransfer';
        }

        $scope.initController = function (model) {
            $scope.fromAccount = model.fromAccount;
            
            if ($scope.fromAccount.accountNoTransferTo) {
                $scope.accountRetreived = true;
                $scope.buttonText = "Reset";
            }
        }

       

    }

   
    
})();