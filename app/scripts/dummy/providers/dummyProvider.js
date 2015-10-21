define([
    'angular',
    'jquery',
    'dummy/module'
  ],
  function (angular,$, ModuleManager) {
    'use strict';

    ModuleManager.provider('DummyProvider',
      [
        '$log',
        function ($log) {
          //Your magic here

        }
      ]
    );
  });
