/*global define*/
'use strict';

define(['angular', 'app'], function (angular, app) {

    app.directive("leftNav", function () {
        return {
            restrict: "EA",
            templateUrl: "views/leftnavbar.html",
            controller:  'LeftNavCtrl'
        };
    });

    app.controller("LeftNavCtrl", function ($scope, $http) {
        console.log('LeftNavCtrl working');
    });
    
});