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
        '$rootScope',
        '$log',
        '$q',
        '$timeout',
        'TrelloApi',
        'Locker',
        'Static',
        function ($scope, $rootScope, $log, $q, $timeout, TrelloApi, Locker, Static) {
          var me = $scope;

          me.lists = Locker.getValue(Static.SELECTED_LISTS, []);

          me.testBusy = function(){
            var deferred = $q.defer();
            $timeout(function(){
              $log.debug("dummy busy from report");
              deferred.resolve(true);
            },5000);

            return deferred.promise;
          };

          me.runTestBusy = function(){
            $log.debug('clicked on test report busy');
            $rootScope.$emit(Static.EVENT_BUSY,me.testBusy());
          };

        }
      ]
    );
  });
