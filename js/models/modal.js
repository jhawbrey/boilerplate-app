define([
  'underscore',
  'backbone'
], function(_, Backbone) {
  var modelModel = Backbone.Model.extend({
    defaults: {},
    validate: function(attrs){
    	/***
		if ( attrs.offerCode.length != 6 ) {
		  return "promo code must be 6 digits";
		}
		***/
	},
    initialize: function () {}
  });
  return modelModel;
});