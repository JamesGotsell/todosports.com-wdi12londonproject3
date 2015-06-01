define([
  'underscore',
  'backbone',
  'paginator',
  'models/favourite'
], function(_, Backbone, PageableCollection, Favourite){
  return Backbone.Collection.extend({
    model: Favourite, 
    url: "/favourites.json"
  });
})