/**
 * @ngdoc function
 * @name gestorTemariosApp.controller:CarreraCtrl
 * @description
 * # CarreraCtrl
 * Controller of the gestorTemariosApp
 */

(function() {
    'use strict';

    angular
        .module('gestorTemariosApp')
        .controller('CarreraCtrl', CarreraCtrl);

    CarreraCtrl.$inject = ['service','$rootScope','lodash'];

    /* @ngInject */
    function CarreraCtrl(service, $rootScope,lodash) {
        var vm = this;
        vm.title = 'CarreraCtrl';
        vm.careers  = [{"id":"1","name":"DEV 1"},{"id":"2","name":"DEV 2"},{"id":"3","name":"DEV 3"}];
        //
        // vm.getCourses = getCourses;
        // vm.crearCarrera = crearCarrera;
        // vm.toRoot = toRoot;
        //
        // vm.carreras = [];
        // vm.carrera = {};
        // var id = 0;
        // if ($rootScope.carreras !== undefined) {
        //   vm.carreras = JSON.parse($rootScope.carreras);
        //   var last = lodash.last(vm.carreras);
        //   id = last.id;
        // } else {
        //   id = 0;
        // }
        //
        //
        //
        // ////////////////
        //
        // function getCourses() {
        //   // service.getCourses().then(function(data){
        //   //   vm.carreras = [];
        //   // });
        //   if ($rootScope.carreras !== undefined) {
        //     vm.carreras = JSON.parse($rootScope.carreras);
        //   }
        // }
        // vm.getCourses();
        //
        // function crearCarrera(){
        //   // service.createCourse().then(function(res){
        //   //   console.log(res);
        //   // });
        //   id++;
        //   vm.carrera.id = id;
        //   vm.carreras.push(vm.carrera);
        //   vm.carrera = {};
        // }
        //
        // function toRoot(carrera){
        //   $rootScope.carreras = JSON.stringify(vm.carreras);
        //   $rootScope.name = '';
        //   $rootScope.name = carrera;
        // }
    }
})();
