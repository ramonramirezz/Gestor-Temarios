'use strict';

/**
 * @ngdoc overview
 * @name gestorTemariosApp
 * @description
 * # gestorTemariosApp
 *
 * Main module of the application.
 */
angular
  .module('gestorTemariosApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngLodash'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/carrera.html',
        controller: 'CarreraCtrl as vm'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/Materia/:id', {
        templateUrl: 'views/materia.html',
        controller: 'MateriaCtrl as vm'
      })
      .when('/Carrera', {
        templateUrl: 'views/carrera.html',
        controller: 'CarreraCtrl as vm'
      })
      .otherwise({
        redirectTo: '/Carrera'
      });
  });
