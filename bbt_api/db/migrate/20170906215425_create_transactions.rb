class CreateTransactions < ActiveRecord::Migration[5.0]
  def change
    create_table :transactions do |t|

      t.references :user, index: true, foreign_key: true
      t.references :store, index: true, foreign_key: true
      t.references :drink, index: true, foreign_key: true
      t.string :tot ##type of transaction
      t.integer :points ##points per transaction

    end
  end
end
