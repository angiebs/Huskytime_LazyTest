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
    'angular-growl' : '../../bower_components/angular-growl-v2/build/angular-growl',
    'angular-busy' : '../../bower_components/angular-busy/dist/angular-busy.min',
    'lodash' : '../../bower_components/lodash/lodash',
    'bootstrap' : '../../bower_components/bootstrap/dist/js/bootstrap',
    'jquery' : '../../bower_components/jquery/dist/jquery',
    'domReady' : '../../bower_components/domReady/domReady',
    'text' : '../../bower_components/text/text',
    'js-data' : '../../bower_components/js-data/dist/js-data',
    'js-data-localstorage' : '../../bower_components/js-data-localstorage/dist/js-data-localstorage',
    'js-data-angular' : '../../bower_components/js-data-angular/dist/js-data-angular',
    'datatables' : '../../bower_components/datatables/media/js/jquery.dataTables.min',
    'datatables-bootstrap' : '../../bower_components/datatables/media/js/dataTables.bootstrap.min',
    'datatables-buttons' : '../../bower_components/datatables-buttons/js/dataTables.buttons',
    'datatables-buttons-html5' : '../../bower_components/datatables-buttons/js/buttons.html5',
    'datatables-buttons-colVis' : '../../bower_components/datatables-buttons/js/buttons.colVis',
    'datatables-buttons-bootstrap' : '../../bower_components/datatables-buttons/js/buttons.bootstrap',
    'datatables-responsive' : '../../bower_components/datatables-responsive/js/dataTables.responsive',
    'datatables-colreorder' : '../../bower_components/datatables-colreorder/js/dataTables.colReorder',
    'ui-select' : '../../bower_components/ui-select/dist/select.min'

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
    'angular-busy' : ['angular'],
    'angular-growl' : ['angular'],
    'bootstrap' : ['jquery'],
    'js-data-localstorage' : ['js-data'],
    'js-data-angular' : ['js-data-localstorage'],
    'datatables' : ['jquery'],
    'datatables-bootstrap' : ['datatables', 'bootstrap'],
    'datatables-buttons' : ['datatables-bootstrap'],
    'datatables-responsive' : ['datatables-bootstrap'],
    'datatables-colreorder' : ['datatables-bootstrap'],
    'datatables-buttons-html5' : ['datatables-buttons'],
    'datatables-buttons-colVis' : ['datatables-buttons'],
    'datatables-buttons-bootstrap' : ['datatables-buttons'],
    'datatables-custom' : [
      'datatables-bootstrap',
      'datatables-buttons',
      'datatables-buttons-html5',
      'datatables-buttons-colVis',
      'datatables-buttons-bootstrap',
      'datatables-responsive',
      'datatables-colreorder'
    ],
    'ui-select' : ['angular'],
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
