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
    .factory('Locker', function($q, $log, DS, Preference){
      var extra = {},
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
          return Preference.create(attrs,options);
        }
      };

      clazz.prototype.remove = function(id){
        return Preference.destroy(id);
      };

      clazz.prototype.setValue = function(id, value, options){
        var obj = {
          id : id,
          value : value
        };

        $log.debug("Saving in locker", id, value);
        return Preference.create(obj,options)
      };


      clazz.prototype.getValue = function(id, defaultValue){
        var result = Preference.get(id) || { value : defaultValue};
        if (result){
          result = result.value;
        }
        $log.debug('Get value ', id, result);
        return result;
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
