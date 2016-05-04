'use strict';

describe('Controller: CrearuniversidadCtrl', function () {

  // load the controller's module
  beforeEach(module('gestorTemariosApp'));

  var CrearuniversidadCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CrearuniversidadCtrl = $controller('CrearuniversidadCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
