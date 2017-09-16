class CreateOrders < ActiveRecord::Migration[5.0]
  def change
    create_table :orders do |t|
    	t.string :order, array: true, default: []
    	t.integer :user_id

      t.timestamps
    end
  end
end
