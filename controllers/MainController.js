var app = angular.module('parseQ');

app.controller('mainController', function($scope, httpRequestInterceptor, parseService){
	
	$scope.postData = function(){
		parseService.postQ($scope.addQuestion).then(function(result){
			console.log(result.data);
			
		})
	}
	
})