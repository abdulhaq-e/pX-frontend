(function () {
    'use strict';

    angular
        .module('pX.api.services')
        .factory('ResultsService', ResultsService);

    ResultsService.$inject = ['API'];

    function ResultsService(API) {

        //var object = Restangular.service('enrolments/');
        //service.getEnrolments = getEnrolments;
        var service = {
            getEnrolments: getEnrolments,
            getStudentRegistrations: getStudentRegistrations
        };

        return service;

        function getEnrolments(student) {
            return API.rest.query('studentEnrolment',
                            {'student': student}).then(
                                function(enrolments) {
                                    return enrolments;
                                });
        };

        function getStudentRegistrations(student) {
            return API.mem.findLinked(
                'student',
                student,
                'student-registrations').then(
                    function(studentRegistrations) {
                        //console.log(studentRegistrations);
                        return studentRegistrations;
                    });
        };

        // function getCourses() {
        //     return API.mem.find('course').then(
        //         function(courses) {
        //             return courses;
        //         });
        // };

        // function enrol(Student, SectionID, StudentRegistration) {
        //     return Student.post('enrol',
        //                         {
        //                             'section': SectionID,
        //                             'student_registration': StudentRegistration
        //                         }
        //                        );
        //return Restangular.oneUrl('students', StudentURL).getList('get_results/');
        };

})();
