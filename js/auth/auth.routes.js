(function () {
    'use strict';

    angular
        .module('pX.auth.routes')
        .config(config)
        .run(function($rootScope, $state) {
             $rootScope.$state = $state;
         });

    config.$inject = ['$stateProvider'];

    function config($stateProvider) {

        var login = {
            name: 'login',
            url: '/login',
            controller: 'AuthController',
            controllerAs: 'auth',
            templateUrl: 'js/auth/login.html',
            data: {
                pageTitle: "Login"
            }
        };

        $stateProvider
            .state(login);
    };

})();
