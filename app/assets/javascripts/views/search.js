// api searching javascript is coded here and displays the results in events view 
define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/searchbar'
], function($, _, Backbone, SearchBarTemplate) {

  return Backbone.View.extend({
    el: "article",

    render: function() {
      var template = _.template(SearchBarTemplate);
      this.$el.html(template());
      return this.el;
    },

    events: {
      'click #search' : 'search'
    }, 

    search: function(){
      console.log("hello")
      var query = $('#search').val()
      console.log(query) 
      
    }

  });
});