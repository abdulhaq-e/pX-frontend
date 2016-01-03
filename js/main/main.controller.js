(function () {
    'use strict';

    angular
        .module('pX.main.controllers')
        .controller( 'MainController', MainController);

    MainController.$inject = [//'AuthService',
    //                          'jwtHelper',
                              //'store','MainUserService'];
                              'MainUserService'];

    /**
     * MainCtrl - controller
     */
    function MainController(MainUserService){
        //AuthService,sour
        //                    jwtHelper,
         //                   store, MainUserService){//, MainUserService) {

        var vm = this;
        vm.user = MainUserService;
        //console.log(vm.user);
        //console.log(vm.user.profile);
        // source.find('students','eacc4d9c-2240-484a-bf2d-2ce745189f46').then(
        //     function(data) {
        //         vm.user = data;
        //         console.log(vm.user);
           // });

        // Users.one('4d4d3812-c9f7-4c88-820a-21ad6d788616/').get().then(
        //     function(data) {
        //         vm.userData = data;
        //     });

        // vm.logout = function() {
        //     AuthService.logout();
        //};
    };

})();
