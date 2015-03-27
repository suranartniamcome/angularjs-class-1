// create new module called "myApp" as our main application
// uses "myControllers" and "myFilters" modules as dependencies
var myApp = angular.module('myApp', ['ngRoute', 'myControllers']);

myApp.config(['$locationProvider', '$routeProvider',
    function($locationProvider, $routeProvider) {
	    $routeProvider
	    	.when('/', {
	    		templateUrl: 'partials/single.html',
	    		controller: 'MainCtrl'
	    	})
	    	.when('/page/:page', {
	    		templateUrl: 'partials/single.html',
	    		controller: 'PageCtrl'
	    	})
	    	.otherwise({
	    		redirectTo: '/'
	    	});

	    // enable html5Mode for pushstate ('#'-less URLs)
	    $locationProvider.html5Mode(true);
	    $locationProvider.hashPrefix('!');
}]);