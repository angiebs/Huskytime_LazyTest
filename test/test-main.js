var tests = [];
for (var file in window.__karma__.files) {
  if (window.__karma__.files.hasOwnProperty(file)) {
    // Removed "Spec" naming from files
    if (/Spec\.js$/.test(file)) {
      tests.push(file);
    }
  }
}

requirejs.config({
    // Karma serves files from '/base'
    baseUrl: '/base/app/scripts',

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
    'angular-google-maps' : '../../bower_components/angular-google-maps/dist/angular-google-maps',
    'lodash' : '../../bower_components/lodash/dist/lodash',
    'bootstrap' : '../../bower_components/bootstrap/dist/js/bootstrap',
    'jquery' : '../../bower_components/jquery/dist/jquery',
    'domReady' : '../../bower_components/domReady/domReady',
    'text' : '../../bower_components/text/text',
    'ionRangeSlider' : '../../bower_components/ion.rangeSlider/js/ion.rangeSlider.min',
    'angular-ui-select': '../../bower_components/ui-select/dist/select.min'
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
      'bootstrap' : ['jquery'],
      'ionRangeSlider' :  ['jquery'],
      'angular-google-maps' : ['angular','lodash'],
      'angular-ui-select' : ['angular'],
      'angular-mocks': {
        deps:['angular'],
        'exports':'angular.mock'
      }
    },
    priority: [
      'jquery',
      'bootstrap',
      'angular'
    ],
    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start
});
