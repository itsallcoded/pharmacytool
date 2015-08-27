/*global define*/
'use strict';

define(['angular', 'app'], function (angular, app) {

    app.directive("notificationBlock", function () {
        return {
            restrict: "EA",
            templateUrl: "views/notification.html",
            controller:  'notificationCtrl'
        };
    });

    app.controller("notificationCtrl", function ($scope, $http) {
        console.log('notificationCtrl working');
    });
    
});