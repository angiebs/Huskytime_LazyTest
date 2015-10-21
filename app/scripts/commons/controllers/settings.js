define([
    'angular',
    'commons/module',
    'language/bundle'
],
function (angular,ModuleManager,LocaleBundle) {
  'use strict';

  return ModuleManager.controller('SettingsController',
    [
      '$scope',
      '$log',
      '$timeout',
      '$translate',
      function ($scope, $log, $timeout, $translate) {
       //Variable Initialization
        var me = $scope; //Im the scope

        me.pref = {
          locale : $translate.use(),
          applicationKey : '',
          secretKey : ''
        };

        me.save = function() {
          $log.debug('Saving preferences in localstorage', me.pref);
        }

        me.setLanguage = function(){
          $translate.use(me.pref.locale);
        }

      }
    ]
  );
});
