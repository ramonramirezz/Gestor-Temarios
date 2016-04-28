angular.module('gestorTemariosApp').factory('StudentsService', function($resource){
    return $resource('localhost:8080/students',{},{
      'GetUser': {method: 'GET'}
    });
});
