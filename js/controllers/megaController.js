define(['controllers/controllers'],
    function (controllers) {
        controllers.controller('Mega_menuCtrl',
            ['$window','$scope', '$http', function($window,$scope, $http){
            	console.log("MegaCtrl working");			
            	/*$http.get('https://ccstore-z0za.oracleoutsourcing.com/ccstoreui/v1/collections/rootCategory?catalogId=undefined&maxLevel=1000&expand=childCategories&fields=childCategories(items)').
            	success(function(data){
            		angular.forEach(data.items, function(items){
            			console.log(items.childCategories);
            			$scope.message = items.childCategories;
            			console.log($scope.message);
            		});*/
            	});	


            }]);
});