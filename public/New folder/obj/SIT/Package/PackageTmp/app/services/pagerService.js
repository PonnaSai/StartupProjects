(function () {
    angular.module("bTransfer")
        .factory("pagerService", pagerService);

    function pagerService() {
        
        return {
            GetPager : GetPager
        };

        function GetPager(totalItems, currentPage, pageSize) {

            pagesToShow = 10;

            // default to first page
            currentPage = currentPage || 1;

            // default page size is 10
            pageSize = pageSize || 10;

            // calculate total pages
            var totalPages = Math.ceil(totalItems / pageSize);

            var startPage, endPage;
            if (totalPages <= pagesToShow) {
                // less than 10 total pages so show all
                startPage = 1;
                endPage = totalPages;
            } else {
                // more than 10 total pages so calculate start and end pages
                if (currentPage <= (Math.ceil(pagesToShow / 2) + 1)) {
                    startPage = 1;
                    endPage = pagesToShow;
                } else if (currentPage + (Math.ceil(pagesToShow / 2) - 1) >= totalPages) {
                    startPage = totalPages - Math.ceil(pagesToShow - 1);
                    endPage = totalPages;
                } else {
                    startPage = currentPage - Math.ceil(pagesToShow / 2);
                    endPage = currentPage + (Math.ceil(pagesToShow / 2) - 1);
                }
            }

            // calculate start and end item indexes
            var startIndex = (currentPage - 1) * pageSize;
            var endIndex = startIndex + pageSize;

            // create an array of pages to ng-repeat in the pager control
            var pages = _.range(startPage, endPage + 1);

            // return object with all pager properties required by the view
            return {
                totalItems: totalItems,
                currentPage: currentPage,
                pageSize: pageSize,
                totalPages: totalPages,
                startPage: startPage,
                endPage: endPage,
                startIndex: startIndex,
                endIndex: endIndex,
                pages: pages
            };
        }
    }
})();
