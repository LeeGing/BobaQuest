class CreateTransactions < ActiveRecord::Migration[5.0]
  def change
    create_table :transactions do |t|
      t.references :user, index: true, foreign_key: true
      t.references :sale, index: true, foreign_key: true
      t.string :tot
      t.integer :transpoint
    end
  end
end
