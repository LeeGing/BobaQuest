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

ActiveRecord::Schema.define(version: 20170908224225) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "achievements", force: :cascade do |t|
    t.string  "name"
    t.string  "description"
    t.integer "awardpoint"
  end

  create_table "drinks", force: :cascade do |t|
    t.integer "store_id"
    t.string  "name"
    t.integer "drinks_points"
    t.index ["store_id"], name: "index_drinks_on_store_id", using: :btree
  end

  create_table "stores", force: :cascade do |t|
    t.string "name"
    t.string "address"
    t.string "location"
    t.string "phonenumber"
  end

  create_table "transactions", force: :cascade do |t|
    t.integer "user_id"
    t.integer "store_id"
    t.integer "drink_id"
    t.string  "tot"
    t.integer "points"
    t.index ["drink_id"], name: "index_transactions_on_drink_id", using: :btree
    t.index ["store_id"], name: "index_transactions_on_store_id", using: :btree
    t.index ["user_id"], name: "index_transactions_on_user_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "name"
    t.integer  "age"
    t.string   "password_digest"
    t.string   "email"
    t.string   "username"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.string   "provider"
    t.string   "uid"
  end

  create_table "users_achievements", force: :cascade do |t|
    t.integer "achievement_id"
    t.integer "user_id"
    t.index ["achievement_id"], name: "index_users_achievements_on_achievement_id", using: :btree
    t.index ["user_id"], name: "index_users_achievements_on_user_id", using: :btree
  end

  add_foreign_key "drinks", "stores"
  add_foreign_key "transactions", "drinks"
  add_foreign_key "transactions", "stores"
  add_foreign_key "transactions", "users"
  add_foreign_key "users_achievements", "achievements"
  add_foreign_key "users_achievements", "users"
end
