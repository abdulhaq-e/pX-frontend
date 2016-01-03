(function () {
    'use strict';

    angular
        .module('pX.api.services')
        .factory('API', API);

    var schema = new OC.Schema({
        // modelDefaults: {
        //     keys: {
        //         '__id': {primaryKey: true, defaultValue: Orbit.uuid},
        //         'id': {}
        //     }
        // },
        models: {
            student: {
                attributes: {
                    firstNameAr: {type: 'string'},
                    lastNameAr: {type: 'string'},
                    firstName: {type: 'string'},
                    lastName: {type: 'string'},
                    registrationNumber: {type: 'string'},
                    fullNameAr: {type: 'string'},
                    fullName: {type: 'string'}
                },
                links: {
                    "student-registrations": {type: 'hasMany',
                                              model: 'studentRegistration',
                                              inverse: 'student'}
                }
            },
            user: {
                attributes: {
                    profileType: {type: 'string'},
                    email: {type: 'string'},
                    profileId: {type: 'string'}
                },
                links: {
                    roles: {type: 'hasMany', model: 'role', inverse: 'users'}
                    //studentProfile: {type: 'hasOne', model: 'student', inverse: 'user'}
                }
            },
            role: {
                attributes: {
                    nameAr: {type: 'string'},
                    name: {type: 'string'}
                },
                links: {
                    users: {type: 'hasMany', model: 'user', inverse: 'roles'}
                }
            },
            studentEnrolment: {
                attributes: {
                    published: {type: 'bool'},
                    grade: {type: 'number'},
                    finalExam: {type: 'number'},
                    carryMarks: {type: 'number'}
                },
                links: {
                    "student-registration": {type: 'hasOne',
                                          model: 'studentRegistration',
                                          inverse: 'enrolments'},
                    course: {type: 'hasOne',
                             model: 'course',
                             inverses: 'enrolments'}
                }
            },
            course: {
                attributes: {
                    credit: {type: 'number'},
                    nameAr: {type: 'string'},
                    name: {type: 'string'},
                    code: {type: 'string'}
                },
                links: {
                    enrolments: {type: 'hasMany',
                                 model: 'studentEenrolment',
                                 inverse: 'course'}
                }
            },
            studentRegistration: {
                attributes: {
                    registrationType: {type: 'string'},
                    period: {type: 'string'}
                },
                links: {
                    student: {type: 'hasOne',
                              model: 'student',
                              inverse: 'student-registrations'},
                    enrolments: {type: 'hasMany',
                                 model: 'studentEnrolment',
                                 inverse: 'student-registration'}
                }
            }
        }
    });
    //console.log(schema);
    var restSource = new OC.JSONAPISource(
        {
            host: "http://127.0.0.1:8000/api/v1",
            appendSlash: true,
            schema: schema,
            headers:
            {
                "Content-Type": "application/vnd.api+json"
            }
        }
    );

    // var localSource = new OC.LocalStorageSource({
    //     schema: schema
    // });
    var memorySource = new OC.MemorySource({
        schema: schema
    });

    // var memToLocalConnector = new Orbit.TransformConnector(memorySource,
    //                                                        localSource);

    var memToRestConnector = new Orbit.TransformConnector(memorySource,
                                                          restSource);
    var restToMemConnector = new Orbit.TransformConnector(restSource,
                                                          memorySource);
    //memorySource.on('assistQuery', localSource.query);
    // memorySource.on('rescueFind', restSource.find);
    // memorySource.on('rescueQuery', restSource.query);
    // memorySource.on('didFind', function(type, id, record) {
    //     console.log("Hey, I found", type, id, record);
    // });

    var connectorActions = ['find', 'query'];

    // var restToLocalRequestConnector = new Orbit.RequestConnector(
    //     restSource,
    //     localSource,
    //     {
    //         mode: 'assist',
    //         actions: connectorActions
    //     }
    //);
    var memFromRestRequestConnector = new Orbit.RequestConnector(
        memorySource,
        restSource,
        {
            actions: connectorActions
        });
    // localSource.on('assistQuery', function(type, query) {
    //     console.log("I'm localSource and I will try to query", type, query);
    // });
    // localSource.on('assistFind', function(type, id) {
    //     console.log("I'm localSource and I will try to find", type, id);
    // });
    // memorySource.on('assistQuery', function(type, query) {
    //     console.log("I'm memorySource and I will try to query", type, query);
    // });
    // memorySource.on('assistFind', function(type, id) {
    //     console.log("I'm memorySource and I will try to find", type, id);
    // });
    // restSource.on('assistQuery', function(type, query) {
    //     console.log("I'm restSource and I will try to query", type, query);
    // });
    // restSource.on('assistFind', function(type, id) {
    //     console.log("I'm restSource and I will try to find", type, id);
    // });

    // memorySource.find('user',
    //                 {'id': '5fe56a64-b839-4310-8950-783af33eb3a4'}
    //                ).then(
    //                    function(user) {
    //                        console.log(user);
    //                    });
    // restSource.find('user',
    //                   {'id': '5fe56a64-b839-4310-8950-783af33eb3a4'}
    //                  ).then(
    //                      function(user) {
    //                          console.log(user);
    //                      });
    // console.log(restSource);
    //console.log(memFromLocalRequestConnector);
    //console.log(memFromRestRequestConnector);
    var service = {
        rest: restSource,
        mem: memorySource
    };

    function API() {
        return service;
    };
})();
