define(['controllers/controllers'],
    function (controllers) {
        controllers.controller('FormsCtrl',
            ['$scope', function($scope){
            	console.log("formsCtrl working");
				$scope.user = '';
				$scope.email = '';
            }]);
});
