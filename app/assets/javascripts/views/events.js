// pagination not working because it should render the next 10 results

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
        self.render(data.events.event)
      });
    },

    // using jQuery  for the click functions
    render: function(data, pageQuery){
      
      function addEventHandler(selector, fnName) {
        self.$el.find(selector).click(function () {
          // if fnName is abc then self.collection[fnName]() is exactly the same as self.collection.abc()
          self.collection[fnName]().done(function(data){
            self.render(data)
          })
        });
      }
      var self = this;
      this.currentPage = pageQuery ? pageQuery : 1;
      var template = _.template(EventsTemplate);
      this.$el.html(template({events: data}));
      addEventHandler('.next_page', 'getNextPage');
      // when the .next_page or .previous_page throw an error on the events template title property of null
      // the page doesn't render the next 10 events, why doesn't it render!!! 
      addEventHandler('.previous_page', 'getPreviousPage');
      return this.el;

    },

    events: {
      'click .add'                  : 'addToFavourites',
      'click #submit-search'        : 'submitSearch',
      'click button.next_page'      : 'goToNextPage',
      'click button.previous_page'  : 'goToPreviousPage'
     },

    submitSearch: function(page){
      var self = this;
      this.query = $("#search").val();
      var pageQuery = page ? page : 1; 

      // is the query correct? i think i can just add hard code the location here! 
      $.getJSON("/events/search?query="+encodeURIComponent(this.query)+"&page="+ pageQuery, function(data){
        var events = data.events; // raw json objects

        // I.   Flush self.collection
        // II.  Create new instances of Event() Model with every object in data.events
        // III. Push every event in self.collection 
        // IV.  re-render the view , because the collection now contains the new events gathered with the search , the list of events will be the search results
        // V. Come back to gerry for pagination 
        self.collection.reset(); 
        self.collection.add(events)
        self.render(events, pageQuery)
        // when the next_page  is click the collection isn't re-rendering on the events page 
       
      })
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
    },

    goToNextPage: function(){
      this.pageQuery++
      this.refreshData()
    },
    goToPreviousPage: function(){
      this.pageQuery--
      this.refreshData()
    },

    refreshData: function(){
      
    }

  });


  return EventsView;
  return SearchBarView;
});