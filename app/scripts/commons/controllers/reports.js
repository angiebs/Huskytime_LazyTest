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
        'Locker',
        'Static',
        function ($scope,$log, $timeout, TrelloApi, Locker, Static) {
          var me = $scope;

          me.lists = Locker.getValue(Static.SELECTED_LISTS, []);

        }
      ]
    );
  });
