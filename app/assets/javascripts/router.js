define([
  'jquery',
  'underscore',
  'backbone',
  'paginator',
  'views/application',
  'views/search',
  'views/events',
  'views/show',
  'views/myevents',
  'views/directions',
  'views/home',
  'views/about'
], function($, _, Backbone, PageableColllection, ApplicationView, SearchBarView, EventsView, ShowView, myEventsView, DirectionsView,  HomeView, AboutView){

  var Router = Backbone.Router.extend({

    routes: {
      ''          : 'home',
      'about'     : 'about',
      'events'    : 'events',
      'myevents'  : 'myEvents',
      'directions': 'directions',
      'events/:id': 'Show',
      '*actions'  : 'defaultAction'
    }
  });

  var layout = function(){
    // new ApplicationView().render();
    // new SearchBarView().render();
  }

  var initialize = function() {
    layout();
    console.log("router")

    var router = new Router;

    router.on('route:home', function(){
      console.log("home");
      new HomeView().render();
    });

    router.on('route:about', function(){
      console.log("about");
      new AboutView().render();
    });

    router.on('route:events', function(){
      console.log("events");
      new EventsView();
    });

    router.on('route:Show', function(id){
      console.log("Show", id);
      new ShowView(id);
    });
    
    router.on('route:myEvents', function(){
      console.log("myevents");
      new myEventsView();
    });

    router.on('route:directions', function(){
      console.log("directions");
      new DirectionsView();
    });
  
    router.on('route:defaultAction', function(actions) {
      console.log('No route:', actions);
    });

    Backbone.history.start();
  }

  return {
    initialize: initialize
  }
});