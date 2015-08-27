/*global define*/
'use strict';

define(['angular', 'app'], function (angular, app) {

    app.directive("footerBlock", function () {
        return {
            restrict: "EA",
            templateUrl: "views/footer.html",
            controller:  'footerCtrl'
        };
    });

    app.controller("footerCtrl", function ($scope, $http) {
        console.log('footerCtrl working');
    });
    
});