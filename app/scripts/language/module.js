define([
    'angular',
    'language/bundle',
    'angular-translate-cookie'
  ],
  function (angular,LocaleBundle) {
    'use strict';

    /**
     * @ngdoc Module Locale
     * @name huskytime
     * @description
     * # Features related to Internazionalization Feature
     *
     */
    var module = angular.module('huskytime.locale', ['pascalprecht.translate']);

    module.config([
      '$translateProvider',
      function($translateProvider){
        //Dynamic Language Configurator
        angular.forEach(LocaleBundle.availableLocales,function(loc,key){
          $translateProvider.translations(loc.code, loc.source);
        });
        //Default Language
        $translateProvider.preferredLanguage(LocaleBundle.defaultLocale);

        //Using a cookie to save selected language
        $translateProvider.useCookieStorage();

      }
    ]);

    return module;
  });
