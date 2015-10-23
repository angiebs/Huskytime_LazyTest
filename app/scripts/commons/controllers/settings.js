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
      'TrelloApi',
      function ($scope, $log, $timeout, $translate, growl, Locker, Static, TrelloApi) {

       //Variable Initialization
        var me = $scope; //Im the scope

        function _loadTrello(){
          //Testing if key is a 32 characters hexadecimal
          if (me.pref.applicationKey !== '' &&  /[0-9a-fA-F]{32}?/.test(me.pref.applicationKey)){
            $log.debug("trying to load and authenticate with trello client.js");
              TrelloApi.Authenticate(me.pref.applicationKey).then(function(){
                //change view
                $log.debug("im in");
                TrelloApi.myBoards().then(function(success){
                  $log.debug('boards?', success);
                })
              },function(){
                growl.error("Oops! Taco went for a walk! try to refresh the page");
              });
          } else {
            growl.error("Oops! application key not looking good to me");
          }
        }

        me.pref = {
          locale : Locker.getValue(Static.PREFERENCE_LOCALE,$translate.use()),
          applicationKey : Locker.getValue(Static.PREFERENCE_TRELLO_APPLICATION_KEY,''),
        };



        me.save = function() {
          $log.debug('Saving preferences in localstorage', me.pref);

          Locker.setValue(Static.PREFERENCE_LOCALE,me.pref.locale);
          Locker.setValue(Static.PREFERENCE_TRELLO_APPLICATION_KEY,me.pref.applicationKey);

          _loadTrello();
        };

        me.reset = function(){
          Locker.remove(Static.PREFERENCE_LOCALE);
          Locker.remove(Static.PREFERENCE_TRELLO_APPLICATION_KEY);
          me.pref = {
            locale : $translate.use(),
            applicationKey : '',
          }
        };

        me.setLanguage = function(){
          $translate.use(me.pref.locale);
        };

        //JUST FOR TESTING PURPOSES

        me.testBusy = function(config) {
          // simulate the busy event calls normally provided by the http interceptor provided with this module
          var reconfig = angular.extend({},{remaining:0}, config);

          $scope.$broadcast('busy.begin', reconfig);
          $timeout(function() {
            $scope.$broadcast('busy.end', reconfig);
          }, 1000);
        };

        $scope.$on('$viewContentLoaded', function(){
          _loadTrello();
        });
      }
    ]
  );
});
