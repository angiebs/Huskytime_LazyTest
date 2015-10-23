define([
    'angular',
    'commons/module'
  ],
  function (angular,ModuleManager) {
    'use strict';

    return ModuleManager.constant('Static',{
      PREFERENCE_LOCALE : 'locale',
      PREFERENCE_TRELLO_APPLICATION_KEY : 'applicationKey',
      PREFERENCE_TRELLO_SECRET_KEY : 'secretKey'



    });
  });
