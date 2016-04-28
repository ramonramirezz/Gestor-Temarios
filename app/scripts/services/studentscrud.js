/**
 * @ngdoc service
 * @name gestorTemariosApp.StudentsCrud
 * @description
 * # StudentsCrud
 * Factory in the gestorTemariosApp.
 */

(function() {
    'use strict';

    angular
        .module('gestorTemariosApp')
        .factory('service', factory);

    factory.$inject = ['$http','$q'];

    /* @ngInject */
    function factory($http, $q) {
      var service = {
           createCourse: createCourse,
           createClass: createClass,
           getCourses: getCourses,
           getClasses: getClasses
      };
      return service;

      var uri = 'http://localhost:8080/';

      ////////////////

      function createCourse(data) {
        var deferred = $q.defer();
        $http.post(uri+'course',data)
        .success(function(data){
          console.log(data);
          deferred.resolve(data);
        })
        .error(function(data){
          console.log(data);
          deferred.reject(data);
        });
        return deferred.promise;
      }

     function createClass(idCourse,data) {
        var deferred = $q.defer();
        $http.post(uri+idCourse+'/class',data)
        .success(function(data){
          console.log(data);
          deferred.resolve(data);
        })
        .error(function(data){
          console.log(data);
          deferred.reject(data);
        });
        return deferred.promise;
      }

      function getCourses() {
        var deferred = $q.defer();
        $http.get(uri+'course')
        .success(function(data){
          console.log(data);
          deferred.resolve(data);
        })
        .error(function(data){
          console.log(data);
          deferred.reject(data);
        });
        return deferred.promise;
      }

      function getClasses(idCourse) {
        var deferred = $q.defer();
        $http.get(uri+idCourse+'class')
        .success(function(data){
          console.log(data);
          deferred.resolve(data);
        })
        .error(function(data){
          console.log(data);
          deferred.reject(data);
        });
        return deferred.promise;
      }
    }
})();