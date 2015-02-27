// create new module called "myFilters"
// no dependencies
var myFilters = angular.module('myFilters', []);

// add filter named "hi"
myFilters.filter('hi', [function() {
	return function(text){
		
		if (text != undefined) {
			// append "^0^" to the message if its length is more than 3 characters
			if( text.length > 3) {
				return text + '^0^';
			} else {
				return text;
			}
		} else {
			// ony display message if it's available
			return '';
		}
	};
}]);