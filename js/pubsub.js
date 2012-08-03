define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone){
  
	var pubsub = _.extend({}, Backbone.Events);
  	return pubsub;
});
