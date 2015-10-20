define([
    'angular',
    'text!settings.json',
    'angular-ui-router'
  ],
  function (angular,Settings) {
    'use strict';

    if (!Settings){
      throw '**NOTE** - You must provide a settings.json file';
    }else {
      Settings = JSON.parse(Settings);
    }

    /**
     * @ngdoc Module Commons
     * @name huskytime
     * @description
     * # Features related to the Google Map Interacion
     *
     */
    var module = angular.module('huskytime.commons', ['ui.router']);

    //you can add config
    module.config([
      '$stateProvider',
      function ($stateProvider) {

        $stateProvider
          .state('settings', {
            url: '/settings',
            templateUrl: 'views/commons/settings.html',
            controller: 'SettingsController'
          });
      }]);

    return module;
  });
