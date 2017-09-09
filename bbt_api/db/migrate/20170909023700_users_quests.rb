class UsersQuests < ActiveRecord::Migration[5.0]
  def change
    create_table :users_quests do |t|
      t.references :quest, index: true, foreign_key: true
      t.references :user, index: true, foreign_key: true
    end
  end
end
