// Filename: views/page3/view
define([
	'jquery',
	'underscore',
	'backbone',
	'mustache',
	'pubsub',
	'views/modal/view',
	'text!templates/page3/page3.html'
], function($, _, Backbone, Mustache, pubsub, modalView, page3Template){
  	var page3View = Backbone.View.extend({
    	el: $("#page"),
    	initialize: function(){},
 
		template: function(items){
	      	//return $("#promoTemplate").tmpl(items);
			//var promotmpl = $('#promoTemplate').html();
			return Mustache.to_html(page3Template, items);
		
	    },

	    render: function(){
	      	this.$el.html(this.template());
	    },

		events: {
		  //"submit #zipForm": "getPlans",
		},

		getPlans: function(e){  
			e.preventDefault();
		  	//var value = $('#zipInput').val();

		  	if (value) {
				//Backbone.history.navigate("/plans/" + value, true);
			}
		  //this.input.val("");
		  //this.input.focus();
		}
  });
  return new page3View;
});
