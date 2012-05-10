define([
  'Underscore',
  'Backbone'
], function(_, Backbone) {
  var page1Model = Backbone.Model.extend({
    defaults: {},
    validate: function(attrs){
    	if ( attrs.offerCode.length != 6 ) {
		  return "promo code must be 6 digits";
		}
	},
    initialize: function () {}
  });
  return page1Model;
});
