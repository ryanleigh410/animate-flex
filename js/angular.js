/*
    Angular logic: Controller, service

    Author: Jamie Gross
    Version: 27 July 2016
*/
var animateFlexApp = angular.module('animateFlexApp',[]);

//animateFlexApp.directive('myDirective', function() {});

animateFlexApp.controller('FlexCtrl', ['$scope', 'FlexService', function($scope, FlexService) {
	// Scope variables
	$scope.menuVis = true;
	// All selected values
	$scope.selected = {
		directions: "",
		apples: "",
		limes: "",
		lemons: ""
	}
	// Options for all select tags
	$scope.directions = [
		{
			value:'Row',
			label:'Row'
		},
		{
			value:'Column',
			label:'Column'
		}
	];

	$scope.changeMenu = function() {
		if($scope.menuVis) {
			console.log("HIDE: " + $scope.menuVis);
			return "hidden";
		} else {
			console.log("NOT: " + $scope.menuVis);
			return "not-hidden-block";
		}
	}

}]);

animateFlexApp.service('FlexService', function() {

});
