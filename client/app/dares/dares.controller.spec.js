'use strict';

describe('Controller: DaresCtrl', function () {

  // load the controller's module
  beforeEach(module('dareApp'));

  var DaresCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DaresCtrl = $controller('DaresCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
