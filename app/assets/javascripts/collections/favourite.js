// i need to fetch for the db and display in the myevents.html

define([
  'underscore',
  'backbone',
  'paginator',
  'models/favourite'
], function(_, Backbone, PageableCollection, Favourite){
     // why can't it read the extend

    return Backbone.Collection.extend({

    model: Favourite, 
    url: "/favourites"
    }); 

})