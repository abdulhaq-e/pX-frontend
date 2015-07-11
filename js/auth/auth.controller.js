(function () {

    angular
        .module('pX.auth.controllers')
        .controller('AuthController', AuthController);

    AuthController.$inject = ['AuthService'];

    function AuthController(AuthService) {

        var vm = this;

        vm.user = {};

        vm.login = function() {
            AuthService.login(vm.user);
        };
    };
})();
