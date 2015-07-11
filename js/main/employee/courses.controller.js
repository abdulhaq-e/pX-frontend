( function() {
    'use strict';

    angular
        .module('pX.employee.controllers')
        .controller('CoursesController', CoursesController);

    function CoursesController(){

        var vm = this;

        vm.test = 'whatever';
    };


})();
