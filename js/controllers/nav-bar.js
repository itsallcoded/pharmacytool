/*global define*/
'use strict';

define(['angular', 'app'], function (angular, app) {

    app.directive("commonHeader", function () {
        return {
            restrict: "EA",
            templateUrl: "views/nav-bar.html",
            controller:  'HeaderCtrl'
        };
    });

    app.controller("HeaderCtrl", function ($scope, $http) {
        console.log('HeaderCtrl working');
    });
    
});