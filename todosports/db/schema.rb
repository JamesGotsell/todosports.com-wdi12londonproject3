# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150525110013) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "events", force: :cascade do |t|
    t.string   "api_id"
    t.string   "url"
    t.string   "title"
    t.string   "description"
    t.string   "start_time"
    t.string   "stop_time"
    t.integer  "venue_id"
    t.string   "venue_url"
    t.string   "venue_name"
    t.boolean  "venue_display"
    t.string   "venue_address"
    t.string   "city_name"
    t.string   "region_name"
    t.string   "region_abbr"
    t.string   "country_name"
    t.integer  "all_day"
    t.float    "latitude"
    t.float    "longitude"
    t.string   "geocode_type"
    t.integer  "trackback_count"
    t.integer  "calendar_count"
    t.integer  "comment_count"
    t.integer  "link_count"
    t.string   "created"
    t.string   "owner"
    t.string   "modified"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.string   "raw"
  end

  create_table "users", force: :cascade do |t|
    t.string   "name"
    t.integer  "age"
    t.text     "picture"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end