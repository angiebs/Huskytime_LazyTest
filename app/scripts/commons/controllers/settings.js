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
                $log.debug("im in my trello account");
                TrelloApi.myBoards().then(function(myTrelloBoards){
                  me.boards = myTrelloBoards;
                },function(){
                  growl.error('Opps! Trello Token has expired', {
                    onclose : function(){
                      TrelloApi.Deauthorize();
                      location.reload();
                    }
                  })

                })
              },function(){
                growl.error("Oops! Taco went for a walk! try to refresh the page");
              });
          } else {
            growl.error("Oops! Please provide an application key");
          }
        }

        me.pref = {
          locale : Locker.getValue(Static.LOCALE,$translate.use()),
          applicationKey : Locker.getValue(Static.TRELLO_APPLICATION_KEY,''),
          boards : [],
          lists : []
        };
        me.boards = [];
        me.lists = [];

        function _addToList(destinationList, sourceList){
          var ix = 0, ixLength = sourceList.length;
          for(ix = 0; ix < ixLength; ix++){
            destinationList.push(sourceList[ix]);
          }

          return destinationList;
        }

        me.onSelectBoard = function($item){
          $log.debug('Selected board ' + $item.name);

          TrelloApi.boardLists($item.id).then(function(successLists){
            $log.debug('founded lists for ' + $item.name,successLists);
            _addToList(me.lists,successLists);
          }, function(error){
            growl.error('Taco can not find lists on ' + $item.name);
          })
        };

        me.onRemoveBoard = function($item, $model){

        };



        me.save = function() {
          $log.debug('Saving preferences in localstorage', me.pref);

          Locker.setValue(Static.LOCALE,me.pref.locale);
          Locker.setValue(Static.TRELLO_APPLICATION_KEY,me.pref.applicationKey);

          _loadTrello();
        };

        me.reset = function(){
          Locker.remove(Static.LOCALE);
          Locker.remove(Static.TRELLO_APPLICATION_KEY);
          me.pref = {
            locale : $translate.use(),
            applicationKey : '',
          }
        };

        me.setLanguage = function(){
          $translate.use(me.pref.locale);
        };

        $scope.$on('$viewContentLoaded', function(){
          _loadTrello();
        });
      }
    ]
  );
});
