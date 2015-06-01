define([
  'jquery',
  'underscore',
  'backbone',
  'collections/events',
  'models/event',
  'text!templates/events'
 ], function($, _, Backbone, PageableCollection, Event, EventsTemplate, SearchBarTemplate){

  var api_key  = EVENTFUL_API_KEY;

  var EventsView = Backbone.View.extend({
    el: "main",
    initialize: function(){
      var self = this;
      this.collection = new PageableCollection();

      this.collection.getPage(1).done(function(data){
        console.log(data)
        self.render(data)
      });
    },

    // using jQuery  for the click functions
    render: function(data){
      function addEventHandler(selector, fnName) {
        self.$el.find(selector).click(function () {
          // if fnName is abc then self.collection[fnName]() is exactly the same as self.collection.abc()
          self.collection[fnName]().done(function(data){
            self.render(data)
          })
        });
      }
      var self = this;
      var template = _.template(EventsTemplate);
      this.$el.html(template({events: data.events.event}));
      addEventHandler('.next_page', 'getNextPage');
      addEventHandler('.previous_page', 'getPreviousPage');
      return this.el;
    },

    events: {
      'click .add' : 'addToFavourites'
    },

    addToFavourites: function(event){
      event.preventDefault();
      var event_id = $(event.currentTarget).data("id");

      // Make an ajax request to get the data 
      $.ajax({
        method: "GET",
        url: "http://api.eventful.com/json/events/get?id="+event_id+"&app_key=" + api_key,
        dataType: "jsonp"
      }).done(function(data) {

        var eventData = {
          "api_id": data.id,
          "url": data.url,
          "title": data.title,
          "description": data.description,
          "start_time": data.start_time,
          "stop_time": data.stop_time,
          "venue_id": data.venue_id,
          "venue_url": data.venue_url,
          "venue_name": data.venue_name,
          "venue_display": data.venue_display,
          "venue_address": data.venue_address,
          "city_name": data.city_name,
          "region_name": data.region_name,
          "region_abbr": data.region_abbr,
          "country_name": data.country_name,
          "all_day": data.all_day,
          "latitude": data.latitude,
          "longitude": data.longitude,
          "geocode_type": data.geocode_type,
          "trackback_count": data.trackback_count,
          "calendar_count": data.calendar_count,
          "comment_count": data.comment_count,
          "link_count": data.link_count,
          "created": data.created,
          "modified": data.modified,
          "raw": data.raw,
        }

        // Save the event locally in the database
        this.event = new Event();
        this.event.save(eventData, {
          success: function(data){
            $.ajax({
              method: "POST",
              url: "/favourites",
              data: { favourite: { event_id: data.id } }
            }).done(function(data) {
              Backbone.history.navigate('/myevents', true);
            });
          }
        });
      })
    }
  });


  // var SearchBarView = Backbone.View.extend({
  //   el: "article",

  //   render: function() {
  //     var template = _.template(SearchBarTemplate);
  //     this.$el.html(template());
  //     return this.el;
  //   },

  //   events: {
  //     'click #search' : 'search'
  //   }, 

  //   search: function(){ 
  //     var searchTerm = $('#search').val()
  //     this.collection = new PageableCollection(1); 
  //     self.render(this)
  //   }, 
  // });

  // // var Search = Backbone.PageableCollection.extend({
  // //   model: Event, 
  // //   initialize: function(searchTerm){
  // //       this.query = searchTerm.query
  // //   },

  // })

  return EventsView;
  return SearchBarView;
});