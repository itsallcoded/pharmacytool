define(['controllers/controllers'],
    function (controllers) {
        controllers.controller('AboutCtrl',
            ['$scope', function($scope){
            	console.log("AboutCtrl working");
            	$scope.message = 'Hello Ur in About Page'


            	
            }]);
});