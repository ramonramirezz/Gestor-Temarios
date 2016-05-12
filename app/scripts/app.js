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
    'ngLodash',
    'ui.bootstrap'
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
      .when('/Carrer:id', {
        templateUrl: 'views/carrera.html',
        controller: 'CarreraCtrl as vm'
      })
      .when('/temarios', {
        templateUrl: 'views/temarios.html',
        controller: 'TemariosCtrl as vm'

      })
      .when('/pruebasTemarios', {
        templateUrl: 'views/pruebastemarios.html',
        controller: 'PruebastemariosCtrl as vm',

      })
      .when('/CrearUniversidad', {
        templateUrl: 'views/crearuniversidad.html',
        controller: 'CrearuniversidadCtrl'
      })
      .when('/universidades', {
        templateUrl: 'views/universidades.html',
        controller: 'UniversidadesCtrl as vm'
      })
      .when('/crearCarrera', {
        templateUrl: 'views/crearcarrera.html',
        controller: 'CrearcarreraCtrl as vm'
      })
      .when('/crearMateria', {
        templateUrl: 'views/crearmateria.html',
        controller: 'CrearmateriaCtrl as vm'
      })
      .otherwise({
        redirectTo: '/Carrera'
      });
  });
