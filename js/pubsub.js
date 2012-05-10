define([
  'jquery',
  'Underscore',
  'Backbone'
], function($, _, Backbone){
  
	var pubsub = _.extend({}, Backbone.Events);
  	return pubsub;
});
