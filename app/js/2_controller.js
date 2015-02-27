// create new module called "myControllers"
// uses "myServices" module as dependencies
var myControllers = angular.module('myControllers', ['myServices']);

// add controller named "showText"
// need help from factory named "message" to do a job
myControllers.controller('showText', ['$scope', 'message', function($scope, message) {
	// make data available within this controller
	$scope.name = message.hello('pum');
}]);