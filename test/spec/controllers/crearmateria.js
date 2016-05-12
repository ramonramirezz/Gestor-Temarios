'use strict';

describe('Controller: CrearmateriaCtrl', function () {

  // load the controller's module
  beforeEach(module('gestorTemariosApp'));

  var CrearmateriaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CrearmateriaCtrl = $controller('CrearmateriaCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
