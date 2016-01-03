(function () {
    'use strict';

    angular
        .module('pX.main.controllers')
        .controller('ResultsController', ResultsController);

    //ResultsController.$inject = ['Students'];
    ResultsController.$inject = ['API',
                                 'getEnrolmentsService',
                                 'getStudentRegistrationsService'];

    function ResultsController(API, getEnrolmentsService,
                               getStudentRegistrationsService) {
//                               getResultsService) {

        var vm = this;
        //Results.getResults('022121867').then(
        //      function(data) {
        //console.log(ResultsService);
        // vm.enrolments = API.mem.query(
        //     'studentEnrolment', {id: '4fb0f68f-e201-4cb0-b3a0-777704195a46'}
        // ).then(
        //         function(enrolments) {
        //             console.log(enrolments);
        //             //getStudentRegistrations();
        //             return enrolments;
        //         });
        //console.log(getResultsService);
        vm.enrolments = getEnrolmentsService;
        console.log(vm.enrolments);
        vm.studentRegistrations = getStudentRegistrationsService;
        vm.selectedStudentRegistration = vm.studentRegistrations[
            vm.studentRegistrations.length - 1];

        //console.log(vm.studentRegistrations.len);
        console.log(vm.selectedStudentRegistration);
        console.log(vm.studentRegistrations);

        activate();

        function activate() {
            return API.mem.find('course').then(
                function(courses) {
                    console.log(courses);
                    vm.courses = courses;
                    return vm.courses;
                });
        };
        //console.log(API.rest);
        //console.log(API.mem);
        //console.log(API.mem.find('studentregistration',
                                 //'1e798ebc-adc6-499d-b635-ed70cfd4cf99'));
        //vm.results = getResultsService;
        //vm.stats = vm.results[vm.results.length - 1];
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
