/*global define*/
'use strict';

define(['angular', 'app'], function (angular, app) {

    app.directive("headerBlock", function () {
        return {
            restrict: "EA",
            templateUrl: "views/header.html",
            controller:  'headerCtrl'
        };
    });

    app.controller("headerCtrl", function ($scope, $http) {
        console.log('headerCtrl working');
    });
    
});