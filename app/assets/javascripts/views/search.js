// api searching javascript is coded here and displays the results in events view 
define([
  'jquery',
  'underscore',
  'backbone',
  'collections/events',
  'text!templates/searchbar'
  ], function($, _, Backbone, PageableCollection, SearchBarTemplate){

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
// create collection in here than
      search: function(){
        var searchTerm = $('#search').val()
        console.log( searchTerm) 
        // how to get this search from the search bar input to search and display the api
        url: "/events/search/" + searchTerm 
        // use /events/search/ + query -- query to api, its done via the rails side 
        console.log("hello")
        // var search term is var query within the api! 
        },

    });
});
    

