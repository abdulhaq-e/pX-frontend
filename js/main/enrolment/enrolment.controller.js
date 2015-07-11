(function () {
    'use strict';

    angular
        .module('pX.main.controllers')
        .controller('EnrolmentController', EnrolmentController);

    //ResultsController.$inject = ['Students'];
    EnrolmentController.$inject = ['Enrolments', 'MainUserService'];

    function EnrolmentController(Enrolments, MainUserService){//}ResultsService) {

        var vm = this;
        vm.periodCourseSections = [
            {
                "courseCode": "AE301",
                "MainSections": [
                    {
                        name: "AE301 Lectures",
                        sections: [
                            {
                                "section_id": "somelongUUID",
                                "group": 1,
                                "notes": "whatever"
                            },
                            {
                                "section_id": "anotherlongUUID",
                                "group": 2,
                                "notes": ""
                            }
                        ]
                    }],
                "SecondarySections": [
                    {
                        name: "AE301 Laboratory",
                        sections: [
                            {
                                "section_id": "somelongUUID",
                                "group": "A",
                                "notes": "whatever"
                            },
                            {
                                "section_id": "anotherlongUUID",
                                "group": "B",
                                "notes": ""
                            }
                        ]
                    },
                    {
                        name: "AE301 Tutorial",
                        sections: [
                            {
                                "section_id": "somelongUUID",
                                "group": "AA",
                                "notes": "whatever"
                            },
                            {
                                "section_id": "anotherlongUUID",
                                "group": "BB",
                                "notes": ""
                            }
                        ]
                    }]
            },
            {
                "courseCode": "AE302",
                "MainSections": [
                    {
                        name: "AE302 Lectures",
                        sections: [
                            {
                                "section_id": "c612811d-edeb-49de-b5b9-23650cd5c9ba",
                                "group": 1,
                                "notes": ""
                            },
                        ]
                    }],
                "SecondarySections": []
            }
        ];

        vm.studentRegistration = "582ce4fc-e765-4d2c-9755-2e3be88176fe";
        vm.enrol = function(SectionID) {
            Enrolments.enrol(MainUserService, SectionID, vm.studentRegistration);
        };
    };

})();
