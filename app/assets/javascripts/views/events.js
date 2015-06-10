// pagination not working because it should render the next 10 results

define([
  'jquery',
  'underscore',
  'backbone',
  'collections/events',
  'models/event',
  'lib/backbone.googlemaps-min',
  'text!templates/events'
 ], function($, _, Backbone, PageableCollection, Event, GoogleMap, EventsTemplate){

  var EventsView = Backbone.View.extend({
    el: "main",
    initialize: function(){
      var self = this;
      this.collection = new PageableCollection();
      this.pageQuery = 1
      this.query = "sport"
      this.refreshData()

      this.map;
      this.infowindow;
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
      self.mapInitialize();
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
      $.ajax({
        method: "POST",
        url: "/favourites",
        data: {  event_id: $(event.currentTarget).data("id")  }
      }).done(function(data) {
        Backbone.history.navigate('/myevents', true);
      });
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

      $.getJSON( [uri, "?", params].join(""), function(data){
        self.collection.reset(); 
        self.collection.add(data.events)
        console.log(self.collection)
        self.render()
      })
    },

    addInfoWindowForEvent: function(location, marker){
      google.maps.event.addListener(marker, 'click', function() {
        
        if(this.infowindow != undefined) infowindow.close()
        infowindow = new google.maps.InfoWindow({
            content: "<p>" + location.get('title') + location.get('city_name') + location.get('venue_name') + location.get('start_time') + location.get('description') + "</p>"
        });
        
        infowindow.open(this.map,this);
      });
    },

    createMarkerForEvent: function(location){
      var self = this;
      var latlng = new google.maps.LatLng(location.get("latitude"), location.get("longitude"));
      var map = this.map;
      marker = new google.maps.Marker({
        position: latlng,
        map: map,
        title:"Hello World!",
      });
       self.addInfoWindowForEvent(location, marker)
    },

    mapEvents: function(){
      var self = this;
      $.each(self.collection.models, function(i, location){
        self.createMarkerForEvent(location);
      })
    },

    mapInitialize: function(){
      var mapcanvas = document.getElementById('map-canvas');
      var mapOptions = {
        zoom: 12,
        center: new google.maps.LatLng(51.506178,-0.088369),
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      this.map = new google.maps.Map(mapcanvas, mapOptions);
      this.mapEvents();
    }
  });
 return EventsView;
});