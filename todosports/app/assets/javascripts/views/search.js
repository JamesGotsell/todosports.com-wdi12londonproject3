define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/searchbar'
], function($, _, Backbone, SearchBarTemplate) {

  return Backbone.View.extend({
    el: "main",
    render: function() {
      var template = _.template(SearchBarTemplate);
      this.$el.html(template());
      return this.el;
    }
  });
});