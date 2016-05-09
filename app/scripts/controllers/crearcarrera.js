
/**
 * @ngdoc function
 * @name gestorTemariosApp.controller:CarreraCtrl
 * @description
 * # crearCarreraCtrl
 * Controller of the gestorTemariosApp
 */

(function() {
    'use strict';

    angular
        .module('gestorTemariosApp')
        .controller('CrearcarreraCtrl', CrearcarreraCtrl);

    CrearcarreraCtrl.$inject = ['service','$rootScope','lodash'];

    /* @ngInject */
    function CrearcarreraCtrl(service, $rootScope,lodash) {
        var vm = this;
        vm.title = 'CrearcarreraCtrl';

         vm.crearCarrera = crearCarrera;
         vm.carreras = [];
         vm.carrera = {};
        var id = 0;
        if ($rootScope.carreras !== undefined) {
          vm.carreras = JSON.parse($rootScope.carreras);
          var last = lodash.last(vm.carreras);
          id = last.id;
        } else {
          id = 0;
        }

        function crearCarrera(){
          id++;
          vm.carrera.id = id;
          vm.carreras.push(vm.carrera);
          vm.carrera = {};
          console.log(vm.carreras);
        }
    }
})();
