'use strict';

describe('Controller: CrearcarreraCtrl', function () {

  // load the controller's module
  beforeEach(module('gestorTemariosApp'));

  var CrearcarreraCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CrearcarreraCtrl = $controller('CrearcarreraCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
