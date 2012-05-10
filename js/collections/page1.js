define([
  'jquery',
  'Underscore',
  'Backbone',
  'models/page1'
], function($, _, Backbone, page1Model){
  var page1Collection = Backbone.Collection.extend({
    model: page1Model,
    initialize: function(){}

  });
 
  return new page1Collection;
});
