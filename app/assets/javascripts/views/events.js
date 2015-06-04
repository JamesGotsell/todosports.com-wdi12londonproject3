// pagination not working because it should render the next 10 results

define([
  'jquery',
  'underscore',
  'backbone',
  'collections/events',
  'models/event',
  'text!templates/events'
 ], function($, _, Backbone, PageableCollection, Event, EventsTemplate){


  var EventsView = Backbone.View.extend({
    el: "main",
    initialize: function(){
      var self = this;
      this.collection = new PageableCollection();
      this.pageQuery = 1
      this.query = "sport"
      this.refreshData()
    },

    goToNextPage: function(){
      this.pageQuery++
      this.refreshData()
    },
    goToPreviousPage: function(){
      this.pageQuery--
      this.refreshData()
    },

    render: function(){
      var self = this;
      var template = _.template(EventsTemplate);
      this.$el.html(template({events: self.collection, currentPage: this.pageQuery}));
      return this.el;
    },

    events: {
      'click .add'                  : 'addToFavourites',
      'click #submit-search'        : 'refreshData',
      'click button.next_page'      : 'goToNextPage',
      'click button.previous_page'  : 'goToPreviousPage'
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

    

    refreshData: function(callback){
      var self = this;
      var uri = "/events/search"
      if($("#search").length > 0 && $("#search").val().length > 0) 
        this.query = $("#search").val()

      var params = $.param({
        query: this.query,
        page: this.pageQuery
      })

      $.getJSON( [uri, "?", params].join("") , function(data){
        self.collection.reset(); 
        self.collection.add(data.events)
        self.render()
      })
    }

  });

  return EventsView;
});