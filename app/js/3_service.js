// create new module called "myServices"
// no dependencies
var myServices = angular.module('myServices', []);

// add factory named "message"
myServices.factory('message', [function() {
	var fn = {};

	// add method "hello" to the factory
	fn.hello = function(text) {
		// add "Hello!" before the given message 
		return 'Hello!' + text;
	}
	return fn;
}]);