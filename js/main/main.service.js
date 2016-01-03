(function () {
    'use strict';

    angular
        .module('pX.main.services')
        .factory('MainUserService', MainUserService);

    MainUserService.$inject = ['$http',
                               'store',
                               '$state',
                               'jwtHelper',
                               'API'
                              ];

    function MainUserService($http, store, $state,
                         jwtHelper, API) {

        var service = getUser();

        return service;

        function getUser() {
            //var token = store.get('jwt');
            //var decodedToken = jwtHelper.decodeToken(token);
            //var userID = decodedToken.user_id;
            //var token = tokenData.token;
            //var userID = store.get('userID');
            //return decodedToken;
            //console.log(API);
            return API.mem.find(
                'user',
                '5fe56a64-b839-4310-8950-783af33eb3a4'
            ).then(
                function(user) {
                    //console.log(user);
                    //if (user.profileType == 'student') {
                    return API.mem.find(
                        user.profileType,
                        user.profileId
                    ).then(
                        function(profile) {
                            //console.log(profile);
                            //console.log(user);
                            user.profile = profile;
                            console.log(API.mem);
                            return user;
                        });
                });

            // if (userID.profile_type == 'student') {
            //     // console.log(Students.one(userID.profile_id).getList('get_results/'));
            //     return Students.one(userID.profile_id).get();
            // } else if (userID.profile_type == 'employee') {
            //     return Employees.one(userID.profile_id).get();
            // }

            // var userDetails = Restangular.one('people',
            //                                   user_profile.person_id).get().then(
            //                                       function(data) {
            //                                           return data;
            //                                       });;

            // {token: token,
            //         decodedToken: decodedToken,
            //         //user_id: user_id,
            //         userProfile: userProfile};
            //         //userDetails: userDetails};

        };

        // function getStudentID() {

        //     var userID = store.get('userID');

        //     return userID.profile_id;
        // };
    };

})();
