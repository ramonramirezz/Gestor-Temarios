'use strict';

/**
 * @ngdoc service
 * @name gestorTemariosApp.StudentsCrud
 * @description
 * # StudentsCrud
 * Factory in the gestorTemariosApp.
 */
angular.module('gestorTemariosApp')
  .factory('StudentsCrud', function ($http) {
    // Service logic
    // ...

    var uri = 'http://localhost:8080/students';
    var Students = {};

    Students.GetAll = function(){
      return $http.get(uri);
     }
    return Students;
  });
