// MODULE
var app = angular.module('app', []);

// CONTROLLERS
app.controller('mainController', ['$scope', '$http', function ($scope, $http) {
	$http.get('http://swapi.co/api/people')
		.success(function(result) {
			$scope.people = result.results;
		})
		.error(function(data, status) {
			console.log(data);
		});

	$scope.searchQuery = '';
}]);