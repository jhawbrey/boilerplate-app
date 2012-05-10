// Filename: router.js
define([
	'jquery',
	'Underscore',
	'Backbone'
], function($, _, Backbone ){
  var AppRouter = Backbone.Router.extend({
    routes: {
      	// Define some URL routes
      	'!/page1': 'page1',
		'!/page2': 'page2',
		'!/page3': 'page3',
      
      	// Default
      	'*actions': 'defaultAction'
    },
	page1: function(id){
      	require(['views/page1/view'], function(page1View) {
			page1View.render();
			markActiveLink();
		});
    },
    page2: function(id){
      	require(['views/page2/view'], function(page2View) {
			page2View.fetchData();
			markActiveLink();
		});
    },
    page3: function(actions){
      	require(['views/page3/view'], function(page3View) {
			page3View.render();
			markActiveLink();
		});
    },
	defaultAction: function(actions){
      	// We have no matching route, lets display the home page 
      	require(['views/page1/view'], function(page1View) {
			page1View.render();
			markActiveLink();
		});
    }
  });

	
	var markActiveLink = function() {
		$("ul.nav li").removeClass("active");   
		$("ul.nav li").filter(function() {
			var currentURL = window.location.toString().split("/");
			var href = $(this).children("a").attr("href"); 	
			if(href) {
				return href.replace('#!/', '') == currentURL[currentURL.length-1];
			}
	    }).addClass("active");

	   	if($("ul.nav li").hasClass("active") == false) {
	   		$("ul.nav li:nth-child(1)").addClass("active");
	    }
	}

  	var initialize = function(){
		Backbone.emulateJSON = true;
    	var app_router = new AppRouter;
    	Backbone.history.start({root: '/'});
  	};

  	return { 
    	initialize: initialize
  	};
});
