define([
    'angular',
    'jquery',
    'dummy/module'
  ],
  function (angular,$, ModuleManager) {
    'use strict';

    ModuleManager.controller('DummyController',
      [
        '$scope',
        '$log',
        '$timeout',
        function ($scope,$log, $timeout) {
          //Your Magic here

        }
      ]
    );
  });
