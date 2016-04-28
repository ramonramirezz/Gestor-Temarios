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
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/Materia', {
        templateUrl: 'views/materia.html',
        controller: 'MateriaCtrl'
      })
      .when('/Carrera', {
        templateUrl: 'views/carrera.html',
        controller: 'CarreraCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
