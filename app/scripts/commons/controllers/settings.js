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
      'growl',
      'Locker',
      'Static',
      function ($scope, $log, $timeout, $translate, growl, Locker, Static) {
        growl.warning("This adds a warn message");
        growl.info("This adds a info message");
        growl.success("This adds a success message");
        growl.error("This adds a error message");
       //Variable Initialization
        var me = $scope; //Im the scope

        me.pref = {
          locale : Locker.getValue(Static.PREFERENCE_LOCALE,$translate.use()),
          applicationKey : Locker.getValue(Static.PREFERENCE_TRELLO_APPLICATION_KEY,''),
          secretKey : Locker.getValue(Static.PREFERENCE_TRELLO_SECRET_KEY,'')
        };

        me.save = function() {
          $log.debug('Saving preferences in localstorage', me.pref);

          Locker.setValue(Static.PREFERENCE_LOCALE,me.pref.locale);
          Locker.setValue(Static.PREFERENCE_TRELLO_APPLICATION_KEY,me.pref.applicationKey);
          Locker.setValue(Static.PREFERENCE_TRELLO_SECRET_KEY,me.pref.secretKey);

        };

        me.reset = function(){
          Locker.remove(Static.PREFERENCE_LOCALE);
          Locker.remove(Static.PREFERENCE_TRELLO_APPLICATION_KEY);
          Locker.remove(Static.PREFERENCE_TRELLO_SECRET_KEY);
          me.pref = {
            locale : $translate.use(),
            applicationKey : '',
            secretKey : ''
          }
        };

        me.setLanguage = function(){
          $translate.use(me.pref.locale);
        }

        //JUST FOR TESTING PURPOSES

        me.testBusy = function(config) {
          // simulate the busy event calls normally provided by the http interceptor provided with this module
          $scope.$broadcast('busy.begin', config);
          $timeout(function() {
            $scope.$broadcast('busy.end', config);
          }, 1000);
        };
      }
    ]
  );
});
