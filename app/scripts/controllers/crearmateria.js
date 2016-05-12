  /**
   * @ngdoc function
   * @name gestorTemariosApp.controller:CrearmateriaCtrl
   * @description
   * # CrearmateriaCtrl
   * Controller of the gestorTemariosApp
   */

  (function() {
      'use strict';

      angular
          .module('gestorTemariosApp')
          .controller('CrearmateriaCtrl', CrearmateriaCtrl);

      CrearmateriaCtrl.$inject = ['service','$rootScope','lodash'];

      /* @ngInject */
      function CrearmateriaCtrl(service, $rootScope,lodash) {
          var vm = this;
          vm.title = 'CrearmateriaCtrl';

           vm.createSubject = createSubject;
           vm.subjects = [];
           vm.subject = {};
          var id = 0;
          if ($rootScope.subjects !== undefined) {
            vm.subjects = JSON.parse($rootScope.subjects);
            var last = lodash.last(vm.subjects);
            id = last.id;
          } else {
            id = 0;
          }

          function createSubject(){
            id++;
            vm.subject.id = id;
            vm.subjects.push(vm.subject);
            vm.subject = {};
            console.log(vm.subjects);
          }
      }
  })();
