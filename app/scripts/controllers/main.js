'use strict';

/**
 * @ngdoc function
 * @name gestorTemariosApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gestorTemariosApp
 */
angular.module('gestorTemariosApp')
  .controller('MainCtrl', function ($scope,$http) {
    // var StudentsService = $resource('localhost:8080/students',{},{
    //   'GetUser': {method: 'GET'}
    // });
    // StudentsService.GetUser();
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    

    $http.get('localhost:8080/students').success(function(data){
      console.log(data);
    }).error(function(err){
      console.log(err);
    });
  });
