/*jshint unused: vars */
define([
  'angular',
  'bootstrap',
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
      /*angJSDeps*/
      'ngCookies',
      'ngMessages',
      'ngResource',
      'ngSanitize',
      'ui.router',
      'ngAnimate',
      'ngTouch',
      /*husky dependencies*/
      'huskytime.commons',
      'huskytime.locale'
    ]);
});
