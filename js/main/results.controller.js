(function () {
    'use strict';

    angular
        .module('pX.main.controllers')
        .controller('ResultsController', ResultsController);

    //ResultsController.$inject = ['Students'];
    ResultsController.$inject = ['getEnrolmentsService',
                                 'getResultsService'];

    function ResultsController(getEnrolmentsService,
                               getResultsService) {

        var vm = this;
        //Results.getResults('022121867').then(
        //      function(data) {
        //console.log(ResultsService);
        vm.enrolments = getEnrolmentsService;
        vm.results = getResultsService;
        vm.stats = vm.results[vm.results.length - 1];
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
