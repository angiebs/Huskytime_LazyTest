define([
    'angular',
    'jquery',
    'commons/module',
    'text!settings.json',
    'js-data-localstorage'
  ],
  function (angular,$, ModuleManager, ExternalSettings, DSLocalStorageAdapter) {
    'use strict';

    if (!ExternalSettings){
      throw '**NOTE** - You must provide a settings.json file';
    }else {
      ExternalSettings = JSON.parse(ExternalSettings);
    }

    ModuleManager.service('Preference',function(DS){
      DS.registerAdapter('localstorage', new DSLocalStorageAdapter(), { default: true });
      return DS.defineResource({
        name: 'preference',
        maxAge: 900000,
        deleteOnExpire: 'none',
        methods: {
          // Instance Methods
          // Instance method
          //  fullName: function () {
          //    return this.first + ' ' + this.last;
          // }
        }
      });
    })
    .factory('Locker', function($q, DS, Preference){
      var me = this,
      extra = {},
      clazz = function(){};

      /**
       * Return a promise to initialize preferences in localstorage
       */
      clazz.prototype.bootstrap = function(){
        var deferred = $q.defer();
        DS.findAll('preference').then(function(settings){
          deferred.resolve(true);
        }, deferred.reject);

        return deferred.promise;
      };

      clazz.prototype.append = function(myOptions){
        //Initilize with extra option from Angular Configuration
        angular.extend(extra,myOptions);
      };

      clazz.prototype.get = function(key){
        return extra[key] || Preference.get(key);
      };

      clazz.prototype.save = function(attrs, options){

        if (extra[attrs.id]){
          extra[attrs.id] =  attrs;
          return attrs;
        }else {
          var optionsToApply = angular.extend({},{upsert:false},options);
          return Preference.create(attrs,optionsToApply);
        }
      };

      return new clazz();

    })
    .run(function(Preference, Locker, $log){
        Locker.append(ExternalSettings);
        Locker.bootstrap().then(function(){
          //Nothing yet to implement here;
        },function(error){
          $log.error('Error loading Locker ',error);
        });
    });

    return ModuleManager;
  });
