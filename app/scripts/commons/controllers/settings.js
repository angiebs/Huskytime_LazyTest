define([
    'angular',
    'commons/module'
],
function (angular,ModuleManager) {
  'use strict';

  return ModuleManager.controller('SettingsController',
    [
      '$scope',
      '$log',
      '$timeout',
      '$translate',
      'Locker',
      function ($scope, $log, $timeout, $translate, Locker) {
       //Variable Initialization
        var me = $scope; //Im the scope

        me.pref = {
          locale : Locker.getValue('locale',$translate.use()),
          applicationKey : Locker.getValue('applicationKey',''),
          secretKey : Locker.getValue('secretKey','')
        };

        me.save = function() {
          $log.debug('Saving preferences in localstorage', me.pref);

          Locker.setValue('locale',me.pref.locale);
          Locker.setValue('applicationKey',me.pref.applicationKey);
          Locker.setValue('secretKey',me.pref.secretKey);

        };

        me.setLanguage = function(){
          $translate.use(me.pref.locale);
        }

      }
    ]
  );
});
