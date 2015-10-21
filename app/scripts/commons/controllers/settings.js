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
          locale : $translate.use(),
          applicationKey : '',
          secretKey : ''
        };

        $log.debug("Valor de test ", Locker.get('test'));
        $log.debug("Valor de localte ", Locker.get('locale'));

        me.save = function() {
          $log.debug('Saving preferences in localstorage', me.pref);

          Locker.save({id:'locale',value:me.pref.locale});
          //Aqui deberia. guardar en las preferencias estas keys
          //Quizas tener un boton de limpiar.
          //Aqui deberia llamar al storage provider y guardar estas preferencias
          //este localstorage es syncrono o asyncrono?
          //
        };

        me.setLanguage = function(){
          $translate.use(me.pref.locale);
        }

      }
    ]
  );
});
