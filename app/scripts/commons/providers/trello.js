define([
    'angular',
    'jquery',
    'commons/module'
  ],
  function (angular,$, ModuleManager) {
    'use strict';
    //Inspired on https://github.com/acidstudios/angular-trello

    var options = {
      key: null,
      type: "popup",
      name: "HuskyTime",
      persist: true,
      interactive: true,
      scope: {
        read: true,
        write: false,
        account: false
      },
      expiration: "1hour"
    };

    ModuleManager.provider("TrelloApi", [ function() {
        this.$get = ["$q", "$rootScope", "$timeout", function ($q, $rootScope, $timeout) {
          var clazz = function () {
          };
          var trelloGet = function (command, id, params) {
            var defer = $q.defer();
            Trello[command].get(id, params, function (successBean) {
              defer.resolve(successBean);
            }, function (erroBean) {
              defer.reject(erroBean);
            });
            return defer.promise;
          };

          clazz.prototype.Authenticated = function () {
            return Trello.authorized();
          };
          clazz.prototype.Authenticate = function (key) {
            if (!key) {
              throw new Error("You must specify your trello app key");
            }else if (window.Trello) {
              //reload the page
              location.reload();
            }

            var myOptions = angular.copy(options),
            defered = $q.defer();
            require(['https://api.trello.com/1/client.js?key=' + key], function (TrelloClient) {
              Trello.setKey(key);
              Trello.authorize(angular.extend(myOptions, {
                success: function () {
                  defered.resolve(TrelloClient);
                },
                error: function () {
                  defered.reject();
                }
              }));
            }, function(){
              defered.reject();
            });


            return defered.promise;
          };
          clazz.prototype.Rest = function (method, path, params) {
            var defer = $q.defer();
            Trello.rest(method, path, params, function (successBean) {
              defer.resolve(successBean);
            }, function (errorBean) {
              defer.reject(errorBean);
            });
            return defer.promise;
          };
          clazz.prototype.Token = function () {
            return Trello.token();
          };
          clazz.prototype.actions = function (id, params) {
            return trelloGet("actions", id, params);
          };
          clazz.prototype.myBoards = function(){
            return this.Rest('GET','member/me/boards');
          };
          clazz.prototype.boards = function (id, params) {
            return trelloGet("boards", id, params);
          };
          clazz.prototype.cards = function (id, params) {
            return trelloGet("cards", id, params);
          };
          clazz.prototype.checklists = function (id, params) {
            return trelloGet("checklists", id, params);
          };
          clazz.prototype.lists = function (id, params) {
            return trelloGet("lists", id, params);
          };
          clazz.prototype.members = function (id, params) {
            return trelloGet("members", id, params);
          };
          clazz.prototype.organizations = function (id, params) {
            return trelloGet("organizations", id, params);
          };
          return new clazz();
        }];
      }]);

    return ModuleManager;
  });
