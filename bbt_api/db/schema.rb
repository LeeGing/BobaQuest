ActiveRecord::Schema.define(version: 20170916205400) do

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

  create_table "orders", force: :cascade do |t|
    t.string   "order",      default: [],              array: true
    t.integer  "user_id"
    t.integer  "store_id"
    t.datetime "created_at",              null: false
    t.datetime "updated_at",              null: false
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
