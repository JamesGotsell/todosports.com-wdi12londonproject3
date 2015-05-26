class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :api_id
      t.string :url
      t.string :title
      t.string :description
      t.string :start_time
      t.string :stop_time
      t.integer :venue_id
      t.string :venue_url
      t.string :venue_name
      t.boolean :venue_display
      t.string :venue_address
      t.string :city_name
      t.string :region_name
      t.string :region_abbr
      t.string :country_name
      t.integer :all_day
      t.float :latitude
      t.float :longitude
      t.string :geocode_type
      t.integer :trackback_count
      t.integer :calendar_count
      t.integer :comment_count
      t.integer :link_count
      t.string :created
      t.string :owner
      t.string :modified

      t.timestamps null: false
    end
  end
end
