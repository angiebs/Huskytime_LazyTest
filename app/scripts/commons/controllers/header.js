define([
    'angular',
    'jquery',
    'commons/module'
  ],
  function (angular,$, ModuleManager) {
    'use strict';

    ModuleManager.controller('HeaderController',
      [
        '$scope',
        '$rootScope',
        '$log',
        '$q',
        '$timeout',
        '$translate',
        'Static',
        '$http',
        function ($scope, $rootScope, $log, $q, $timeout, $translate, Static, $http) {
          var me = $scope;

          me.myBusy = {
            promise: $q.when(true),
            message: $translate.instant('BUSY'),
            backdrop:true,
            templateUrl:'views/commons/busy.html',
            delay:300,
            minDuration:700
          };

          $rootScope.$on(Static.EVENT_BUSY,function(event, promise){
            if (promise){
              me.myBusy.promise = promise;
            }
          });

          //Testing CgBusy
          me.testBusy = function(){
            var deferred = $q.defer();
            $timeout(function(){
              $log.debug("dummy busy test");
              deferred.resolve(true);
            },5000);

            return deferred.promise;
          };

          me.runTestBusy = function(){
            $log.debug('clicked on test busy');
            $rootScope.$emit(Static.EVENT_BUSY,me.testBusy());
            //$rootScope.$emit(Static.EVENT_BUSY,)
          };
        }
      ]
    );
  });
