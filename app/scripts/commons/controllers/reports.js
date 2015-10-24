define([
    'angular',
    'jquery',
    'commons/module'
  ],
  function (angular,$, ModuleManager) {
    'use strict';

    ModuleManager.controller('ReportsController',
      [
        '$scope',
        '$log',
        '$timeout',
        'TrelloApi',
        function ($scope,$log, $timeout, TrelloApi) {
          //Your Magic here

        }
      ]
    );
  });
