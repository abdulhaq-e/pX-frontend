(function () {
    'use strict';

    angular
        .module('pX.main.routes')
        .config(config)
        .run(function($rootScope, $state) {
            $rootScope.$state = $state;
        });

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {
                        //$ocLazyLoadProvider
        $urlRouterProvider.otherwise("/index/home");

        // $ocLazyLoadProvider.config({
        //     // Set to true if you want to see what and when is dynamically loaded
        //     debug: true
        // });

        var index = {
            name: 'index',
            abstract: true,
            url: "/index",
            templateUrl: "views/common/content.html",
            controller: 'MainController',
            controllerAs: 'main',
            resolve: {MainUserService: 'MainUserService'}
        };

        var home = {
            name: 'index.home',
            parent: 'index',
            url: "/home",
            templateUrl: "views/home.html",
            data: {
                pageTitle: 'Home view',
                requiresLogin: true}
        };

        var results = {
            name: 'index.results',
            parent: 'index',
            url: "/results",
            controller: 'ResultsController',
            controllerAs: 'results',
            templateUrl: "views/results.html",
            data: { pageTitle: 'Results',
                    requiresLogin: true},
            resolve: {
                //ResultsService: ResultsService,
                getEnrolmentsService: getEnrolmentsService,
                getResultsService: getResultsService,
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            insertBefore: '#loadBefore',
                            name: 'localytics.directives',
                            files: ['css/plugins/chosen/chosen.css',
                                    'js/plugins/chosen/chosen.jquery.js',
                                    'js/plugins/chosen/chosen.js']
                        }]);
                }
            }};

        var progress = {
            name: 'index.progress',
            parent: 'index',
            url: "/progress",
            controller: 'PRController',
            controllerAs: 'progress',
            templateUrl: "views/progress.html",
            data: { pageTitle: 'Progress',
                    requiresLogin: true},
            resolve: {
                getResultsService: getResultsService,
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files: ['js/plugins/chartJs/Chart.min.js']
                        },
                        {
                            name: 'angles',
                            files: ['js/plugins/chartJs/angles.js']
                        }]);
                }
            }};

        var enrolment = {
            name: 'index.enrolment',
            parent: 'index',
            url: "/enrolment",
            controller: 'EnrolmentController',
            controllerAs: 'enrolment',
            templateUrl: "views/enrolment.html",
            data: { pageTitle: 'Enrolment',
                    requiresLogin: true}
            // resolve: {
            //     EnrolmentsService: EnrolmentService,
            // }
            //     loadPlugin: function ($ocLazyLoad) {
            //         return $ocLazyLoad.load([
            //             {
            //                 files: ['js/plugins/chartJs/Chart.min.js']
            //             },
            //             {
            //                 name: 'angles',
            //                 files: ['js/plugins/chartJs/angles.js']
            //             }]);
            //     }}
        };

        var courses = {
            name: 'index.courses',
            parent: 'index',
            url: '/courses',
            controller: 'CoursesController',
            controllerAs: 'courses',
            templateUrl: "js/main/employee/courses.html"
        };

        //MainUserService.$inject = ['MainService'];

        // function MainUserService(MainService) {
        //     return MainService.getUser();
        // }


        // ResultsService.$inject = ['Results', 'MainUserService'];
        // //, 'MainService'];
        // function ResultsService(Results, MainUserService){//, MainService) {
        //     //            return MainService.getUser().then(
        //     //function(data) {
        //     return Results.getResults(MainUserService);}//);

        // var services = {
        //     getEnrolmentService: getEnrolmentsService
        // };

        getEnrolmentsService.$inject = ['EnrolmentsService',
                                        'MainUserService'];
        function getEnrolmentsService(EnrolmentsService,
                                      MainUserService) {
//            var StudentID = MainService.getStudentID();
            return EnrolmentsService.getEnrolments(
                MainUserService.profile.student_id);
        }

        getResultsService.$inject = ['ResultsService', 'MainUserService'];
        function getResultsService(ResultsService, MainUserService) {
            return ResultsService.getResults(
                MainUserService.profile.student_id);
        }

        ProgressService.$inject = ['Progress', 'MainUserService'];
        //, 'MainService'];
        function ProgressService(Progress, MainUserService){//, MainService) {
            //            return MainService.getUser().then(
            //function(data) {
            return Progress.getProgress(MainUserService.profile.student_id);
        }

        // EnrolmentsService.$inject = ['Enrolments', 'MainUserService'];
        // function EnrolmentsService(Enrolments){

        //     return Enrolments.enrol();
        // }

        $stateProvider
            .state(index)
            .state(home)
            .state(progress)
            .state(results)
            .state(enrolment)
            .state(courses);
    }

})();
