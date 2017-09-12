# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "Seeding Data ..."

# Helper functions
def open_asset(file_name)
  File.open(Rails.root.join('db', 'seed_assets', file_name))
end

# Only run on development (local) instances not on production, etc.
unless Rails.env.development?
  puts "Development seeds only (for now)!"
  exit 0
end

User.destroy_all

User.create!({
  name: "Simon",
  age: 30,
  email: "simon_chanct@hotmail.com",
  username: "derpyfrs",
  created_at: Time.now,
  password_digest: User.digest('foobar')
  })

User.create!({
  name: "sammy",
  age: 21,
  email: "stam@youtube.com",
  username: "VNCVRZ33",
  created_at: Time.now,
  password_digest: User.digest('meow')

  })

