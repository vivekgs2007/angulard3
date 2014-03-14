app.service('jsondata', function ($http) {
	this.getJsonData = function () {
	    var promise = $http({
	    	method : 'POST',
	    	url :'./data.json'
	    }).success(function(data, status, headers, config) {
	        return data;
    	});
    	return promise;
	};
});