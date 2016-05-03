'use strict';

describe('Controller: TemariosCtrl', function () {

  // load the controller's module
  beforeEach(module('gestorTemariosApp'));

  var TemariosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TemariosCtrl = $controller('TemariosCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TemariosCtrl.awesomeThings.length).toBe(3);
  });
});
