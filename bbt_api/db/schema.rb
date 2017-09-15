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

ActiveRecord::Schema.define(version: 20170911210900) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "drinks", force: :cascade do |t|
    t.string  "name"
    t.integer "drinkpoints"
  end

  create_table "inventories", force: :cascade do |t|
    t.integer "store_id"
    t.integer "drink_id"
    t.index ["drink_id"], name: "index_inventories_on_drink_id", using: :btree
    t.index ["store_id"], name: "index_inventories_on_store_id", using: :btree
  end

  create_table "stores", force: :cascade do |t|
    t.string "name"
    t.string "address"
    t.string "location"
    t.string "phone"
  end

  create_table "transactions", force: :cascade do |t|
    t.integer "user_id"
    t.integer "inventory_id"
    t.string  "tot"
    t.integer "transpoint"
    t.index ["inventory_id"], name: "index_transactions_on_inventory_id", using: :btree
    t.index ["user_id"], name: "index_transactions_on_user_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string  "name"
    t.string  "password_digest"
    t.string  "email"
    t.string  "username"
    t.integer "age"
  end

  add_foreign_key "inventories", "drinks"
  add_foreign_key "inventories", "stores"
  add_foreign_key "transactions", "inventories"
  add_foreign_key "transactions", "users"
end
