class CreateSales < ActiveRecord::Migration[5.0]
  def change
    create_table :sales do |t|
      t.references :store, index: true, foreign_key: true
      t.references :drink, index: true, foreign_key: true
    end
  end
end
