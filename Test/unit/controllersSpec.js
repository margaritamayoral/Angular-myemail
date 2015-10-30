'use strict';

/* jasmine specs for controllers go here */

describe('TestCtrl', function() {
	
	beforeEach(module('MyApp'));

  it("should create the title inside the input, inject(function($controller) {
	var scope ={},
		ctrl= $controller('TestCtrl',{$scope:scope});
	expect(scope.title).toBe(text);
  }));

});
