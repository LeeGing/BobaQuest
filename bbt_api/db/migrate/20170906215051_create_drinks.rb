class CreateDrinks < ActiveRecord::Migration[5.0]
  def change
    create_table :drinks do |t|

      t.references :store, index: true, foreign_key: true
      t.string :name
      t.integer :drinks_points

    end
  end
end
