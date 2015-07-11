(function () {
    angular
        .module('pX.main.directives')
        .directive('results', results);

    function results() {
        return {
            restrict: 'A',
            templateUrl: 'views/resultsTable.html'
        };
    };

})();
