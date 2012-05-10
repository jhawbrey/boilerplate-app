// Filename: main.js

// Require.js allows us to configure shortcut alias
require.config({
  paths: {
	  baseUrl: 'js',  	
	  Underscore: 'libs/underscore/underscore',
	  Backbone: 'libs/backbone/backbone',
	  Bootstrap: 'libs/bootstrap/bootstrap',
	  Mustache: 'libs/mustache/mustache',
	  templates: '../templates'
  }

});

require([

  'app',
  // Some plugins have to be loaded in order due to their non AMD compliance
  // Because these scripts are not "modules" they do not pass any values to the definition function below
  //'order!libs/jquery/jquery-min',
  'order!libs/underscore/underscore-min',
  'order!libs/backbone/backbone-min',
	'order!libs/bootstrap/bootstrap-min',
	'order!libs/mustache/mustache-min'
], function(App){
  	// The "app" dependency is passed in as "App"
  	// Again, the other dependencies passed in are not "AMD" therefore don't pass a parameter to this function
  	App.initialize();
	
});
