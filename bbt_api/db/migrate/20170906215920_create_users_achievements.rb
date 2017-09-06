class CreateUsersAchievements < ActiveRecord::Migration[5.0]
  def change
    create_table :users_achievements do |t|
      t.references :achievement, index: true, foreign_key: true
      t.references :user, index: true, foreign_key: true

    end
  end
end
