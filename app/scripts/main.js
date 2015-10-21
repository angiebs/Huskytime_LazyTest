/*jshint unused: vars */
require.config({
  paths: {
    'angular' : '../../bower_components/angular/angular',
    'angular-cookies' : '../../bower_components/angular-cookies/angular-cookies',
    'angular-ui-router' : '../../bower_components/angular-ui-router/release/angular-ui-router',
    'angular-sanitize' : '../../bower_components/angular-sanitize/angular-sanitize',
    'angular-resource' : '../../bower_components/angular-resource/angular-resource',
    'angular-animate' : '../../bower_components/angular-animate/angular-animate',
    'angular-touch' : '../../bower_components/angular-touch/angular-touch',
    'angular-mocks' : '../../bower_components/angular-mocks/angular-mocks',
    'angular-messages' : '../../bower_components/angular-messages/angular-messages',
    'angular-translate' : '../../bower_components/angular-translate/angular-translate',
    'angular-translate-cookie' : '../../bower_components/angular-translate-storage-cookie/angular-translate-storage-cookie',
    'lodash' : '../../bower_components/lodash/lodash',
    'bootstrap' : '../../bower_components/bootstrap/dist/js/bootstrap',
    'jquery' : '../../bower_components/jquery/dist/jquery',
    'domReady' : '../../bower_components/domReady/domReady',
    'text' : '../../bower_components/text/text'
  },
  shim: {
    'angular' : {'exports' : 'angular', deps: ['jquery']},
    'angular-ui-router' : ['angular'],
    'angular-cookies': ['angular'],
    'angular-sanitize': ['angular'],
    'angular-resource': ['angular'],
    'angular-animate': ['angular'],
    'angular-touch': ['angular'],
    'angular-messages' : ['angular'],
    'angular-translate' : ['angular'],
    'angular-translate-cookie' : ['angular-translate'],
    'bootstrap' : ['jquery'],
    'angular-mocks': {
      deps:['angular'],
      'exports':'angular.mock'
    }
  },
  priority: [
    'jquery',
    'bootstrap',
    'angular'
  ]
});

//http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
window.name = 'NG_DEFER_BOOTSTRAP!';

require([
  'angular',
  'app',
  'domReady!'
],
function(angular, app, domReady) {
  'use strict';
  /* jshint ignore:start */
  var $html = angular.element(document.getElementsByTagName('html')[0]);
  /* jshint ignore:end */
  angular.element().ready(function() {
    angular.resumeBootstrap([app.name]);
  });
});
