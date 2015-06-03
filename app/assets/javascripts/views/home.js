define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/home'
], function($, _, Backbone, HomeTemplate) {

  return Backbone.View.extend({
    el: "main",


    render: function() {
      var template = _.template(HomeTemplate);
      this.$el.html(template());
      return this.el;
    }
  });
});