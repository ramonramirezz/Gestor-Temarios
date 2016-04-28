/**
 * @ngdoc function
 * @name gestorTemariosApp.controller:MateriaCtrl
 * @description
 * # MateriaCtrl
 * Controller of the gestorTemariosApp
 */

(function() {
    'use strict';

    angular
        .module('gestorTemariosApp')
        .controller('MateriaCtrl', MateriaCtrl);

    MateriaCtrl.$inject = ['$rootScope','service','$routeParams','lodash'];

    /* @ngInject */
    function MateriaCtrl($rootScope,service,$routeParams,lodash) {
        var vm = this;
        vm.title = $rootScope.name;
        vm.crearMateria = crearMateria;
        vm.verMaterias = verMaterias;

        var id = 0;
        if ($rootScope.materias !== undefined) {
          vm.materias = JSON.parse($rootScope.materias);
          
          vm.id_materia = lodash.filter(vm.materias,{id_carrera:$routeParams.id});
          if(vm.id_materia.length === 0){
            id = 0;
          } else {
            var last = lodash.last(vm.id_materia);
            id = last.id;
          }
          vm.clases = vm.materias;
        } else {
          id = 0;
          vm.clases = [];
          vm.materias=[];
        }
        vm.verMaterias();

        

        vm.materia = {};

        ////////////////

        function crearMateria() {
          id++;
          vm.materia.id_carrera = $routeParams.id;
          vm.materia.id = id;
          vm.clases.push(vm.materia);
          vm.materias.push(vm.materia);
          vm.materia = {};
          
          $rootScope.materias = JSON.stringify(vm.materias);
          
        }

        function verMaterias() {
          
          vm.clases = lodash.filter(vm.materias,{id_carrera:$routeParams.id});
        }
        
    }
})();