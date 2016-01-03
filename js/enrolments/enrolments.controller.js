(function () {
    'use strict';

    angular
        .module('pX.main.controllers')
        .controller('EnrolmentsController', EnrolmentsController);

    EnrolmentsController.$inject = ['API',];

    function EnrolmentsController(API) {

        var vm = this;

        vm.text = "NOT READY YET";
    };

})();
