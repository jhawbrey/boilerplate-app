define([
  'jquery',
  'Underscore',
  'Backbone',
  'models/modal'
], function($, _, Backbone, modalModel){
  var modalCollection = Backbone.Collection.extend({
    model: modalModel,
    initialize: function(){}

  });
 
  return new modalCollection;
});
