app.controller('d3donut',['$scope','jsondata',function($scope,jsondata){
	$scope.jsonObjs = {};
	$scope.pushJson = function(){
		jsondata.getJsonData().then(function(response){
        	$scope.jsonObjs = response.data;
    	});
		
	};
}]);