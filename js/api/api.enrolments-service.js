(function () {
    'use strict';

    angular
        .module('pX.api.services')
        .factory('EnrolmentsService', EnrolmentsService);

    EnrolmentsService.$inject = ['Restangular', 'Enrolments'];

    function EnrolmentsService(Restangular, Enrolments) {

        //var object = Restangular.service('enrolments/');
        //service.getEnrolments = getEnrolments;
        var service = {
            getEnrolments: getEnrolments
        };

        return service;

        function getEnrolments(RegistrationNumber) {
            return Enrolments.getList(
                {'registration_number': RegistrationNumber});
        };

        function enrol(Student, SectionID, StudentRegistration) {
            return Student.post('enrol',
                                {
                                    'section': SectionID,
                                    'student_registration': StudentRegistration
                                }
                               );
            //return Restangular.oneUrl('students', StudentURL).getList('get_results/');
        };

    };

})();
