(function () {
    'use strict';

    angular
        .module('pX.api.services')
        .factory('Users', Users)
        .factory('Students', Students)
        .factory('Employees', Employees)
        .factory('Enrolments', Enrolments)
        .factory('Results', Results);

    Users.$inject = ['Restangular'];
    Students.$inject = ['Restangular'];
    Employees.$inject = ['Restangular'];
    Enrolments.$inject = ['Restangular'];
    Results.$inject = ['Restangular'];


    function Users(Restangular) {
        return Restangular.service('users');
    };

    function Students(Restangular) {
        return Restangular.service('students');
    };

    function Employees(Restangular) {
        return Restangular.service('employees');
    };

    function Enrolments(Restangular) {
        return Restangular.service('enrolments');
    };

    function Results(Restangular) {
        return Restangular.service('results');
    };

})();
