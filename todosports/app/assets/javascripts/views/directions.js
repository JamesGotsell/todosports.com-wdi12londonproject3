// google directions and geolocation javascript is coded here 

define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/directions'
], function($, _, Backbone, DirectionsTemplate) {

  return Backbone.View.extend({
    el: "div",

    render: function() {
      var template = _.template(DirectionsTemplate);
      this.$el.html(template());
      return this.el;
    }
  });
});