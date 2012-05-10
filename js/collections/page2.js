define([
  'jquery',
  'Underscore',
  'Backbone',
  'models/page2',
	'pubsub'
], function($, _, Backbone, page2Model, pubsub){
	var page2Collection = Backbone.Collection.extend({
	    
		model: page2Model,
	    
		initialize: function(){},
		
		fetchSideNav: function(){
			var self = this;

			$.getJSON("sidenav.json", function(data) {
			 	self.add(data);	
				pubsub.trigger('page2Collection:change', data);
			})
			.success(function(data) { /***	trigger success if needed	***/ })
			.error(function(data) { pubsub.trigger('page2Collection:error', data); })
			.complete(function(data) { /***	trigger complete if needed	***/ });

	    }
  	});
 
  	return new page2Collection;
});
