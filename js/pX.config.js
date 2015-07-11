(function () {
    'use strict';

    angular
        .module('pX.config')
        .config(config);
        //.run(run);

    config.$inject = ['$urlRouterProvider',
                      'jwtInterceptorProvider',
                      '$httpProvider'];

    // run.$inject = ['$rootScope',
    //                '$state',
    //                'store',
    //                'jwtHelper'];

    function config($urlRouterProvider,
                    jwtInterceptorProvider,
                    $httpProvider) {

//        $urlRouterProvider.otherwise('/');

        jwtInterceptorProvider.tokenGetter = function(store) {
            return store.get('jwt');
        };
        jwtInterceptorProvider.authPrefix = 'JWT ';

        $httpProvider.interceptors.push('jwtInterceptor');

        //RestangularProvider.setBaseUrl('http://127.0.0.1:8000/api/v1/');

        /*$locationProvider.html5Mode(true);*/
    };
    // function run($rootScope, $state, store, jwtHelper) {
    //     $rootScope.$on('$stateChangeStart', function(e, to) {
    //         if (to.data && to.data.requiresLogin) {
    //             if (!store.get('jwt') || jwtHelper.isTokenExpired(store.get('jwt'))) {
    //                 e.preventDefault();
    //                 $state.go('login');
    //             }
    //         }
    //     });
    // };
})();
