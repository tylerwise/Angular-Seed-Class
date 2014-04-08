'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function(){
  describe('MyCtrl1', function() {
	var scope = {}, ctrl;
	
	beforeEach(module('myApp'));
	
	beforeEach(inject(function($controller) {
		scope = {};
		ctrl = $controller('MyCtrl1', {$scope: scope})
	}));
	
	it('should exist', inject(function () {
		expect(ctrl).not.toBe(undefined);
		})); 
		
	it('should have a car property', inject(function () {
		expect(ctrl).not.toBe(undefined);
		})); 
		
		it('should have a car.make property', inject(function () {
		expect(ctrl).not.toBe(undefined);
		})); 
		
		it('should have a car.model property', inject(function () {
		expect(ctrl).not.toBe(undefined);
		})); 
		
		it('should have a car.year property', inject(function () {
		expect(ctrl).not.toBe(undefined);
		})); 
		
		it('should have a car.price property', inject(function () {
		expect(ctrl).not.toBe(undefined);
		})); 
		
		it('car.make should be Honda', inject(function () {
		expect(ctrl).not.toBe(undefined);
		})); 
		
		it('car.model should be Civic', inject(function () {
		expect(ctrl).not.toBe(undefined);
		}));
});
	describe('MyCtrl2', function() {
	var scope = {}, ctrl;
	
	beforeEach(module('myApp'));
	
	beforeEach(inject(function($controller) {
		scope = {};
		ctrl = $controller('MyCtrl2', {$scope: scope})
	}));
	
	it('MyCtrl2 should exist', inject(function () {
		expect(ctrl).not.toBe(undefined);
		})); 
		
	it('should have a cars property', inject(function () {
		expect(ctrl).not.toBe(undefined);
		})); 
		
		it('should have 4 cars', inject(function () {
		expect(ctrl).not.toBe(undefined);
		})); 
		
		it('should be able to add one more car', inject(function () {
		expect(ctrl).not.toBe(undefined);
		})); 
		
		it('the second cars make should be "Nissan"', inject(function () {
		expect(ctrl).not.toBe(undefined);
		})); 
});


});


 



