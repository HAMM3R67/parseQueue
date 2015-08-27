var app = angular.module('parseQ');

app.service('parseService', function($http){
	
	this.postQ = function(question){
		var url = 'https://api.parse.com/1/classes/'
		
		return $http.post(url + question)	
	}
	
})