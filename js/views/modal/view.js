// Filename: views/modal/view
define([
	'jquery',
	'underscore',
	'backbone',
	'handlebars',
	'pubsub',
	'collections/modal',
	'text!templates/modals/contact.html'
], function($, _, Backbone, Mustache, pubsub, modalCollection, contactTemplate){
  	
	$.fn.serializeObject = function(){  
  		var o = {};
		var a = this.serializeArray();
	    $.each(a, function() {
	        if (o[this.name] !== undefined) {
	            if (!o[this.name].push) {
	                o[this.name] = [o[this.name]];
	            }
	            o[this.name].push(this.value || '');
	        } else {
	            o[this.name] = this.value || '';
	        }
	    });
	    return o;
	}
	
	var modalView = Backbone.View.extend({
    	el: $("#modal"),
    	initialize: function(){
			//--> PRE-LOAD CERTAIN MODALS FOR USE BY ALL VIEWS
			this.renderModal('contact');
			this.collection = modalCollection;													
		},
 
		template: function(tmpl, items){
			var template = Handlebars.compile(tmpl);
			return template(items);
	    },

	    renderModal: function(){
	      	var self = this;
			this.$el.html(self.template(contactTemplate));
	    },

		events: {
			'click .openModal': 'renderModal',
			'submit #modalForm': 'postData',
			'click .btn-primary': 'postData'
			
		},
		
		postData: function(e) {
			e.preventDefault();
			var response = JSON.stringify($('#modalForm').serializeObject());
			this.collection.add(response);
			this.$('.modal-body .well').html(response);
			
			//alert(response);
		}
  });
  return new modalView;

});


