// the app/scripts/main.js file, which defines our RequireJS config
require.config({
    paths: {
        angular: 'vendor/angular.min',
        jqueryUI: 'vendor/jquery-ui',
        jqueryColorbox: 'vendor/jquery-colorbox',
        jquery: 'vendor/jquery',
        domReady: 'vendor/domReady',
        reactive: 'vendor/rx'
    },
    shim: {
        angular: {
            deps: ['jquery', 'jqueryUI', 'jqueryColorbox'],
            exports: 'angular'
        },
        jqueryUI: {
            deps: ['jquery']
        },
        jqueryColorbox: {
            deps: ['jquery']
        }
    }
});

require([
  'angular',
  'app',
  'domReady',
  'reactive',
  'controllers/rootController',
  'controllers/favsController',
  'controllers/aboutController',
  'controllers/nav-bar',
  'controllers/leftnavbar',
  'controllers/footer',
  'controllers/notification',
  'controllers/header',
  'controllers/formController',
  'controllers/filterController'
  // Any individual controller, service, directive or filter file
  // that you add will need to be pulled in here.
],
  function (angular, app, domReady) {
      'use strict';
      app.config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'views/root.html',
                    controller: 'RootCtrl'
                })
                .when('/favs', {
                    templateUrl: 'views/favs.html',
                    controller: 'FavsCtrl'
                })
				        .when('/forms', {
                    templateUrl: 'views/forms.html' ,
                    controller: 'FormsCtrl'         
                })
                .when('/filter', {
                    templateUrl: 'views/filter.html' ,
                    controller: 'FilterCtrl'         
                })
                .when('/about', {
                    templateUrl: 'views/about.html',
                    controller: 'AboutCtrl'
                }).otherwise({ redirectTo: '/' });;
        }
      ]);
      domReady(function () {
          angular.bootstrap(document, ['MyApp']);

          // The following is required if you want AngularJS Scenario tests to work
          $('html').addClass('ng-app: MyApp');
      });
  }
);
