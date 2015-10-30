'use strict';
angular 
	.module('myApp',['ngMaterial', 'ui.router', 'ngMdIcons','ui.bootstrap','ngAnimate'])
	.controller('TestCtrl', ['$scope', function($scope){
				$scope.title = 'Example title! (Change or delete me)';	
	}])