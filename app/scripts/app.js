/*jshint unused: vars */
define([
  'angular',
  'bootstrap',
  'includes' ],
function (angular){
  'use strict';

  /**
   * @ngdoc Angular Huskytime Module
   * @name huskytime
   * @description
   * # huskytime
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
      'ngBusy',
      /*husky dependencies*/

      'huskytime.commons',
      'huskytime.locale'
    ]).config(function($logProvider){
      $logProvider.debugEnabled(true);
    });
});
