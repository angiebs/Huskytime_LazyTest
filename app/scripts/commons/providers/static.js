define([
    'angular',
    'commons/module'
  ],
  function (angular,ModuleManager) {
    'use strict';

    return ModuleManager.constant('Static',{
      LOCALE : 'locale',
      TRELLO_APPLICATION_KEY : 'applicationKey',

      SELECTED_LISTS : 'lists'





    });
  });
