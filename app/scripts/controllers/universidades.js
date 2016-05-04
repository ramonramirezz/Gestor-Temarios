// 'use strict';
//
// /**
//  * @ngdoc function
//  * @name gestorTemariosApp.controller:UniversidadesCtrl
//  * @description
//  * # UniversidadesCtrl
//  * Controller of the gestorTemariosApp
//  */
// angular.module('gestorTemariosApp')
//   .controller('UniversidadesCtrl', function ($scope) {
//     $scope.awesomeThings = [
//       'HTML5 Boilerplate',
//       'AngularJS',
//       'Karma'
//     ];
//
//     $scope.universitys = [{"name_university":"UNISON","city":"Hermosillo"},
//                            {"name_university":"UTH","city":"Hermosillo"},
//                            {"name_university":"UES","city":"Hermosillo"}
//                          ];
//
//
//   });
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
        .controller('UniversidadesCtrl', CarreraCtrl);

    CarreraCtrl.$inject = ['service','$rootScope'];

    /* @ngInject */
    function CarreraCtrl(service, $rootScope,lodash) {
        var vm = this;
        vm.title = 'UniversidadesCtrl';

        vm.universitys  = [{"name_university":"UNISON","city":"Hermosillo"},
                           {"name_university":"UTH","city":"Hermosillo"},
                           {"name_university":"UES","city":"Hermosillo"}
                          ];

    }
})();
