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
      name: null,
      persist: true,
      interactive: true,
      scope: {
        read: true,
        write: false,
        account: false
      },
      expiration: "never"
    };

    ModuleManager.provider("TrelloApi", [ function() {
        this.init = function (myOptions) {
          if (!Trello.key() && !myOptions.key) {
            throw new Error("You must specify your trello app key");
          }
          Trello.setKey(myOptions.key);
          angular.extend(options, myOptions);
        };
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
          clazz.prototype.Authenticate = function (b) {
            b = b || {};
            var c = $q.defer();
            var d = angular.copy(options);
            if (b.interactive) {
              d.interactive = true;
            }
            Trello.authorize(angular.extend(d, {
              success: function () {
                c.resolve();
              },
              error: function () {
                c.reject();
              }
            }));
            return c.promise;
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

    ModuleManager.run([ function() {
      var trelloClient = document.createElement("script");
      trelloClient.type = "text/javascript";
      trelloClient.async = true;
      trelloClient.src = "https://api.trello.com/1/client.js?key=" + options.key;
      var b = document.getElementsByTagName("script")[0];
      b.parentNode.insertBefore(trelloClient, b);
    } ]);

    return ModuleManager;
  });
