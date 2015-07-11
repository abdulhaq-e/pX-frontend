(function () {
    'use strict';

    angular
        .module('pX.tempResults.controllers')
        .controller('TempResultsController', TempResultsController);

    //ResultsController.$inject = ['Students'];
    TempResultsController.$inject = ['EnrolmentsService']
    //                              'getResultsService'];

    function TempResultsController(EnrolmentsService){
                               //getResultsService) {

        var vm = this;
        vm.getResults = function(registration_number) {

            EnrolmentsService.getEnrolments(
                registration_number).then(
                    function(data) {
                        vm.enrolments = data;
                        vm.student = registration_number;
                    });

            return vm.enrolments;
        };
        //Results.getResults('022121867').then(
        //      function(data) {
        //console.log(ResultsService);
        // vm.enrolments = getEnrolmentsService;
        // vm.results = getResultsService;
        // vm.stats = vm.results[vm.results.length - 1];
        // vm.stats = function () {
        //     return vm.selectedStats;
        // };
        // vm.periods = vm.data['Periods'];
        // vm.selectedPeriod = vm.periods[0];
        // vm.periodCourseResults = function() {
        //     return vm.data['Results'][vm.selectedPeriod]['Enrolments'];
        // };
        // vm.periodStatistics = function() {
        //     return vm.data['Results'][vm.selectedPeriod]['Statistics'];
        // };
        // vm.periodStatus = function() {
        //     return vm.data['Results'][vm.selectedPeriod]["Status"];
        // };
        //   });

    };

})();
