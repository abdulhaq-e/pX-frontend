(function () {
    'use strict';

    angular
        .module('pX.tempResults.routes')
        .config(config)
        .run(function($rootScope, $state) {
            $rootScope.$state = $state;
        });

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {
                        //$ocLazyLoadProvider
        $urlRouterProvider.otherwise("/");

        // $ocLazyLoadProvider.config({
        //     // Set to true if you want to see what and when is dynamically loaded
        //     debug: true
        // });

        var results = {
            name: 'results',
            url: "/",
            controller: 'TempResultsController',
            controllerAs: 'results',
            templateUrl: "js/main/tempResults/tempResults.html",
            data: { pageTitle: 'نتائج الفصا الدراسي ربيع 2015',
                    requiresLogin: false}
        };


//         getEnrolmentsService.$inject = ['EnrolmentsService',
//                                         'MainUserService'];
//         function getEnrolmentsService(EnrolmentsService,
//                                       MainUserService) {
// //            var StudentID = MainService.getStudentID();
//             return EnrolmentsService.getEnrolments(
//                 MainUserService.profile.student_id);
//         }

//         getResultsService.$inject = ['ResultsService', 'MainUserService'];
//         function getResultsService(ResultsService, MainUserService) {
//             return ResultsService.getResults(
//                 MainUserService.profile.student_id);
//         }

//         ProgressService.$inject = ['Progress', 'MainUserService'];
//         //, 'MainService'];
//         function ProgressService(Progress, MainUserService){//, MainService) {
//             //            return MainService.getUser().then(
//             //function(data) {
//             return Progress.getProgress(MainUserService.profile.student_id);
//         }

//         // EnrolmentsService.$inject = ['Enrolments', 'MainUserService'];
//         // function EnrolmentsService(Enrolments){

//         //     return Enrolments.enrol();
//         // }

        $stateProvider
            .state(results);
    }
})();
