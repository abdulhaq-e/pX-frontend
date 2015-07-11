(function () {
    'use strict';

    angular
        .module('pX.auth.services')
        .factory('AuthService', AuthService);

    AuthService.$inject = ['$http',
                           'store',
                           '$state'];

    function AuthService($http, store, $state) {

        var service = {
            login: login,
            logout: logout
        };

        return service;

        function login(credentials) {
            return $http({
                url: 'http://127.0.0.1:8000/api/v1/auth/login/',
                method: 'POST',
                data: credentials
            }).then(function(response) {
                store.set('jwt', response.data.token);
                $state.go('index.home');
            }, function(error) {
                alert(error.data);
            });
        };

        function logout() {
            store.remove('jwt');
            return $state.go('login');
        };
    };

})();
