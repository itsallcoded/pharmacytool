define(['controllers/controllers'],
    function (controllers) {
        controllers.controller('FilterCtrl',
            ['$scope','$http', function($scope, $http){
            	console.log("filterCtrl working");
            	$http.get('json/filter.json').success(function(data) {
			        $scope.artists = data;
			        $scope.artistOrder = 'name';
			    });
            }]);
});
