class EventSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :city_name, :venue_name, :start_time, :stop_time
end
