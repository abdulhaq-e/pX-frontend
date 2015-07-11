(function () {
    angular
        .module('pX', [
            'ngTouch',
            'ui.router',
            'angular-storage',
            'angular-jwt',
            'ui.bootstrap',                 // Ui Bootstrap
            'oc.lazyLoad',
            'restangular',
            'pX.api',
            'pX.config',
            'pX.tempResults'
            // 'pX.auth',
            // 'pX.config',
            // 'pX.main',
            // 'pX.employee'
        ]);

    angular
        .module('pX.config', []);
})();
