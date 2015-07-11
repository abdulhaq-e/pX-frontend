(function () {
    'use strict';

    angular
        .module('pX.main.controllers')
        .controller( 'MainController', MainController);

    MainController.$inject = ['AuthService',
                              'jwtHelper',
                              'store','MainUserService'];
                              //'MainUserService'];

    /**
     * MainCtrl - controller
     */
    function MainController(AuthService,
                            jwtHelper,
                            store, MainUserService){//, MainUserService) {

        var vm = this;

        vm.user = MainUserService;
        console.log(vm.user);
        vm.user.full_name_ar = vm.user.first_name_ar + vm.user.last_name_ar;
        vm.user.full_name_en = vm.user.first_name_en + vm.user.last_name_en;

        // Users.one('4d4d3812-c9f7-4c88-820a-21ad6d788616/').get().then(
        //     function(data) {
        //         vm.userData = data;
        //     });

        vm.logout = function() {
            AuthService.logout();
        };
    };

})();
