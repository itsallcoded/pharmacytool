define(['controllers/controllers'],
    function (controllers) {
        controllers.controller('InventoryCtrl',
            ['$scope','$http', function($scope, $http){
            	console.log("InventoryCtrl working");
            	$http.get('json/filter.json').success(function(data) {
			        $scope.artists = data;
			        $scope.artistOrder = 'name';
			    });
            }]);
});
