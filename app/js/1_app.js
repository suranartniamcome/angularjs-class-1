var sanook = angular.module('sanook', [
	'ngRoute',
	'myController',
	'myServices'
	]);

sanook.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider){
	
	$routeProvider
    	.when('/', {
    		templateUrl: 'partials/page.html',
    		controller: 'PageCtrl'
    	})
    	.when('/page/:pageNumber', {
    		templateUrl: 'partials/page.html',
    		controller: 'PageCtrl'
    	})
    	.otherwise({
    		redirectTo: '/'
    	});

	    // enable html5Mode for pushstate ('#'-less URLs)
	    $locationProvider.html5Mode(true);
	    $locationProvider.hashPrefix('!');
}]);