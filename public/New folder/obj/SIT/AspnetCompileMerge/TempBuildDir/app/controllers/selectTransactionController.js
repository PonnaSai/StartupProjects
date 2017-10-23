(function () {
    var app = angular.module('bTransfer');

    app.controller('selectTransactionController', ['$scope', '$location', '$window',
        'dataService', 'dataGridService', 'pagerService', selectTransactionController]);

    function selectTransactionController($scope, $location, $window,
        dataService, dataGridService, pagerService) {

        var transactions = [];
        var gridService = dataGridService;
        var numberOfGridRows = 10;
        var reqParams = $location.search();

        $scope.accountNumber = reqParams.accountNumber;

        $scope.gridOptions = {
            enableFiltering: false,
            enableColumnMenus: false,
            enableGridMenu: true,
            enableSorting: true,
            enableColumnResizing: true,
            resizable: true,
            minRowsToShow: numberOfGridRows,
            onRegisterApi: function (gridApi) {
                $scope.gridApi = gridApi;
            }
        }

        function initialize() {
            $scope.gridOptions.columnDefs = gridService.getColumnDefs();

            dataService.getTransactions($scope.accountNumber)
            .then(function (data) {
                transactions = data;
                initPager();
                $scope.setPage(1);

                if (transactions.length > 0) {
                    transactions[0].canEdit = true;
                }
            });
        }

        function initPager() {
            $scope.pager = {};
            $scope.setPage = setPage;
        }

        function setPage(page) {
            if (page < 1 || page > $scope.pager.totalPages) {
                return;
            }

            // get pager object from service
            $scope.pager = pagerService.GetPager(transactions.length, page, numberOfGridRows);

            // get current page of items
            $scope.gridOptions.data = transactions.slice($scope.pager.startIndex, $scope.pager.endIndex);
        }

        initialize();
    };
}());