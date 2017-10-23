(function () {

    angular.module("bTransfer")
        .service("dataGridService", [dataGridService]);

    function dataGridService() {

        this.getColumnDefs = function () {
            var columnDefs = [{
                field: 'canEdit',
                displayName: 'Can Edit',
                headerCellClass: 'gridHeaderRow',
                visible:false
            },{
                field: 'transactionId',
                displayName: 'Transaction ID',
                cellTemplate: '<div class="ui-grid-cell-contents">'
                    + '<a target="_self" href="inquiry?transactionId={{row.entity.transactionId}}">{{row.entity.transactionId}}</a>'
                    + '</div>',
                headerCellClass: 'gridHeaderRow'
            }, {
                field: 'accountNoTransferTo',
                displayName: 'Account No',
                headerCellClass: 'gridHeaderRow'
            }, {
                field: 'transactionDate',
                displayName: 'Transaction Date',
                headerCellClass: 'gridHeaderRow'
            }, {
                field: 'accountNoPayoff',
                displayName: 'Account Pay Off',
                headerCellClass: 'gridHeaderRow'
            }, {
                field: 'balance',
                displayName: 'Balance',
                headerCellClass: 'gridHeaderRow'
            }, {
                field: 'payeeName',
                displayName: 'Payee Name',
                headerCellClass: 'gridHeaderRow'
            }, {
                field: 'status',
                displayName: 'Status',
                headerCellClass: 'gridHeaderRow'
            }, {
                field: 'processDate',
                displayName: 'Process Date',
                headerCellClass: 'gridHeaderRow'
            }];

            return columnDefs;
        }
    };

}());