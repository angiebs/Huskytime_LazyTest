/*jshint unused: vars */
define([
  'angular',
  'angular-ui-router',
  'angular-cookies',
  'angular-sanitize',
  'angular-resource',
  'angular-animate',
  'angular-touch',
  'angular-messages',
  'includes' ],
function (angular){
  'use strict';

  /**
   * @ngdoc Angular SharpEye Definition
   * @name sharpeye
   * @description
   * # sharpeye
   *
   * Main module of the application.
   */

  return angular
    .module('huskytime', [
      'huskytime.commons',
      /*angJSDeps*/
      'ngCookies',
      'ngMessages',
      'ngResource',
      'ngSanitize',
      'ui.router',
      'ngAnimate',
      'ngTouch'
    ]);
});
