(function () {
    'use strict';

    angular
        .module('pX.api.config')
        .config(config);

    config.$inject = ['RestangularProvider'];

    function config(RestangularProvider) {

        RestangularProvider.setBaseUrl('http://127.0.0.1:8000/api/v1/');
        RestangularProvider.setRestangularFields({
            selfLink: 'url'
        });
        RestangularProvider.setRequestSuffix('/')
    };

})();
