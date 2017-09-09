class Quests < ActiveRecord::Migration[5.0]
  def change
    create_table :quests do |t|
      t.integer :multiplier, default: 1
      t.string :description
      t.integer :bonus_points
      t.references :store, index: true, foreign_key: true
    end
  end
end
