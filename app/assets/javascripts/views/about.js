define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/about'
], function($, _, Backbone, AboutTemplate) {

  return Backbone.View.extend({
    el: "main",

    render: function() {
      var template = _.template(AboutTemplate);
      this.$el.html(template());
      return this.el;
    }
  });
});