define([
  'jquery',
  'underscore',
  'backbone',
  'views/application'
  'views/search'
], function($, _, Backbone, ApplicationView, SearchBarView){

  var Router = Backbone.Router.extend({

    routes: {
      '/#search'    : 'Search',
      '/#events'    : 'Events',
      '/#myevents'  : 'MyEvents',
      '*actions'    : 'defaultAction'
    }
  });

  var layout = function(){
    new ApplicationView().render();
  }

  var initialize = function() {
    var router = new Router;

    router.on('route:search', function(){
      console.log("search");
      new SearchBarView();
    });
    router.on('route:events', function(){
      console.log("events");
    });
    router.on('route:myevents', function(){
      console.log("myevents");
    });

    router.on('route:defaultAction', function(actions) {
      console.log('No route:', actions);
    });
    layout();
    Backbone.history.start();
  }

  return {
    initialize: initialize
  }
});