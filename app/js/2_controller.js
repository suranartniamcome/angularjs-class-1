var myControllers = angular.module('myControllers', []);

myControllers.controller('MainCtrl', ['$scope', function($scope){
	$scope.page = '1';
}]);

myControllers.controller('PageCtrl', ['$scope', '$routeParams', function($scope, $routeParams){
	$scope.page = $routeParams.page;
}]);
