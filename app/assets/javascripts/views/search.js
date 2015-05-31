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

      search: function(){
        // how to get this search from the search bar input to search and display the api 
        console.log("hello")
        // var search term is var query within the api! 
        var searchTerm = $('#search').val()
        console.log(searchTerm) 
      },
      render:{
        // think how it will get rendered // 
        new PageableCollection.getPage(1).done(function(data){
          console.log(data)
          self.render(data)
        }
      }
    });
});
    

