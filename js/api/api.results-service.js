(function () {
    'use strict';

    angular
        .module('pX.api.services')
        .factory('ResultsService', ResultsService);

    ResultsService.$inject = ['Restangular', 'Results'];

    function ResultsService(Restangular, Results) {

        var service = {
            getResults: getResults
        };

        return service;

        function getResults(StudentID) {
            return Results.getList({'student_id': StudentID});
            //return Restangular.oneUrl('students', StudentURL).getList('get_results/');
        };

    };

})();
