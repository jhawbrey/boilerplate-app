define([
  'jquery',
  'Underscore',
  'Backbone',
  'models/page3'
], function($, _, Backbone, templateModel){
  var templateCollection = Backbone.Collection.extend({
    model: templateModel,
	initialize: function() {}
 
  return new templateCollection;
});




