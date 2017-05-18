(function () {
    angular.module('bTransfer')
        .service('dataService', ['$http', 'appValues', function ($http, appValues) {

            this.getCardInfo = function (accountNumber) {
                return $http.post('cardInfo/getCardInformation', { "accountNumber": accountNumber })
                    .then(function (response) {
                        return response.data;
                    });
            }

            //api calls
            this.getUser = function () {
                return $http.get('api/user', {
                    headers: {
                        'RequestVerificationToken': appValues.requestToken
                    }
                })
                .then(function (response) {
                    return response.data;
                });
            }

            this.getCardTypes = function () {
                return $http.get('api/cardtypes', {
                    headers: {
                        'RequestVerificationToken': appValues.requestToken
                    }
                })
                .then(function (response) {
                    return response.data;
                });
            }

            this.getStates = function () {
                return $http.get('api/states', {
                    headers: {
                        'RequestVerificationToken': appValues.requestToken
                    }
                })
                .then(function (response) {
                    return response.data;
                });
            }

            this.getCount = function (accountNumber) {
                return $http.get('api/transactions/count/' + accountNumber, {
                    headers: {
                        'RequestVerificationToken': appValues.requestToken
                    }
                })
                .then(function (response) {
                    return response.data;                
                });
            }

           
            this.getTransactions = function (accountNumber) {
                return $http.get('api/transactions/select/' + accountNumber, {
                    headers: {
                        'RequestVerificationToken': appValues.requestToken
                    }
               })
                .then(function (response) {                    
                    return response.data;
                });
            }

            this.addTransaction = function (transaction) {
                return $http.post('api/transactions/add', transaction, {
                    headers: {
                        'RequestVerificationToken': appValues.requestToken
                    }                
                })
                .then(function (response) {
                    return response.data;
                //}, function (error) {
                //    console.log(error);
                });
            }

            this.getTransaction = function (accountNumber, transactionId) {
                return $http.get('api/transactions/' + accountNumber + '/' + transactionId, {
                    headers: {
                        'RequestVerificationToken': appValues.requestToken
                    }
                })
                .then(function (response) {
                    return response.data;
                //}, function (error) {
                //    console.log(error);
                });
            }

            this.updateTransaction = function (transaction) {
                return $http.post('api/transactions/update', transaction, {
                    headers: {
                        'RequestVerificationToken': appValues.requestToken
                    }
                })
                .then(function (response) {
                    return response.data;
                //}, function (error) {
                //    console.log(error);
                });
            }

            this.deleteTransaction = function (transaction) {
                return $http.post('api/transactions/delete', transaction, {
                    headers: {
                        'RequestVerificationToken': appValues.requestToken
                    }
                })
                .then(function (response) {
                    return response.data;
                //}, function (error) {
                //    console.log(error);
                });
            }
        }]);
})();