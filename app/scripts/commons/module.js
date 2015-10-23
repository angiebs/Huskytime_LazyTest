define([
    'angular',
    'angular-ui-router',
    'js-data-angular'
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
    var module = angular.module('huskytime.commons', ['ui.router','js-data']);


    module.config([
      '$stateProvider',
      'DSProvider',
      function ($stateProvider, DSProvider) {

        $stateProvider
          .state('settings', {
            url: '/settings',
            templateUrl: 'views/commons/settings.html',
            controller: 'SettingsController'
          });
      }]);

    module.run(function($rootScope){
      //Want to provide some global functions



    });

    return module;
  });
