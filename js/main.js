require.config({
  paths: {
	  baseUrl: 'js',
/*    jquery: [
      '//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min',
      'jquery'
    ],
*/
    jquery: 'libs/require-jquery',
    mustache: 'libs/mustache',
    underscore: 'libs/underscore',
    backbone: 'libs/backbone',
    bootstrap: 'libs/bootstrap',
	  templates: '../templates'
  },
  shim: {
    'underscore': {
      dep: ['jquery'],
      exports: '_'
    },
    'backbone': {
      deps: ['jquery', 'underscore'],
      exports: 'Backbone'
    },
    'bootstrap': {
      deps: ['jquery'],
      exports: 'bootstrap'
    }
  }
});

require([
  'bootstrap',
    'app'
], function(Bootstrap, app){
  	app.initialize();	
});
