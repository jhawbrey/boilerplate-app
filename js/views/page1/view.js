// Filename: views/page1/view

define([																	// Define module and it's dependencies
  	'jquery',
  	'underscore',
  	'backbone',
	'handlebars',
	'pubsub',
	'views/modal/view',
	'text!templates/page1/page1.html'
], function($, _, Backbone, Mustache, pubsub, modalView, page1Template){
	$('body').tooltip({
		selector: "a[rel=tooltip]"
	});
	var page1View = Backbone.View.extend({									// Create view for home page						
    	el: $("#page"),														// Define parent container for home page

    	initialize: function() {
			modalView.renderModal('contact');
		},
		
		template: function(items){
			var template = Handlebars.compile(page1Template);
			return template(items);

	    },

	    render: function(){
	      	this.$el.html(this.template());
	    },

		events: {}															// Define events and Methods to listen for

  	});
  return new page1View;
});
