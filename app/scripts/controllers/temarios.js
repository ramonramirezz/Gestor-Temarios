

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
        .controller('TemariosCtrl', TemariosCtrl);

    TemariosCtrl.$inject = ['$rootScope','service','$routeParams','lodash'];

    /* @ngInject */
    function TemariosCtrl($rootScope,service,$routeParams,lodash) {
        var vm = this;
        vm.dani = "dani";
        vm.title = $rootScope.name;
       
  $rootScope.oneAtATime = true;

  $rootScope.groups = [{
    title: "Dynamic Group Header - 1",
    content: "Dynamic Group Body - 1"
  }, {
    title: "Dynamic Group Header - 2",
    content: "Dynamic Group Body - 2"
  }];

  $rootScope.items = ['Item 1', 'Item 2', 'Item 3'];

  $rootScope.addItem = function() {
    var newItemNo = $rootScope.items.length + 1;
    $rootScope.items.push('Item ' + newItemNo);
  };

  $rootScope.callMeWhenCompiled = function() {
    console.log("----->>>>> Called");
  };

        
    }

})();