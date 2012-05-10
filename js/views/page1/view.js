// Filename: views/page1/view

define([																	// Define module and it's dependencies
  	'jquery',
  	'Underscore',
  	'Backbone',
	'Mustache',
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
			return Mustache.to_html(page1Template, items);

	    },

	    render: function(){
	      	this.$el.html(this.template());
	    },

		events: {}															// Define events and Methods to listen for

  	});
  return new page1View;
});
