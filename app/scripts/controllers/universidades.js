/**
 * @ngdoc function
 * @name gestorTemariosApp.controller:UniversidadesCtrl
 * @description
 * # UniversidadesCtrl
 * Controller of the gestorTemariosApp
 */

(function() {
    'use strict';

    angular
        .module('gestorTemariosApp')
        .controller('UniversidadesCtrl', UniversidadesCtrl);

    UniversidadesCtrl.$inject = ['service','$rootScope'];

    /* @ngInject */
    function UniversidadesCtrl(service, $rootScope,lodash) {
        var vm = this;
        vm.title = 'UniversidadesCtrl';

        vm.universitys  = [{"id":"1","name_university":"UNISON","city":"Hermosillo"},
                           {"id":"2","name_university":"UTH","city":"Hermosillo"},
                           {"id":"3","name_university":"UES","city":"Hermosillo"}
                          ];

    }
})();
