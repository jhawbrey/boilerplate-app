// Filename: views/page2/view

define([																	// Define module and it's dependencies
  'jquery',
  'underscore',
  'backbone',
	'handlebars',
	'collections/page2',
	'pubsub',
	'views/modal/view',
  	'text!templates/page2/page2.html',
	'text!templates/alert/alert.html'
], function($, _, Backbone, Mustache, page2Collection, pubsub, modalView, page2Template, alertTemplate){
  var page2View = Backbone.View.extend({									// Create view for home page
    el: $("#page"),															// Define parent container for home page
	
    initialize: function(){													// Initialization actions
		var self = this;
		this.collection = page2Collection;									// Instantiate page2 collection
		pubsub.on('page2Collection:change', function(data) {				// Subscribe to collection change event. On change, render view
			self.render(data);
		});
		pubsub.on('page2Collection:error', function(data) {					//Subscribe to collection error event. On error, render error view
			self.errorMsg(data);
		});
    },
 
  
	template: function(items){
		var template = Handlebars.compile(page2Template);
			return template(items);
    },

	alertTemplate: function(items){
		var template = Handlebars.compile(alertTemplate);
			return template(items);
    },

	fetchData: function() {
		this.collection.fetchSideNav();
	},

    render: function(data){	
      	this.$el.html(this.template(data));
    },

	errorMsg: function(data) {
		data.pageURL = '#!/page2';
		this.$el.html(this.alertTemplate(data));
	},

	events: {}																// Define event and Methods to listen for
  });

	
	
	
  return new page2View;
});
