var myController = angular.module('myController', []);

// myController.controller('myPage', ['$scope', function($scope){
// 	$scope.someVar = 'It works.';
// }]);

myController.controller('PageCtrl', ['$scope', '$routeParams', 'SanookAPI', '$sce', function($scope, $routeParams, SanookAPI, $sce){
	SanookAPI.query(function(data) {
    	for(var i=0; i<data.length; i++) {
	    	data[i].content = $sce.trustAsHtml(data[i].content);
    	}
    	$scope.posts = data;
    });

	$scope.page = $routeParams.pageNumber;
}]);

