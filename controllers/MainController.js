var app = angular.module('parseQ');

app.controller('mainController', function($scope, parseService){
	
	$scope.postData = function(){
		parseService.postQ($scope.question)
	}
	
})