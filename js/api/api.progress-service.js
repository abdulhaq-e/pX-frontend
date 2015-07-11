(function () {
    'use strict';

    angular
        .module('pX.api.services')
        .factory('Progress', Progress);

    Progress.$inject = ['Restangular', 'Students'];

    function Progress(Restangular, Students) {

        var service = {
            getProgress: getProgress
        };

        return service;

        function getProgress(StudentID) {
            return Students.one(StudentID).getList('get_progress/');
            //return Restangular.oneUrl('students', StudentURL).getList('get_results/');
        };

    };

})();
