var myServices = angular.module('myServices', ['ngResource']);

myServices.factory('SanookAPI', ['$resource', function($resource) {
    var APIurl = "http://www.siamhtml.com/wp-json/posts";
    return $resource(APIurl);
}]);