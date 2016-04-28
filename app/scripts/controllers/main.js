'use strict';

/**
 * @ngdoc function
 * @name gestorTemariosApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gestorTemariosApp
 */
angular.module('gestorTemariosApp')
  .controller('MainCtrl', function ($scope, StudentsCrud) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    getAllStudents();

    function getAllStudents(){
      StudentsCrud.GetAll().success(function(data){
        console.log(data);
      }).error(function(err){
        console.log(err);
      });
    }

  });
