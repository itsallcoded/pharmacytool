define(['controllers/controllers'],
    function (controllers) {
        controllers.controller('Filter2_Ctrl',
            ['$scope','$http', function($scope, $http){
            	console.log("filter2_Ctrl working");
            	$http.get('json/mock.json').success(function(data) {
			        $scope.users = data;
			        console.log(data);
			    });
		        $scope.sort = function(keyname){
					$scope.sortKey = keyname;   //set the sortKey to the param passed
					$scope.reverse = !$scope.reverse; //if true make it false and vice versa
				}
            }]);
});
