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

ActiveRecord::Schema.define(version: 2019_11_26_131348) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "alerts", force: :cascade do |t|
    t.float "long"
    t.float "lat"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_alerts_on_user_id"
  end

  create_table "connections", force: :cascade do |t|
    t.integer "asker_id", null: false
    t.integer "responder_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["asker_id", "responder_id"], name: "index_connections_on_asker_id_and_responder_id", unique: true
    t.index ["asker_id"], name: "index_connections_on_asker_id"
    t.index ["responder_id"], name: "index_connections_on_responder_id"
  end

  create_table "responses", force: :cascade do |t|
    t.float "long"
    t.float "lat"
    t.bigint "user_id"
    t.bigint "alert_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["alert_id"], name: "index_responses_on_alert_id"
    t.index ["user_id"], name: "index_responses_on_user_id"
  end

  create_table "trips", force: :cascade do |t|
    t.float "start_lat"
    t.float "start_long"
    t.float "end_lat"
    t.float "end_long"
    t.string "start_point"
    t.string "end_point"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_trips_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "name"
    t.string "phone_number"
    t.string "profile_picture"
    t.string "username"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "alerts", "users"
  add_foreign_key "responses", "alerts"
  add_foreign_key "responses", "users"
  add_foreign_key "trips", "users"
end
