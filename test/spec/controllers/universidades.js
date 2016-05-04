'use strict';

describe('Controller: UniversidadesCtrl', function () {

  // load the controller's module
  beforeEach(module('gestorTemariosApp'));

  var UniversidadesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UniversidadesCtrl = $controller('UniversidadesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
