define([
  'jquery',
  'underscore',
  'backbone',
  'views/application',
  'views/search'
], function($, _, Backbone, ApplicationView, SearchBarView){

  var Router = Backbone.Router.extend({

    routes: {
      '/'           : 'Home',
      '/#events'    : 'Events',
      '/#myevents'  : 'MyEvents',
      '*actions'    : 'defaultAction'
    }
  });

  var layout = function(){
    new ApplicationView().render();
    new SearchBarView().render();
  }

  var initialize = function() {
    var router = new Router;

    router.on('route:Events', function(){
      console.log("events");
    });
    router.on('route:MyEvents', function(){
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