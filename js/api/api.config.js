(function () {

    Orbit.ajax = jQuery.ajax;
    Orbit.Promise = Promise;

    //var schema = new OC.Schema({});
    // var schema = new OC.Schema({
    //     modelDefaults: {
    //         keys: {
    //             '__id': {primaryKey: true, defaultValue: Orbit.uuid},
    //             'id': {}
    //         }
    //     },
    //     models: {
    //         student: {
    //             attributes: {
    //                 firstNameAr: {type: 'string'},
    //                 lastNameAr: {type: 'string'}
    //             },
    //             links: {
    //             }
    //         }
    //     }
    // });

    // var restSource = new OC.JSONAPISource(
    //     schema,
    //     {
    //         host: "http://127.0.0.1:8000/api/v1",
    //         appendSlash: true,
    //         headers:
    //         {
    //             "Content-Type": "application/vnd.api+json"
    //         }
    //     }
    // );
    // restSource.find('student',{'id': 'eacc4d9c-2240-484a-bf2d-2ce745189f46'}).then(
    //     function(students) {
    //         vm = students;
    //         console.log(vm);
    //     });
})();
