app.controller('d3donut',['$scope','jsondata',function($scope,jsondata){

	jsondata.getJsonData().then(function(response){			
        	$scope.jsonObjs = response.data;
    	});

	$scope.pushJson = function(){
		var formObj = {};
		if(typeof $scope.angular != 'undefined' && typeof $scope.d3 != 'undefined'){
			formObj.angular = $scope.angular;
			formObj.d3 = $scope.d3;
			$scope.jsonObjs.push(formObj);
		}				
	};
}]);