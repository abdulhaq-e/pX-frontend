(function () {
    angular
        .module('pX.tempResults.directives')
        .directive('results', results);

    function results() {
        return {
            restrict: 'A',
            templateUrl: 'js/main/tempResults/tempResultsTable.html'
        };
    };

})();
