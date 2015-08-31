define(['controllers/controllers'],
    function (controllers) {
        controllers.controller('Filter_Ctrl',
            ['$scope','$http', function($scope, $http){
            	console.log("filter_Ctrl working");
            	$http.get('json/filter.json').success(function(data) {
			        $scope.artists = data;
			        $scope.artistOrder = 'name';
			    });
            }]);
});
