define([
    'angular',
    'angular-ui-router',
    'js-data-angular',
    'datatables',
    'ui-select',
  ],
  function (angular) {
    'use strict';

    /**
     * @ngdoc Module Commons
     * @name huskytime
     * @description
     * # Features related to the Google Map Interacion
     *
     */
    var module = angular.module('huskytime.commons', ['ui.router','js-data','ui.select']);

    module.config([
      '$stateProvider',
      '$urlRouterProvider',
      'DSProvider',
      function ($stateProvider, $urlRouterProvider, DSProvider) {
        $urlRouterProvider.otherwise('/reports');


        $stateProvider
          .state('settings', {
            url: '/settings',
            templateUrl: 'views/commons/settings.html',
            controller: 'SettingsController'
          })
          .state('reports', {
            url: '/reports',
            templateUrl: 'views/commons/reports.html',
            controller: 'ReportsController'
          });
      }]);

    module.run(function($rootScope){
      //Want to provide some global functions



    });

    return module;
  });
