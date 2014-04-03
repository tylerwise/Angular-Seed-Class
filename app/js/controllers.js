'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', ['$scope', function($scope) {
		$scope.car = {make: 'Honda',
					  model: 'Civic',
					  year: 2014,
					  price: 2400
					  }
  }])
  .controller('MyCtrl2', ['$scope', function($scope) {
  
		$scope.cars = [
						{make: 'Chevy',
						 model: 'Tahoe',
						 year: 2008,
						 price: 12000
						},
						{make: 'Nissan',
						 model: 'XTerra',
						 year: 2008,
						 price: 6000
						},
						{make: 'Honda',
						 model: 'Accord',
						 year: 2013,
						 price: 18000
						},
						{make: 'Toyota',
						 model: 'Tacoma',
						 year: 2001,
						 price: 2000
						}
					 ];	 
  }]);