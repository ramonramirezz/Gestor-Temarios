'use strict';

describe('Service: StudentsCrud', function () {

  // load the service's module
  beforeEach(module('gestorTemariosApp'));

  // instantiate service
  var StudentsCrud;
  beforeEach(inject(function (_StudentsCrud_) {
    StudentsCrud = _StudentsCrud_;
  }));

  it('should do something', function () {
    expect(!!StudentsCrud).toBe(true);
  });

});
